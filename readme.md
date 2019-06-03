# Going Green
Going green is a small application that presents data from the Summary of CO2 emissions between 2010 and 2016 broken down by borough, sector and fuel type (only Total fuel type at the moment).

It uses data form the London Energy and Greenhouse Gas Inventory (LEGGI) 2010 - 2016 Greenhouse Gas Emissions by Borough dataset that is accessible here https://data.london.gov.uk/dataset/leggi.

The app generates a list of Boroughs which you can change via a select box.

The data is presented in two forms:
1. A line chart that visually shows Total Greenhouse Gas Emissions trend per Year in C02 emissions (kt)
2. A table that reflects the same data.

# How it works
API will call the datastore's own API and perform a query to get results.(based on their documentation).

FRONTEND will call API and will display the data based on application initialisation data and interaction which is only selecting different boroughs at the moment.

# Limitation
Due to the time constraint I have working on the app, there are a couple of limitiations.

The most significant one is the limitation for filters. The data presented only shows fuel type Total for a selected Borough across multiple years.

# Setup
1. Clone repository
1. cd into project directory root

## Build via Docker
1. run `$ docker-compose build`
1. run `$ docker-compose up -d`

## Build locally
### API
1. from the root directory `$ cd api`
1. `$ cp .example.env .env`
1. `$ npm i`
1. `$ npm start`

### FRONTEND
1. from the root directory `$ cd frontend`
1. `$ cp .example.env .env`
1. `$ npm i`
1. `$ npm start`

# Environments
1. Frontend should be accessible in http://localhost:3000/
2. API should be accessible in http://localhost:9000/
