<?php

namespace App\Dto\Input;

use Symfony\Component\Validator\Constraints as Assert;


class InputRegisterUserDto
{
    #[Assert\NotBlank]
    public ?string $fullName;

    #[Assert\NotBlank]
    #[Assert\Email]
    public ?string $email;

    #[Assert\NotBlank]
    public ?string $password;
    
    #[Assert\NotBlank]
    public ?string $repeatPassword;
}