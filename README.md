The task was to showcase create 4 different services that coule communicate using both RESTFUL based communication and RabbitMQ.

The microservices architechture is more efficient when services are independent thus having different databases is the ideal thing for the purpose of easy maintanance ans scalability.

However considering the limitation of time available for me to complete this task and due my work schedule and other factors. i used a single database for all the services. 

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
    build: docker-compose up --build 

To Test Application:
    from postman, just trigget the customer endpoint with the below
        endpoint: http://localhost:4000/api/customer/sendOrder
        method: GET

To Connect MongoDB    
    From each of the services, create a .env file and pass in the MongoDB connection string as seen below. 
    The string must have a valid username and password.
    refer to .env.example file for usage in .env file

    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.dfckv.mongodb.net/Youverify?retryWrites=true&w=majority

