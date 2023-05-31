<?php

namespace App\Entity;

use App\Repository\SeminarsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SeminarsRepository::class)]
class Seminars
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $about = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $start_datetime = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $end_datetime = null;

    #[ORM\Column(length: 1000, nullable: true)]
    private ?string $address = null;

    #[ORM\Column(nullable: true)]
    private array $busses = [];

    #[ORM\Column(nullable: true)]
    private array $trains = [];

    #[ORM\Column(nullable: true)]
    private array $trams = [];

    #[ORM\Column(nullable: true)]
    private array $taxis = [];

    #[ORM\Column(length: 1000, nullable: true)]
    private ?string $transport_website = null;

    #[ORM\Column(length: 1000, nullable: true)]
    private ?string $venue_map = null;

    #[ORM\Column(nullable: true)]
    private array $Organizations = [];

    #[ORM\Column(nullable: true)]
    private array $Speakers = [];

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

    public function getAbout(): ?string
    {
        return $this->about;
    }

    public function setAbout(?string $about): self
    {
        $this->about = $about;

        return $this;
    }

    public function getStartDatetime(): ?\DateTimeInterface
    {
        return $this->start_datetime;
    }

    public function setStartDatetime(?\DateTimeInterface $start_datetime): self
    {
        $this->start_datetime = $start_datetime;

        return $this;
    }

    public function getEndDatetime(): ?\DateTimeInterface
    {
        return $this->end_datetime;
    }

    public function setEndDatetime(?\DateTimeInterface $end_datetime): self
    {
        $this->end_datetime = $end_datetime;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getBusses(): array
    {
        return $this->busses;
    }

    public function setBusses(?array $busses): self
    {
        $this->busses = $busses;

        return $this;
    }

    public function getTrains(): array
    {
        return $this->trains;
    }

    public function setTrains(?array $trains): self
    {
        $this->trains = $trains;

        return $this;
    }

    public function getTrams(): array
    {
        return $this->trams;
    }

    public function setTrams(?array $trams): self
    {
        $this->trams = $trams;

        return $this;
    }

    public function getTaxis(): array
    {
        return $this->taxis;
    }

    public function setTaxis(?array $taxis): self
    {
        $this->taxis = $taxis;

        return $this;
    }

    public function getTransportWebsite(): ?string
    {
        return $this->transport_website;
    }

    public function setTransportWebsite(?string $transport_website): self
    {
        $this->transport_website = $transport_website;

        return $this;
    }

    public function getVenueMap(): ?string
    {
        return $this->venue_map;
    }

    public function setVenueMap(?string $venue_map): self
    {
        $this->venue_map = $venue_map;

        return $this;
    }

    public function getOrganizations(): array
    {
        return $this->Organizations;
    }

    public function setOrganizations(?array $Organizations): self
    {
        $this->Organizations = $Organizations;

        return $this;
    }

    public function getSpeakers(): array
    {
        return $this->Speakers;
    }

    public function setSpeakers(?array $Speakers): self
    {
        $this->Speakers = $Speakers;

        return $this;
    }
}
