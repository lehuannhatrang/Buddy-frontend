buddy-frontend

To run: Start the buddy-backend first
    * Run on localhost: 
        npm install
        npm run start:dev

    * Run on docker: 
        bash ./serve.sh

To login success, after run buddy-backend, run these command to terminal:

    * If buddy-backend run on localhost:
        mongo --port 27017
    * If buddy-backend run on docker:
        mongo --port 27019

    After connect to mongo command line, type these command:

        *   use buddy
        *   show collections
        *   db.user.insert({user: "huandeptrai", password: "huandeptrai", status: "ACTIVATED"}) 

    Finnally, type http://localhost:5000 or http://buddy.com on browser and use username: "huandeptrai" and password: "huandeptrai" to login