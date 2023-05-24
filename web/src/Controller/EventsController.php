<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EventsController extends AbstractController
{
    #[Route('/getAllEvents', name:'getAllEvents', methods:['GET'])]
function getAllEvents(ManagerRegistry $doctrine): Response
    {
    $events = $doctrine->getRepository(Events::class)->findAll();
    $data = [];
    foreach ($events as $event) {
        $deta[] = [
            'id' => $event->getId(),
            'title' => $event->getTitle(),
            'place' => $event->getPlace(),
            'start_date' => $event->getStart_date(),
            'end_date' => $event->getEnd_date(),
            'description' => $event->getDescription(),
            'keywords' => $event->getKeywords(),
            'subevents' => $event->getSubevents(),
            'speakers' => $event->getSpeakers(),
            'participents' => $event->getParticipents(),
            'created_at' => $event->getCreated_at(),
            'updated_at' => $event->getUpdated_at(),
        ];
    }

    return $this->json($data);

}
}
