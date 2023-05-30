<?php

namespace App\Controller;

use App\Entity\Speakers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SpeakersController extends AbstractController
{
    #[Route('/getAllSpeakers', name: 'getAllSpeakers')]
    public function getAllSpeakers(ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $speakers = $em->getRepository(Speakers::class)->findAll();
        $data = [];
        foreach ($speakers as $speaker) {
            array_push($data, [
                "id" => $speaker->getId(),
                "name" => $speaker->getName(),
                "image" => $speaker->getImage(),
                "organizations" => $speaker->getOrganizations(),
                "description" => $speaker->getDescription(),
                "role" => $speaker->getRole(),
                "location" => $speaker->getLocation(),
                "description" => $speaker->description(),
                "email" => $speaker->getEmail(),
                "phone" => $speaker->getPhone(),
                "linkedin" => $speaker->setLinkedin(),
                "twitter" => $speaker->getTwitter(),
                "facebook" => $speaker->getFacebook(),
                "created_at" => $speaker->getCreatedAt(),
                "updated_at" => $speaker->getUpdatedAt(),    
            ]);
        }
        return $this->json($data);
    }
}
