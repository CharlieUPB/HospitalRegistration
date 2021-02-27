# HospitalRegistration

# Steps to Run APP

# Client

Under HospitalRegistrationClient folder run:

```npm install```

```npm start```

# Database

Having docker installed run the following command: 

```docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=HospitalRegistry -d mysql```

# Server

Open the ```src\main\resources\application.properties``` file:

Change: 

```spring.datasource.url=jdbc:mysql://192.168.99.100:3306/HospitalRegistry``` 

for the Corresponding IP where mysql is running.

```spring.datasource.url=jdbc:mysql://{YOUR_IP}:3306/HospitalRegistry``` 

Note: If running on docker using docker machine the Ip can be different. If running on docker for linux the Ip should be localhost.

Open in Ecipse the HospitalRegistrationService folder

Run the file ```HospitalRegistrationServiceApplication.java``` as Java Application 
