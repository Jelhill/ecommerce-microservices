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

To run each service:

    # First, npm install 
    # npm run dev to run the development branch.

