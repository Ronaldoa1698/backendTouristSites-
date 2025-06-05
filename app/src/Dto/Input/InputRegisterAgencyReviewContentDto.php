<?php

namespace App\Dto\Input;

use Symfony\Component\Validator\Constraints as Assert;


class InputRegisterAgencyReviewContentDto
{
    #[Assert\NotBlank]
    public ?string $content;

    #[Assert\NotBlank]
    #[Assert\Email]
    public ?string $userEmail;

    #[Assert\NotBlank]
    public ?int $agencyId;
}