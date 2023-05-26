<?php

namespace App\Controller;

use App\Entity\Organizations;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrganizationsController extends AbstractController
{
    #[Route('/getAllOrganizations', name:'getAllOrganizations', methods:['GET'])]
function getAllOrganizations(ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $organizations = $em->getRepository(Organizations::class)->findAll();
    $data = [];
    foreach ($organizations as $org) {
        array_push($data, [
            "id" => $org->getId(),
            "name" => $org->getName(),
            "image" => $org->getImage(),
            "locatiion" => $org->getLocatiion(),
            "description" => $org->getDescription(),
            "email" => $org->getEmail(),
            "phone" => $org->getPhone(),
            "created_at" => $org->getCreatedAt(),
            "updated_at" => $org->getUpdatedAt(),

        ]);
    }
    return $this->json($data);
}
#[Route('/postToOrganizations', name:'postToOrganizations', methods:['POST'])]
function postToOrganizations(Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $newOrganization = new Organizations();
    $content = json_decode($request->getContent());

    $newOrganization->setName($content->name);
    $newOrganization->setImage($content->image);
    $newOrganization->setLocatiion($content->locatiion);
    $newOrganization->setDescription($content->description);
    $newOrganization->setEmail($content->email);
    $newOrganization->setPhone($content->phone);
    $newOrganization->setCreatedAt(date_create());
    $em->persist($newOrganization);
    $em->flush();
    return $this->json("The organization is saved successfully!!!");
}
}
