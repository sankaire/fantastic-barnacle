# Inventory sytem

## Table of Contents

- [Problem Statemet](#problem-statement)
- [Functional Requirements](#Functional-Requirements)
- [Non Functional Requirements](#Non-Functional-Requirements)
- [Technologies](#Techonlogies)
- [Start Client](#Start-Client)
- [Start Server](#Start-Api)
- [Designs](#Designs)

## problem-statement

inventory costs have lot of impact on the profitability of the firm and its success. Inventory management and its optimized decisions are depending on the identification of key success factors and right decisions at right moment. In a dynamic market environment, it is necessary to focus on the decision making and the factors influencing decision making in order to optimize the results of inventory function.

## Functional-Requirements

- User uthentication - The user must be authenticated to use the system.
- CRUD operations - The authenticated user can be able to create read update and delete items.
- Easy to use UI - The system should not be complex to navigate.
- Provide Real time Data - Data like how many items has been sold or items in stock should be displayed in realtime.
- Security - Users must have a token to acces system functionalities.

## Non-Functional-Requirements

- The system should be eay to scale
- The user should not have a hard time to navigate
- The system should be mantainable
- The system perfomance should always be good. like the speed and functionalities

## Techonlogies

- Nodejs - JavaScript runtime built on Chrome's V8 JavaScript engine.
- Typescript - JavaScript with syntax for types.
- ExpressJS - Fast, unopinionated, minimalist web framework for Node.js
- MongoDB - MongoDB is a source-available cross-platform document-oriented database program
- Reactjs - A JavaScript library for building user interfaces
- TailwindCss - A utility-first CSS framework
- Jest - Delightful JavaScript Testing Framework

## Start-Client

- First clone the repo

```
git clone https://github.com/zetech-ict/symmetrical-umbrella.git
```

- once you have it on your machine

```
cd symmetrical-umbrella
```

- then you need to get into the client directory

```
cd client
```

- then you can install dependancies

```
yarn install
```

- start the app with

```
yarn start
```

visit `http://localhost:3000`

## Start-Api

- Now that you are in the client directory just add anothe terminal tab and follow the following steps

```
cd ..
```

- then you get into the server directory

```
cd server
```

- start the api with

```
yarn dev
```

- to confirm that its running visit `http://localhost:5000/api/v1` You should see

```json
{
  "message": "Inventory app API, welcome 👀🙂"
}
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23828500-760a1495-b4cb-4295-99af-14cacf0e7f75?action=collection%2Ffork&collection-url=entityId%3D23828500-760a1495-b4cb-4295-99af-14cacf0e7f75%26entityType%3Dcollection%26workspaceId%3D05e708d6-8ee7-4b7e-928a-e7c6da94a59e)
## run-tests

- to test the app run

```
yarn test
```

## Designs

Home page design
![Home Page](/docs/screenshots/Homepage.png)

Dashboard
![Dashboard](/docs/screenshots/dashboard.png)
