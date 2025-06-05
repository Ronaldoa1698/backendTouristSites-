<?php

namespace App\State\AgencyReview;

use ApiPlatform\State\ProcessorInterface;
use App\Dto\Input\InputRegisterAgencyReviewContentDto;
use App\Entity\AgencyReview;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use App\Repository\AgencyReviewRepository;
use ApiPlatform\Metadata\Operation;
use App\Entity\User;
use App\Entity\Agency;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class AgencyReviewCreateContentStateProcessor implements ProcessorInterface
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private ValidatorInterface $validator,
        private AgencyReviewRepository $agencyReviewRepository
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): JsonResponse
    {
        if (!$data instanceof InputRegisterAgencyReviewContentDto) {
            throw new BadRequestHttpException('Invalid input data');
        }

        $email = $data->userEmail;
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email]);
        $agency = $this->entityManager->getRepository(Agency::class)->find($data->agencyId);
        
        if (!$user) {
            return new JsonResponse(
                ['error' => 'User not found'],
                Response::HTTP_BAD_REQUEST
            );
        }
        
        if (!$agency) {
            return new JsonResponse(
                ['error' => 'Agency not found'],
                Response::HTTP_BAD_REQUEST
            );
        }

        $agencyReview = new AgencyReview();
        $agencyReview->setContent($data->content);
        $agencyReview->setUser($user);
        $agencyReview->setAgency($agency);

        // Validate the entity
        $errors = $this->validator->validate($agencyReview);
        if (count($errors) > 0) {
            return new JsonResponse(
                ['error' => (string) $errors],
                Response::HTTP_BAD_REQUEST
            );
        }

        // Persist the entity repository
        $this->agencyReviewRepository->add($agencyReview, true);

        return new JsonResponse(
            ['message' => 'Agency review content created successfully', 'id' => $agencyReview->getId()],
            Response::HTTP_CREATED
        );
    }
}