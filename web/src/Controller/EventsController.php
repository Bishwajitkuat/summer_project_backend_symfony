<?php

namespace App\Controller;

use App\Entity\Events;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EventsController extends AbstractController
{
    #[Route('/getAllEvents', name:'getAllEvents', methods:['GET'])]
function getAllEvents(ManagerRegistry $doctrine): Response
    {$em = $doctrine->getManager();
    $events = $em->getRepository(Events::class)->findAll();
    $data = [];
    foreach ($events as $event) {
        $data[] = [
            'id' => $event->getId(),
            'title' => $event->getTitle(),
            'place' => $event->getPlace(),
            'start_date' => $event->getStartDate(),
            'end_date' => $event->getEndDate(),
            'description' => $event->getDescription(),
            'keywords' => $event->getKeywords(),
            'speakers' => $event->getSpeakers(),
            'participents' => $event->getParticipents(),
            'created_at' => $event->getCreatedAt(),
            'updated_at' => $event->getUpdatedAt(),
        ];
    }
    return $this->json($data);

}
#[Route("/postToEvents", name:"postToEvents", methods:['POST'])]
function postToEvents(Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $newPost = new Events();
    $content = json_decode($request->getContent());

    $newPost->setTitle($content->title);
    $newPost->setPlace($content->place);
    $newPost->setStartDate(date_create(json_decode($content->start_date)));
    $newPost->setEndDate(date_create(json_decode($content->end_date)));
    $newPost->setDescription($content->description);
    $newPost->setKeywords([...$content->keywords]);
    $newPost->setSpeakers([...$content->speakers]);
    $newPost->setParticipents([...$content->participents]);
    $newPost->setCreatedAt(date_create());
    $em->persist($newPost);
    $em->flush();
    return $this->json("The event is saved successfull!!!");
}
#[Route('/getOneEvent/{id}', name:'getOneEvent', methods:['GET'])]
function getOneEvents($id, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $event = $em->getRepository(Events::class)->find($id);
    $data = [
        'id' => $event->getId(),
        'title' => $event->getTitle(),
        'place' => $event->getPlace(),
        'start_date' => $event->getStartDate(),
        'end_date' => $event->getEndDate(),
        'description' => $event->getDescription(),
        'keywords' => $event->getKeywords(),
        'speakers' => $event->getSpeakers(),
        'participents' => $event->getParticipents(),
        'created_at' => $event->getCreatedAt(),
        'updated_at' => $event->getUpdatedAt(),
    ];
    return $this->json($data);
}

}
