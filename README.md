# Git helpful knowledge
- use github desktop to have GUI or CLI (command-line interface)

## Only at the beginning
- git clone 'HTTPSURL' // create repo in current folder, for url look on gitlab repo

## Start whole app
- make sure your IP-Adress is added to ip access list from mongoDB Atlas
- go to "./backend/" and run "npm run autoStart"
- go to "./frontend/" and run "npm run ng serve -o"

## Routine in cli after code changes were made
- git checkout main // newest changes on main
- git pull // get newest changes on local machine
- git add . // select all files which should be updated
- git commit -m "your short description of your code changes"
- git branch 'newBranchName' // create new branch
- git checkout 'newBranchName' // change branch
- git push --set-upstream origin 'newBranchName' // create new branch on remote repo and push to remote repo

# Frontend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Backend
## At the beginning of backend dev
- 'npm run autoStart' to start nodemon and backend server

## Helpful links
- https://mongoosejs.com/docs/
- https://expressjs.com/en/guide/routing.html

## Helpful background knowledge
- Mongoose is a ODM (Object Data Modelling) which simplify database access

# Tasks / issues
- [x] Implement rest API 
    - [x] setup (Konstantin)
    - [x] user endpoint (Felipe)
    - [x] room endpoint (Konstantin)
    - [x] matching endpoint (Konstantin)
- [x] implement matching functionality
    - [x] User property containing selection of interests (Felipe)
    - [x] call bestMatchForUser algorithm for each group of three (Felipe)
    - [x] special case leftover participants (Felipe)
- [x] connection with frontend
    - [x] waiting-room design (Konstantin)
    - [x] calculate matching button functionality (Felipe, Konstantin)
    - [x] in backend update matchingHistory from all users (Felipe, Konstantin)
    - [x] refresh waitingRoom after calculateMatching (Konstantin)
    - [x] show matching results (Anna, Felipe, Konstantin, Mika)
    - [x] backend user name unique (Konstantin)
    - [x] createRoom button functionality (Anna, Konstantin)
    - [x] joinRoom button functionality (Anna, Konstantin)
    - [x] login and signin buttons functionality (Anna, Felipe, Konstantin)
    - [x] send interest to backend (Felipe, Konstantin)
- [x] implement frontend
    - [x] setup angular + create components (Anna, Mika)
    - [x] login/signup input fields and button (Anna, Mika)
    - [x] create and design other pages (Anna, Mika)
    - [x] header (Anna)
    - [x] bootstrap (Mika)
    - [x] customized color theme (Anna)
    - [x] connect pages with routerLink (Anna)
    - [x] select interests with chips (Mika)
    - [x] generate room-Nr (Anna)
- [x] record video
    - [x] brainstorm (Anna, Felipe, Konstantin, Mika)
    - [x] film video (Mika, Konstantin)
- [ ] application deploy on server


### Low priority
- [ ] fix bug: if more then two matchings are in db and method deleteAllMatching is called, then error appear in console 
    - [ ] use pre hook for dependencies like updating matchingHistory of user after creating a new matching
- [x] refactoring: declare service classes for user and matching endpoint (Konstantin)
- [x] refactor routes for better readability (Konstantin)
- [ ] room_nr should be unique and generated from backend
- [ ] icon in tab
- [ ] show participants nr for room creator
- [ ] chat or number give number to all matching partners, so that matching group can communicate via other messengers
- [ ] mobile app additionaly to browser website
- [ ] more validation in frontend
- [ ] leave room as a user
- [ ] after calculateMatching delete room or block joining to this room
