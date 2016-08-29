# Users API

This being the first Node.js application I have worked on and my first time using the framework was was able to implement reading/displaying of the contacts, deleting contacts however ran short on time to complete adding/updating contacts.

3 wireframes for the application


![alt tag](https://github.com/ConorSheppard/redhat-api/blob/master/wireframes/wireframe_homepage.png)
![alt tag](https://github.com/ConorSheppard/redhat-api/blob/master/wireframes/wireframe_contact.png)
![alt tag](https://github.com/ConorSheppard/redhat-api/blob/master/wireframes/wireframe_contact_list.png)




## Pre-requisites

To get started, you'll need to have the following requirements installed

- Git
- Node.js<sup>1</sup>
- npm
- MongoDB 2.6.x / 3.2.x<sup>2</sup>

<sup>1</sup>See https://nodejs.org/

<sup>2</sup>See https://docs.mongodb.com/manual/administration/install-community/ for installation guides

## Getting started
	
	# Ensure `mongod` is running, either as a service or in another shell
	git clone <this repo>
	npm install
	npm run-script seed # Seed the DB with Users
	npm start

## Running tests

`npm test`

## API documentation

See [API.md](API.md) for details.

## SonarQube
In addition to ESLint, we've also included some configuration for SonarQube in `sonar-project.properties`.

See http://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes for more details on how to setup SonarQube locally.
