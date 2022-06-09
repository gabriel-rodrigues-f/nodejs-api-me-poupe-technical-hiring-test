![me-poupe](https://user-images.githubusercontent.com/63867838/171801259-6e92ff91-704c-4fa4-a58c-0762dab96f4a.png)

<h1 align="center">
    <p>Projeto técnico</p>
</h1>
<p align="center">Projeto para validação de perfil técnico Node.js Junior Me Poupe!</p>

Subject
=================
   * [Technology](#technology)
      * [Technologies used in the project](#technologies-used-in-the-project)
   * [Services](#services)
   * [Getting started](#getting-started)
      * [Main dependencies](#main-dependencies)
      * [Development Dependencies](#development-dependencies)
   * [Launch the application](#launch-the-application)
      * [Docker](#docker)
      * [Locally](#locally)
   * [Launch tests](#launch-tests)


##  Technology 

### Technologies used in the project

* node            16.13.0
* npm             8.8.0
* docker          20.10.16
* docker-compose  1.26.0

##  Services

* Github

##  Getting started

### Main dependencies
  - Axios         0.27.2
  - Cors          2.8.5
  - Express       4.18.1
  - Morgan        1.10.0
  - Nodemon       2.0.16

### Development Dependencies
  - eslint                      7.32.0 || 8.2.0
    - eslint-config-airbnb-base 15.0.0
    - eslint-plugin-import      2.25.2
  - jest                        28.1.0
  
##  Launch the application

### Docker
    - docker build -t mepoupe/dockermepoupe .
    - docker-compose up

### Locally
    - npm run dev: launch the application in the development environment
    
### Launch tests
  - npm test
  
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

### Author
---

<a href="https://github.com/gabriel-rodrigues-f">
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/63867838/172750804-a6e9046e-2ae5-4609-a2e3-51483f207d17.jpg" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Rodrigues</b></sub></a> <a href="https://github.com/gabriel-rodrigues-f" title="Github">🚀</a>



👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-rodrigues-f/)](https://www.linkedin.com/in/gabriel-rodrigues-f/)
