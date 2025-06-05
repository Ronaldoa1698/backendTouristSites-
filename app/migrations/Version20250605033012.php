<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250605033012 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE agency (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(1000) NOT NULL, services_offered JSON NOT NULL, comment VARCHAR(1000) DEFAULT NULL, rating INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE agency_review (id VARCHAR(255) NOT NULL, user_id VARCHAR(255) NOT NULL, agency_id INT NOT NULL, content LONGTEXT DEFAULT NULL, rating INT DEFAULT NULL, INDEX IDX_A59B4086A76ED395 (user_id), INDEX IDX_A59B4086CDEADB2A (agency_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE tourist_sites (id VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE user (id VARCHAR(255) NOT NULL, full_name VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE agency_review ADD CONSTRAINT FK_A59B4086A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE agency_review ADD CONSTRAINT FK_A59B4086CDEADB2A FOREIGN KEY (agency_id) REFERENCES agency (id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE agency_review DROP FOREIGN KEY FK_A59B4086A76ED395
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE agency_review DROP FOREIGN KEY FK_A59B4086CDEADB2A
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE agency
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE agency_review
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tourist_sites
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE user
        SQL);
    }
}
