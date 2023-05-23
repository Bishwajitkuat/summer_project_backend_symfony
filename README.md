## Change

service name and port numbers as your need.

## Installation

```shell
git clone
cd summerProjectDB
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
