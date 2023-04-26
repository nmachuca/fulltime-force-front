## About Fulltime-Force-Front

This is a React application developed with the purpose of connect with  a custom made API and retrieve a list of commits of a given repository.

## API Documentation

The API consists of two endpoints and can be found [here](https://github.com/nmachuca/fulltime-force-api)

1. /repos GET => list repos
2. /commits/{$repository_id} GET => list commit of given repository ID.

## Local environment

In order to set up locally is recommended to have Node LTS version.

- Clone repository
- ```cd localpath/fulltime-force-front```
- ```cp .env.example .env```
- Set the following variables in the .env file
```
BASE_API_URL=
```
- ```nmp install'```
- ```npm start```

