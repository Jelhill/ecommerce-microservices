PLEASE READ

The task was to create 4 different services that could communicate using both RESTFUL based communication and RabbitMQ.

The microservices architechture is more efficient when services are independent thus having different databases is the ideal thing for the purpose of easy maintanance and scalability.

However considering the limitation of time available for me to complete this task and due my tight work schedule and other factors. i used a single database for all the services. 

The below are the 4 (four) services and they are hosted on a single github repository.

    # customer-service
    # order-service
    # payment-service
    # product-service

The customer service and product services has a seeded folder that seeds a single customer and two products respectfully to the database. to run this seeders Go to their services and type:
    # npm run seeder
    this should be done directly on local host. 


To run Application,
    Pull Command: git clone https://github.com/Jelhill/ecommerce-microservices
    
    Before building the app with docker-compose, First do the following Steps.

    Step 1: Add .env file to the root folder of each service

    Step 2: Add a mongoDB String to each of .env file. String format is shown below:
            # MONGO_URI=mongodb+srv://<username>:<password>@cluster0.dfckv.mongodb.net/Youverify?retryWrites=true&w=majority

    Step 3: Ensure to change the username and password of the string to yours.

    Step 4: From the customer service, run "npm run seeder" to seed a customer to the database. 

    Step 5: From the product service, run "npm run seeder" to seed two products to the database

    Step 6: Then from the root folder where the docker -compose.yml file is located, build the application with the following command from the terminal or bash.
            # docker-compose up --build 
            This will start up all the container services and the rabbitmq server.

To Test Application:
    from postman, just trigget the customer endpoint with the below
        endpoint: http://localhost:4000/api/customer/sendOrder
        method: GET

IMPORTANT INFO: If you have challenges with running the seeder, i have hardcoded some data that would automatically be called if the data is not fetched from db. This is to ensure ease in testing the code. 



