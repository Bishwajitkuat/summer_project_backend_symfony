## Change

service name and port numbers as your need.

## Installation

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

## events table in db

- id
- title (string)
- place: (e.g. string)
- stating_datetime: (datetime)
- ending_datetime: (datetime)
- event_description: (text)
- keywords: [text]
- speakers: [{}]
- subevents: [{}] ???
- created_at
- updated_at

## speakers table in db

- id
- name
- image
- description
- organization
- linkedin
- twitter
- email
- facebook

## subevents table in db

- id
- title
- start : datetime
- end : datetime
- place
- keywords : [str, str]
- image
- description
- organizer
- created_at
- updated_at

## faqs table in db

- id
- question
- answer (text)
- created_at
- updated_at

## todos_helsinki table in db

- id
- title
- place (or address)
- keywords : [str, str]
- image
- opening hours
- description
- website
- created_at
- updated_at
