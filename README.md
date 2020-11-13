
***ILIA Challenge***
-----------------------

API that imports movies from an external API.

Developed using:

    Node ^v12.16.3^
    Postgres Docker conteiner

This API exposes ume endpoint:

    http://localhost:3002/movies/?id

This endpoint recovers the informations of a movie and its translations from the TMDB public API and store them in a local database.

Any comments or contributions, feel free to make contact.

*How to:*

clone this respository

In the project directory, run:

    npm install

Configure your connection with PostGres on the ./.env file setting the following variables (the values in it represent the defaul values for the postgres docker image):

    DEV_DB_HOST="localhost"
    DEV_DB_USER="postgres"
    DEV_DB_PASS="mysecretpassword"
    DEV_DB_NAME="postgres"
    DEV_DB_PORT=5432

Run the Script for migration of the Models:

    npm run sqlize-migrate

Run the script for start server:

    npm run dev

