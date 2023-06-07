<?php

namespace App\Form;

use App\Entity\Attendee;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AttendeeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Role USER' => 'ROLE_USER',
                    'Role ADMIN' => 'ROLE_ADMIN',
                ],
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('password')
            ->add('firstname')
            ->add('lastname')
            ->add('organization')
            ->add('position')
            ->add('location')
            ->add('phone')          
            ->add('picture')
            // ->add('created_at')
            // ->add('updated_at')
            ->add('isVerified')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Attendee::class,
        ]);
    }
}
