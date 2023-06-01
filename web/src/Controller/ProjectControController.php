<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectControController extends AbstractController
{
    #[Route('/project/contro', name: 'app_project_contro')]
    public function index(): Response
    {
        return $this->render('project_contro/index.html.twig', [
            'controller_name' => 'ProjectControController',
        ]);
    }
}
