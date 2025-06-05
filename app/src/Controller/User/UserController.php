<?php

namespace App\Controller\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\UserRepository;
use App\Dto\Input\InputRegisterUserDto;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class UserController extends AbstractController
{
    private UserRepository $userRepository;
    private UserPasswordHasherInterface $passwordHasher;


    public function __construct(UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher)
    {
        $this->userRepository = $userRepository;
        $this->passwordHasher = $passwordHasher;
    }


    public function registerUser(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $dto = new InputRegisterUserDto();
        $dto->fullName = $data['fullName'];
        $dto->email = $data['email'];
        $dto->password = $data['password'];
        $dto->repeatPassword = $data['repeatPassword'];

        if (empty($dto->fullName) || empty($dto->email) || empty($dto->password) || empty($dto->repeatPassword)) 
        {
            return new JsonResponse(['error' => 'Missing required fields'], Response::HTTP_BAD_REQUEST);
        }
     
        if ($dto->password !== $dto->repeatPassword) 
        {
            return new JsonResponse(['error' => 'Passwords do not match'], Response::HTTP_BAD_REQUEST);
        }

        $existingUser = $this->userRepository->findOneBy(['email' => $dto->email]);
        
        if ($existingUser) {
            return new JsonResponse(['error' => 'Email already registered'], Response::HTTP_BAD_REQUEST);
        }

        $user = new User();
        $user->setFullName($dto->fullName);
        $user->setEmail($dto->email);
        
        $hashedPassword = $this->passwordHasher->hashPassword($user, $dto->password);
        $user->setPassword($hashedPassword);

        $this->userRepository->add($user, true);
       
        return new JsonResponse(['message' => 'User registered successfully'], Response::HTTP_CREATED);
        
    }
}
