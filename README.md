# CandidatesUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Install Project

* Install `node 12.14.1`.
* Run `npm install -g @angular/cli` to install angular globally.
* Navigate to folder project and run `npm install`.
* Install [server](https://github.com/maries-15/candidates-service) to retrieve and persist data.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running lint and unit tests

Run `ng lint` to check code styles. 
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Check files below:
* [voting-card.component](https://github.com/maries-15/candidates-ui/blob/interation_js/src/app/shared/components/voting-card/voting-card.component.spec.ts)
* [register.component](https://github.com/maries-15/candidates-ui/blob/interation_js/src/app/shared/components/register/register.component.spec.ts)

## Key aspects
* Single responsibility per file.
* Shared module to include shared components, pipes and directives.
* Unique layout for all the pages that include header and footer to be reusable and not loaded every time.
* Server side in Node js to use http requests and persist data.
* Clean folder structure to easily navigate through the project.
* Added Reset styles, global styles, mixins and variables to reuse along the project.
* Lazy loading to avoid load all the modules when the page loads.
* Implement some basic unit test with BDD.
* Configure the project to do it easier to work on it.
* Using external libraries to make easy to implement modals.
