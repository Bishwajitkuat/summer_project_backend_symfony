<?php

namespace App\Controller;

use App\Entity\Speakers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
date_default_timezone_set("Europe/Helsinki");

class SpeakersController extends AbstractController
{
    #[Route('/getAllSpeakers', name:'getAllSpeakers', methods:['GET'])]
function getAllSpeakers(ManagerRegistry $doctrine): Response
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
            "role" => $speaker->getRole(),
            "location" => $speaker->getLocation(),
            "description" => $speaker->getDescription(),
            "email" => $speaker->getEmail(),
            "phone" => $speaker->getPhone(),
            "linkedin" => $speaker->getLinkedin(),
            "twitter" => $speaker->getTwitter(),
            "facebook" => $speaker->getFacebook(),
            "created_at" => $speaker->getCreatedAt(),
            "updated_at" => $speaker->getUpdatedAt(),
        ]);
    }
    return $this->json($data);
}
#[Route('/postToSpeakers', name:'postToSpeakers', methods:['POST'])]
function postToOrganizations(Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $newSpk = new Speakers();
    $content = json_decode($request->getContent());

    $newSpk->setName($content->name);
    $newSpk->setImage($content->image);
    $newSpk->setOrganizations([...$content->organizations]);
    $newSpk->setRole($content->role);
    $newSpk->setLocation($content->location);
    $newSpk->setDescription($content->description);
    $newSpk->setEmail($content->email);
    $newSpk->setPhone($content->phone);
    $newSpk->setLinkedin($content->linkedin);
    $newSpk->setTwitter($content->twitter);
    $newSpk->setFacebook($content->facebook);
    $newSpk->setCreatedAt(date_create());
    $em->persist($newSpk);
    $em->flush();
    return $this->json("The speaker is saved successfully!!!");
}
#[Route('/getOneSpeaker/{id}', name:'getOneSpeaker', methods:['GET'])]
function getOneSpeaker($id, ManagerRegistry $doctrine)
    {
    $em = $doctrine->getManager();
    $spk = $em->getRepository(Speakers::class)->find($id);
    if (!$spk) {
        return $this->json("no data found with id: " . $id);
    }

    $data = [
        "id" => $spk->getId(),
        "name" => $spk->getName(),
        "image" => $spk->getImage(),
        "organizations" => $spk->getOrganizations(),
        "role" => $spk->getRole(),
        "location" => $spk->getLocation(),
        "description" => $spk->getDescription(),
        "email" => $spk->getEmail(),
        "phone" => $spk->getPhone(),
        "linkedin" => $spk->getLinkedin(),
        "twitter" => $spk->getTwitter(),
        "facebook" => $spk->getFacebook(),
        "created_at" => $spk->getCreatedAt(),
        "updated_at" => $spk->getUpdatedAt(),
    ];
    return $this->json($data);
}
#[Route("/updateSpeaker/{id}", name:"updateSpeaker", methods:['PATCH'])]
function updateSpeaker($id, Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $updateSpk = $em->getRepository(Speakers::class)->find($id);
    if (!$updateSpk) {
        return $this->json("Id: " . $id . ", does not exist in the database");
    }
    $content = json_decode($request->getContent());

    $updateSpk->setName($content->name);
    $updateSpk->setImage($content->image);
    $updateSpk->setOrganizations([...$content->organizations]);
    $updateSpk->setRole($content->role);
    $updateSpk->setLocation($content->location);
    $updateSpk->setDescription($content->description);
    $updateSpk->setEmail($content->email);
    $updateSpk->setPhone($content->phone);
    $updateSpk->setLinkedin($content->linkedin);
    $updateSpk->setTwitter($content->twitter);
    $updateSpk->setFacebook($content->facebook);
    $updateSpk->setUpdatedAt(date_create());
    $em->persist($updateSpk);
    $em->flush();
    return $this->json("The speaker is updated successfully!!!");
}
#[Route('/deleteSpeaker/{id}', name:'deleteSpeaker', methods:['DELETE'])]
function deleteSpeaker($id, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $deleteSpk = $em->getRepository(Speakers::class)->find($id);
    if (!$deleteSpk) {
        return $this->json("Id:" . $id . ", does not exists in the database");
    }
    $em->remove($deleteSpk);
    $em->flush();
    return $this->json("The speaker with id: " . $id . " is deleted successfully!!!");
}
}
