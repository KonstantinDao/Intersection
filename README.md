# Git helpful knowledge
- use github desktop to have GUI or CLI (command-line interface)

## Only at the beginning
- git clone 'HTTPSURL' // create repo in current folder, for url look on gitlab repo

## Routine in cli after code changes were made
- git checkout main // newest changes on main
- git pull // get newest changes on local machine
- git add . // select all files which should be updated
- git commit -m "your short description of your code changes"
- git branch 'newBranchName' // create new branch
- git checkout 'newBranchName' // change branch
- git push --set-upstream origin 'newBranchName' // create new branch on remote repo and push to remote repo

# Backend
## At the beginning of backend dev
- 'npm run autoStart' to start nodemon and backend server

## Helpful links
- https://mongoosejs.com/docs/
- https://expressjs.com/en/guide/routing.html

## Helpful background knowledge
- Mongoose is a ODM (Object Data Modelling) which simplify database access

## matching requirement
- call matching algorithm method for room id

## Tasks / issues
- [x] implement matching functionality
    - [x] User object containing selection of interests
    - [x] get interests object for each user in room and add to array
    - [x] call bestMatchForUser algorithm for each group of three
    - [x] special case leftover participants
- [ ] api testing for room endpoint
- [ ] connection with frontend

### Low priority
- [ ] fix bug: if more then two matchings are in db and method deleteAllMatching is called, then error appear in console 
    - [ ] use pre hook for dependencies
- [x] refactoring: declare service classes for user and matching endpoint
- [ ] refactor functions to align with conventions
- [x] refactor routes for better readability
- [ ] implement getAllRoomsByUserId(id)
