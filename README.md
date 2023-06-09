# Event Manager

We are building a application where organizer can create seminar, programmers, events, organization and speaker object which will be shown nicely to target participent fo the seminars, programmers and events. Additional, the participents can commnunicate with each other through third party chat service.

## Installation

### Fond end

```shell
git clone https://github.com/BalThapa/Summer-team-project.git
npm install
npm start
```

### Back end

```shell
git clone https://github.com/Bishwajitkuat/summer_project_backend_symfony.git
cd summer_project_backend_symfony
cp .env.example .env && cp web/.env.example web/.env
docker compose up -d
cd web/
composer install
```

## port used

MySQL: 3308
PHP server:8008
phpmyadmin: 9088

note: if any of the above mentioned port is used by any other service in your pc please turn off that service befor docker compose up.

Open project folder in VSCode
To install all requirements and start App use these commands in the terminal:

## Technologies used

- React
- Symfony
- API
- MySQL
- Docker

## Authors

- Anton Bezruchenkov
- Bal krishna Thapa Chhetri
- Bishwajit Das
- Pablo Oliva
