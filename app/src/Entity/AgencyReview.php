<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Bridge\Doctrine\Types\UuidType;
use ApiPlatform\Metadata\Post;
use App\Dto\Input\InputRegisterAgencyReviewContentDto;
use App\Dto\Input\InputRegisterAgencyReviewRatingDto;
use App\Dto\Output\OutputRegisterAgencyReviewDto;
use App\Controller\AgencyReview\AgencyReviewController;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;


#[ApiResource(
    operations: [
        new Post(
            uriTemplate: '/register_content', 
            processor: AgencyReviewCreateContentStateProcessor::class, 
            input: InputRegisterAgencyReviewContentDto::class,
            output: OutputRegisterAgencyReviewDto::class
        ),
        new Get(
            uriTemplate: '/agency_reviews/{id}',
            controller: AgencyReviewController::class,
            read: false,
            output: false
        )
    ],
)]
#[ORM\Entity]
class AgencyReview
{
    #[ORM\Id]
    #[ORM\Column(type: 'string', unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?string $id;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $content;

    #[ORM\Column(type: 'integer', nullable: true)]
    private ?int $rating;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private User $user;

    #[ORM\ManyToOne(targetEntity: Agency::class)]
    #[ORM\JoinColumn(nullable: false)]
    private Agency $agency;


    public function getId(): ?string
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;
        return $this;
    }

    public function getRating(): int
    {
        return $this->rating;
    }

    public function setRating(int $rating): self
    {
        $this->rating = $rating;
        return $this;
    }


    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;
        return $this;
    }

    public function getAgency(): Agency
    {
        return $this->agency;
    }

    public function setAgency(Agency $agency): self
    {
        $this->agency = $agency;
        return $this;
    }
}
