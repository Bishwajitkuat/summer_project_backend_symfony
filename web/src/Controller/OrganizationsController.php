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
            "address" => $org->getAddress(),

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
    $newOrg->setAddress($content->address);
    $em->persist($newOrg);
    $em->flush();
    return $this->json("The organization is saved successfully!!!");
}
#[Route('/getOneOrganization/{id}', name:'getOneOrganization', methods:['GET'])]
function getOneOrganization($id, ManagerRegistry $doctrine)
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
        'address' => $org->getAddress(),
    ];
    return $this->json($data);
}
#[Route("/updateOrganization/{id}", name:"updateOrganization", methods:['PATCH'])]
function updateOrganization($id, Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $updateOrg = $em->getRepository(Organizations::class)->find($id);
    if (!$updateOrg) {
        return $this->json("Id: " . $id . ", does not exist in the database");
    }
    $content = json_decode($request->getContent());

    $updateOrg->setName($content->name);
    $updateOrg->setImage($content->image);
    $updateOrg->setLocatiion($content->locatiion);
    $updateOrg->setDescription($content->description);
    $updateOrg->setEmail($content->email);
    $updateOrg->setPhone($content->phone);
    $updateOrg->setUpdatedAt(date_create());
    $updateOrg->setAddress($content->address);
    $em->persist($updateOrg);
    $em->flush();
    return $this->json("The organization is updated successfully!!!");
}
#[Route('/deleteOrganization/{id}', name:'deleteOrganization', methods:['DELETE'])]
function deleteOrganization($id, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $deleteOrg = $em->getRepository(Organizations::class)->find($id);
    if (!$deleteOrg) {
        return $this->json("Id:" . $id . ", does not exists in the database");
    }
    $em->remove($deleteOrg);
    $em->flush();
    return $this->json("The event with id: " . $id . " is deleted successfully!!!");
}
}
