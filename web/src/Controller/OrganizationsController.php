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
    $newOrg = new Organizations();
    $content = json_decode($request->getContent());

    $newOrg->setName($content->name);
    $newOrg->setImage($content->image);
    $newOrg->setLocatiion($content->locatiion);
    $newOrg->setDescription($content->description);
    $newOrg->setEmail($content->email);
    $newOrg->setPhone($content->phone);
    $newOrg->setCreatedAt(date_create());
    $em->persist($newOrg);
    $em->flush();
    return $this->json("The organization is saved successfully!!!");
}
#[Route('/getOneOrganization/{id}', name:'getOneOrganization', methods:['GET'])]
function getOneOrganization($id, Request $request, ManagerRegistry $doctrine)
    {
    $em = $doctrine->getManager();
    $org = $em->getRepository(Organizations::class)->find($id);
    if (!$org) {
        return $this->json("no data found with id: " . $id);
    }

    $data = [
        'di' => $org->getId(),
        'name' => $org->getName(),
        'image' => $org->getImage(),
        'locatiion' => $org->getLocatiion(),
        'description' => $org->getDescription(),
        'email' => $org->getEmail(),
        'phone' => $org->getPhone(),
        'created_at' => $org->getCreatedAt(),
        'updated_at' => $org->getUpdatedAt(),
    ];
    return $this->json($data);
}
}
