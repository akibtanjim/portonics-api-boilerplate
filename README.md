<h1 align="center">
  <br>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eimUX98YCqnw0tFLXbbCVkrGfZevLgMmhQ&usqp=CAU" alt="API" height="200" width="200">
  <br>
</h1>

## API Boilerplate SERVICE:

# Overview

API Boilerplate

# Config

This project can be configured with `.env`

```
    # App
    HOST=localhost
    APP_PORT=3006
    LOGGER_NAME=api-boilerplate-service
    LOG_LEVEL=debug
    NODE_ENV=development

    #API Rate Limiting Config
    API_RATE_LIMIT_INTERVAL_IN_MIN=1
    API_MAX_REQUEST_LIMIT=60

    #Mongo DB
    # MONGO_DB_HOST=docker.for.mac.host.internal (MAC)
    MONGO_DB_HOST=host.docker.internal
    MONGO_DB_NAME=api-boilerplate-service
    MONGO_DB_USERNAME=portonics_user
    MONGO_DB_PASSWORD=secret
    MONGO_DB_PORT=27019

    #Redis
    REDIS_HOST=api-boilerplate-redis
    REDIS_PORT=6379
    REDIS_USERNAME=default
    REDIS_PASSWORD=secret
    REDIS_PREFIX=api-boilerplate-service

```

### Installation

- copy the `docker/env.example` and paste into `docker/.env`
- copy the `docker/docker-compose.override.example.yml` and paste into `docker/docker-compose.override.yml`
- copy the `src/.env.example` and past into `src/.env`
- run `npm install` command
- cd to `docker` folder and run `docker-compose up -d --build`
- you may encounter with an error. you'll need to create a network using `docker network create portonics-common-network`
- re-run the `docker-compose up -d --build`.
- In case if you're using windows open `docker/app/entrypoint.sh` and save `end of line sequence` as `LF` instead of `CRLF`

### Check services

After building the docker containers, you'll need to check whether everything is working fine.

- run `docker ps` and check all the services are up and running
- run `docker exec -it api-boilerplate-service sh` to enter into the app container
- run `npm run db:seed` it will seed the database.
