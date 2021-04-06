# Order Monitor App 😄

App website: https://junshengtan-order-monitor.herokuapp.com

Author: Junsheng Tan

Portfolio website: https://junshengtan.webflow.io

# Introudction

This is an order monitor platform. You can send new service request order and check existing orders. In addition, you can use filter to filter out specific requests.

# Techonologies

## Overview

### Front End

I use ***React*** to render UI components. For state management, I apply ***Redux*** to store one page of requests retrieved from database as well as notification. When sending a new request, a create action will also be launched. For form parsing and validation, I utilize ***Yup*** to create form schemas, and ***Formik*** to validate inputs.

***Npm*** is used for package management.

***Bootstrap*** for UI style

### Backend

I use ***Node.js*** as backend runtime, ***Express*** as backend server, ***PostgreSQL*** as database. In addition, pagination is implemented in database.

### Deployment

I deployed the application on ***Heroku***, the website is https://junshengtan-order-monitor.herokuapp.com

## Technology List

* Deployment: 
  + Heroku

* Front End:
  + React
  + Redux
  + Npm
  + Bootstrap
  + Formik
  + Yup

* Back End:
  + Node.js
  + Express
  + PostgreSQL

## Features

* __View all service requests/tickets__
* [x] List of requests

Retrieved from database, the requests are listed in the table. 

* [x]  Sorting

The requests can be sorted by created time.

* [x]  Pagination

 Pagination is implemented in PostgreSQL. One page has 10 records of requests.

* __Filter listed requests__
* [x] Free text filtering

This is implementd by condition search in database. User can filter requests by free text filtering to filter out requests with certain words in description column. 

* [x] Additional fields to show only e.g. Open

This is implementd by condition search in database. Users can filter requests by request type, priority and status.

* __Create new service request__
* [x] Input fields and send button in side panel
* [x] Check that required fields have been entered
* [x] Notification when the request has been created
* [x] Automatically refresh list after request has been created

When click the new service request button, form is shown in side panel. By ***Formik***, input fileds are validated before submitting. When a new request is created, a ***Redux*** action will be launched to trigger notification to be shown. Finally, request list will be updated immediately, because besides from storing in the database, the request is also stored in local redux state.
