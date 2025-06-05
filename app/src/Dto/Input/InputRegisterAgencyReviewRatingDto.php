<?php

namespace App\Dto\Input;

use Symfony\Component\Validator\Constraints as Assert;


class InputRegisterAgencyReviewRatingDto
{
    #[Assert\NotBlank]
    public ?int $rating;

    #[Assert\NotBlank]
    public ?string $agencyId;

    #[Assert\NotBlank]
    public ?string $userId;
}