<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class ExceptionController extends AbstractController
{
    /**
     * @Route("/access-denied", name="access_denied")
     */
    public function showAccessDeniedPage(\Throwable $exception): Response
{
    return $this->render('access_denied.html.twig', [
        'exception' => $exception,
    ]);
}
}
