<?php

namespace App\Entity;

use App\Repository\TouristSitesRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Bridge\Doctrine\Types\UuidType;

#[ORM\Entity(repositoryClass: TouristSitesRepository::class)]
class TouristSites
{
    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $id;


    #[ORM\Column(type: 'string', length: 255)]
    private ?string $name;

    #[ORM\Column(type: 'string', length: 1000)]
    private ?string $description;

    #[ORM\Column(type: 'json')]
    private array $servicesOffered = [];

    #[ORM\Column(type: 'string', length: 1000, nullable: true)]
    private ?string $comment;

    #[ORM\Column(type: 'integer')]
    private ?int $rating;

    // Getters and setters

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getServicesOffered(): array
    {
        return $this->servicesOffered;
    }

    public function setServicesOffered(array $servicesOffered): self
    {
        $this->servicesOffered = $servicesOffered;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }
}