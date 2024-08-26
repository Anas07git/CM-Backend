# Certificate Manager Backend Service

## Technologies
```
Server: NodeJS
Databases: MySQL, Redis
```

## Instructions
```
1. Setup NodeJS environment
2. Install MySQL and setup MySQL Workbench
3. Install Redis Server and run it locally
4. Replace connection details in mysql.js
5. Do npm install in root directory of the project
6. Install nodemon for hot reload
7. Do npm start to start the server
```

## Folder Structure
```
project_root/
├── src/
│   ├── services/
│   │   ├──database/
│   │   │   ├──mysql.js
│   │   │   ├──redis.js
│   │   ├──email/
│   │   │   ├──email.js
│   ├── v1/
│   │   ├──middlewares/                 <----   Middlewares added under version 1
│   │   ├──utils/
│   │   ├──login/
│   │   │   ├──login.routes.js          <----   Routes related to the module (eg: login)
│   │   │   ├──login.validation.js      <----   Validations of api related to the module (eg: login)
│   │   │   ├──login.controller.js      <----   Controller of api related to the module (eg: login)
│   │   │   ├──login.services.js        <----   Database operations of api related to the module (eg: login)
│   │   ├──signup/
│   │   ├──reset-password/              <----   Replace the folder name with module name
│   │   ├──routes.v1.js                 <----   Version 1 (v1) API routes
│   ├── routes.root.js                  <----   Routing base file
├── bin/
│   ├──www
├── app.js
```
