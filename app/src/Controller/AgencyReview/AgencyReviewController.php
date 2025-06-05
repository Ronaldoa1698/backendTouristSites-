<?php

namespace App\Controller\AgencyReview;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\AgencyReviewRepository;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class AgencyReviewController extends AbstractController
{
    private AgencyReviewRepository $agencyReviewRepository;

    public function __construct(AgencyReviewRepository $agencyReviewRepository)
    {
        $this->agencyReviewRepository = $agencyReviewRepository;
    }

    public function __invoke(Request $request): JsonResponse
    {
        $agencyId = $request->attributes->get('id');

        $agencyReviews = $this->agencyReviewRepository->findBy(['agency' => $agencyId]);

        if (!$agencyReviews) {
            return new JsonResponse(
                ['error' => 'Agency review not found'],
                Response::HTTP_BAD_REQUEST
            );
        }

        $reviewsData = array_map(function ($review) {
            return [
                'id' => $review->getId(),
                'content' => $review->getContent(),
            ];
        }, $agencyReviews);

        return new JsonResponse(
            [
                'agencyId' => $agencyId,
                'reviews' => $reviewsData,
                
            ],
            Response::HTTP_OK
        );
    }

}