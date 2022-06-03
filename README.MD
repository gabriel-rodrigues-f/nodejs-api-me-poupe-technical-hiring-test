# API Me Poupe!

![me-poupe](https://user-images.githubusercontent.com/63867838/171801259-6e92ff91-704c-4fa4-a58c-0762dab96f4a.png)

##  Technology 

Technologies used in the project

* node            16.13.0
* npm             8.8.0
* docker          20.10.16
* docker-compose  1.26.0

##  Services

* Github

##  Getting started

* Dependencies
  - Axios         0.27.2
  - Cors          2.8.5
  - Express       4.18.1
  - Morgan        1.10.0
  - Nodemon       2.0.16

* Development Dependencies
  - eslint                      7.32.0 || 8.2.0
    - eslint-config-airbnb-base 15.0.0
    - eslint-plugin-import      2.25.2
  - jest                        28.1.0
  
##  Launch the application
  
* Launch the application using Docker
  - npm install
  - docker-compose up
  
* Launch the application locally
    - npm run dev: launch the application in the development environment

## Use the API
### Search Address:
  - Method: ```POST```
  - ```Url: localhost:3000/address/searchaddress```
  - Examples:
    - Match full address structure: ```{ "cep": "07160-170" }```
    - Match incomplete address: ```{ "cep": "18150-000"}```
    - Not Found: ```{ "cep": "00000-000"}```
    - Internal Server Error: ``` send empty ```

### Search Address:
  - Method: ```POST```
  - ```Url: localhost:3000/calculator/average```
  - Examples:
    - Match the rounded average calculation with Half Round Up: ``` { "first": 1, "second": 5.681} ```
      - Input type can be string or numeric
    - Error: send empty, omit parameters or send incorrect parameters

## Features

### Calculate average
  - Average two numbers and round them using the Half Round Up strategy
  - The data will be processed and the return will be pleasant
  - The request log can be consulted in the path './log/calculator.log'. There is a request available as an example. With each new request the log will be stored in this path.

### Search address
  - Query an address using a CEP (Brazilian postal code)
  - The data will be processed and the return will be pleasant

##  Authors
  * **Gabriel Vinícius Rodrigues Freire**
