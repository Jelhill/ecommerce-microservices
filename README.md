PLEASE READ

The task was to create 4 different services that could communicate using both RESTFUL based communication and RabbitMQ.

The microservices architechture is more efficient when services are independent thus having different databases is the ideal thing for the purpose of easy maintanance and scalability.

However considering the limitation of time available for me to complete this task and due my tight work schedule and other factors. i used a single database for all the services. 

The below are the 4 (four) services and they are hosted on a single github repository.

    # customer-service (Exposed on PORT 4000)
    # order-service (Exposed on PORT 3001)
    # payment-service (Exposed on PORT 5000)
    # product-service (Exposed on PORT 5001)

The customer service and product services have a seeded folder that seeds a single customer and two products respectfully to the database. to run this seeders Go to their services and type:
    # npm run seeder
    this should be done directly fron localhost. 


To run Application,
    Pull Command: git clone https://github.com/Jelhill/ecommerce-microservices
    
    Before building the application with docker-compose, please do the following Steps.

    Step 1: Add .env file to the root folder of each service

    Step 2: Add a mongoDB String to each of .env file. String format is shown below:
            # MONGO_URI=mongodb+srv://<username>:<password>@cluster0.dfckv.mongodb.net/Youverify?retryWrites=true&w=majority

    Step 3: Ensure to change the username and password of the string to yours.

    Step 4: Then from the root folder where the docker -compose.yml file is located, build the application with the following command from the terminal or bash.
            # docker-compose up --build 
            This will start up all the container services and the rabbitmq server.

    After successful build, before testing the application, the seeded customer and seeded product has to be ran in their respective services. The reason is to separate the seeded data from the application such that data are not seeded every time the application is tested. 

    To seed the customer data and user 
To Test Application:
    from postman, just trigget the customer endpoint with the below
        endpoint: http://localhost:4000/api/customer/sendOrder
        method: GET

After successful build, before testing the application, the seeded customer and seeded product has to be ran in their respective services. The reason is to separate the seeded data from the application such that data are not seeded every time the application is tested. 

IMPORTANT INFO: If you have challenges with running the seeder, i have hardcoded some data that would automatically be called if the data is not fetched from db. This is to ensure ease in testing the code. 



