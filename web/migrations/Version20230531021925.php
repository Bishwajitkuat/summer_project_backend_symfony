<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230531021925 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE seminars (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, about LONGTEXT DEFAULT NULL, start_datetime DATETIME DEFAULT NULL, end_datetime DATETIME DEFAULT NULL, address VARCHAR(1000) DEFAULT NULL, busses JSON DEFAULT NULL, trains JSON DEFAULT NULL, trams JSON DEFAULT NULL, taxis JSON DEFAULT NULL, transport_website VARCHAR(1000) DEFAULT NULL, venue_map VARCHAR(1000) DEFAULT NULL, organizations JSON DEFAULT NULL, speakers JSON DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE seminars');
    }
}
