<?php

namespace App\Entity;

use App\Repository\AgencyRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Bridge\Doctrine\Types\UuidType;

#[ORM\Entity(repositoryClass: AgencyRepository::class)]
class Agency
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $name;

    #[ORM\Column(type: 'string', length: 1000)]
    private ?string $description;

    #[ORM\Column(type: 'json')]
    private array $servicesOffered = [];

    public function getId(): ?int
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
}
