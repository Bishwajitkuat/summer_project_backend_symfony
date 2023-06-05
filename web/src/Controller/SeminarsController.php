<?php

namespace App\Controller;

use App\Entity\Seminars;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
date_default_timezone_set("Europe/Helsinki");

class SeminarsController extends AbstractController
{
    #[Route('/getAllSeminars', name:'getAllSeminars', methods:['GET'])]
function getAllSeminars(ManagerRegistry $doctrine): Response
    {$em = $doctrine->getManager();
    $seminars = $em->getRepository(Seminars::class)->findAll();
    $data = [];
    foreach ($seminars as $semi) {
        $data[] = [
            'id' => $semi->getId(),
            'name' => $semi->getName(),
            'about' => $semi->getAbout(),
            'start_datetime' => $semi->getStartDatetime(),
            'end_datetime' => $semi->getEndDatetime(),
            'address' => $semi->getAddress(),
            'busses' => $semi->getBusses(),
            'trains' => $semi->getTrains(),
            'trams' => $semi->getTrams(),
            'taxis' => $semi->getTaxis(),
            'transport_website' => $semi->getTransportWebsite(),
            'venue_map' => $semi->getVenueMap(),
            'organizations' => $semi->getOrganizations(),
            'speakers' => $semi->getSpeakers(),
        ];
    }
    return $this->json($data);

}
#[Route("/postToSeminars", name:"postToSeminars", methods:['POST'])]
function postToSeminars(Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $newSemi = new Seminars();
    $content = json_decode($request->getContent());

    $newSemi->setName($content->name);
    $newSemi->setAbout($content->about);
    $newSemi->setStartDatetime(date_create(json_decode($content->start_datetime)));
    $newSemi->setEndDatetime(date_create(json_decode($content->end_datetime)));
    $newSemi->setAddress($content->address);
    $newSemi->setBusses([...$content->busses]);
    $newSemi->setTrains([...$content->trains]);
    $newSemi->setTrams([...$content->trams]);
    $newSemi->setTaxis([...$content->taxis]);
    $newSemi->setTransportWebsite($content->transport_website);
    $newSemi->setVenueMap($content->venue_map);
    $newSemi->setOrganizations([...$content->organizations]);
    $newSemi->setSpeakers([...$content->speakers]);
    // // $newSemi->setCreatedAt(date_create());
    $em->persist($newSemi);
    $em->flush();
    return $this->json("The seminar is saved successfully!!!");
}
#[Route('/getOneSeminar/{id}', name:'getOneSeminar', methods:['GET'])]
function getOneSeminar($id, ManagerRegistry $doctrine)
    {
    $em = $doctrine->getManager();
    $semi = $em->getRepository(Seminars::class)->find($id);
    if (!$semi) {
        return $this->json("no data found with id: " . $id);
    }

    $data = [
        'id' => $semi->getId(),
        'name' => $semi->getName(),
        'about' => $semi->getAbout(),
        'start_datetime' => $semi->getStartDatetime(),
        'end_datetime' => $semi->getEndDatetime(),
        'address' => $semi->getAddress(),
        'busses' => $semi->getBusses(),
        'trains' => $semi->getTrains(),
        'trams' => $semi->getTrams(),
        'taxis' => $semi->getTaxis(),
        'transport_website' => $semi->getTransportWebsite(),
        'venue_map' => $semi->getVenueMap(),
        'organizations' => $semi->getOrganizations(),
        'speakers' => $semi->getSpeakers(),
    ];
    return $this->json($data);
}
#[Route("/updateSeminar/{id}", name:"updateSeminar", methods:['PATCH'])]
function updateSeminar($id, Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $updateSemi = $em->getRepository(Seminars::class)->find($id);
    if (!$updateSemi) {
        return $this->json("Id: " . $id . ", does not exist in the database");
    }
    $content = json_decode($request->getContent());

    $updateSemi->setName($content->name);
    $updateSemi->setAbout($content->about);
    $updateSemi->setStartDatetime(date_create(json_decode($content->start_datetime)));
    $updateSemi->setEndDatetime(date_create(json_decode($content->end_datetime)));
    $updateSemi->setAddress($content->address);
    $updateSemi->setBusses([...$content->busses]);
    $updateSemi->setTrains([...$content->trains]);
    $updateSemi->setTrams([...$content->trams]);
    $updateSemi->setTaxis([...$content->taxis]);
    $updateSemi->setTransportWebsite($content->transport_website);
    $updateSemi->setVenueMap($content->venue_map);
    $updateSemi->setOrganizations([...$content->organizations]);
    $updateSemi->setSpeakers([...$content->speakers]);
    $em->persist($updateSemi);
    $em->flush();
    return $this->json("The seminar is updated successfully!!!");
}
#[Route('/deleteSeminar/{id}', name:'deleteSeminar', methods:['DELETE'])]
function deleteSeminar($id, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $deleteSemi = $em->getRepository(Seminars::class)->find($id);
    if (!$deleteSemi) {
        return $this->json("Id:" . $id . ", does not exists in the database");
    }
    $em->remove($deleteSemi);
    $em->flush();
    return $this->json("The seminar with id: " . $id . " is deleted successfully!!!");
}
}
