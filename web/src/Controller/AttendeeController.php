<?php

namespace App\Controller;

use App\Entity\Attendee;
use App\Form\AttendeeType;
use App\Repository\AttendeeRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/attendee')]
class AttendeeController extends AbstractController
{
    #[Route('/', name:'app_attendee_index', methods:['GET'])]
function index(AttendeeRepository $attendeeRepository): Response
    {
    return $this->render('attendee/index.html.twig', [
        'attendees' => $attendeeRepository->findAll(),
    ]);
}

#[Route('/new', name:'app_attendee_new', methods:['GET', 'POST'])]
function new (Request $request, AttendeeRepository $attendeeRepository): Response{
    $attendee = new Attendee();
    $form = $this->createForm(AttendeeType::class, $attendee);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $attendeeRepository->save($attendee, true);

        return $this->redirectToRoute('app_attendee_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->renderForm('attendee/new.html.twig', [
        'attendee' => $attendee,
        'form' => $form,
    ]);
}

#[Route("/auth", name:"attendeeAuth", methods:['POST'])]
function postToEvents(Request $request, ManagerRegistry $doctrine): Response
    {
    $em = $doctrine->getManager();
    $content = json_decode($request->getContent());
    $valid_user = ['message' => false];
    $allAttendee = $em->getRepository(Attendee::class)->findAll();
    $data = [];
    foreach ($allAttendee as $attendee) {
        $data[] = [
            'id' => $attendee->getId(),
            'email' => $attendee->getEmail(),
            'roles' => $attendee->getRoles(),
            'password' => $attendee->getPassword(),
        ];}
    foreach ($data as $user) {
        if ($user["email"] === $content->user && $user["password"] === $content->pwd) {
            $valid_user = $user;
            $valid_user['message'] = true;
        }
    }

    return $this->json($valid_user);

}
#[Route('/{id}', name:'app_attendee_show', methods:['GET'])]
function show(Attendee $attendee): Response
    {
    return $this->render('attendee/show.html.twig', [
        'attendee' => $attendee,
    ]);
}

#[Route('/{id}/edit', name:'app_attendee_edit', methods:['GET', 'POST'])]
function edit(Request $request, Attendee $attendee, AttendeeRepository $attendeeRepository): Response
    {
    $form = $this->createForm(AttendeeType::class, $attendee);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $attendeeRepository->save($attendee, true);

        return $this->redirectToRoute('app_attendee_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->renderForm('attendee/edit.html.twig', [
        'attendee' => $attendee,
        'form' => $form,
    ]);
}

#[Route('/{id}', name:'app_attendee_delete', methods:['POST'])]
function delete(Request $request, Attendee $attendee, AttendeeRepository $attendeeRepository): Response
    {
    if ($this->isCsrfTokenValid('delete' . $attendee->getId(), $request->request->get('_token'))) {
        $attendeeRepository->remove($attendee, true);
    }

    return $this->redirectToRoute('app_attendee_index', [], Response::HTTP_SEE_OTHER);
}

#[Route('/list', name:'app_attendee_list', methods:['GET'])]
function list(AttendeeRepository $attendeeRepository): Response {

    return $this->render('attendee/list.html.twig', [
        'attendees' => $attendeeRepository->findAll(),
    ]);
}
}
