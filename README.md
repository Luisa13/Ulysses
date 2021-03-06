
# Ulysses
Web application to plan your trips in a very visual way. The goal of this project was in principle, to cement and practice some concepts of Spring and at the same time get familiar with React and FrontEnd practices which is not my expertise.
The application allows users previously registered access to the system to organize and plan their future trips, keeping a visual track of every point. All the trips are composed by stages and each of them are displayed in a map. 

> :construction: WARNING: :construction:
> 
> This project is under construction

## Requirements & Technologies
**Backend**
* Java 11
* Spring 4.11.0
* Spring Security that utilizes JSON Web Tokens
* Spring Data JPA
* Maven 3.6.3
* JUnit 5

**FrontEnd**
* React 
* Typescript
* [React-Hot-Toast 2.1.0](https://react-hot-toast.com) For pop-ups and messages in the app
* [React-Leaflet](https://react-leaflet.js.org) For map visualization

## Start the application
Clone this project
```
$ git clone https://github.com/Luisa13/Ulysses.git
```
Run the server
```
$ cd ./ulysses-backend 
$ ./mvnw spring-boot:run
```
The server will start at port 8080

Run the client
```
$ cd ./ulysses-client
$ yarn start
```
The client will start at port 3000

## Example

## References
- [Clean architechture in React](https://janithl.github.io/2019/10/react-clean-architecture-part-2/)
- [Single Page Application Template: Best practices](https://github.com/pcalouche/spat)
- [Mastering Microservices with Java 11](https://github.com/PacktPublishing/Mastering-Microservices-with-Java-Third-Edition)
- [Dockerizing a spring-boot app](https://medium.com/geekculture/dockerizing-a-spring-boot-application-with-maven-122286e9f582) and a start to finish [guide](https://stackify.com/guide-docker-java/)


## Author and License
Luisa Sanchez Avivar - 2021



