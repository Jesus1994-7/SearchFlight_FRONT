# FrontEnd, FlightSearch
![badge](https://img.shields.io/badge/working-active-brig)

FrontEnd proposed as an exercise to work with React connected to a previous develop BackEnd using the API of the BackEnd. Also have a database where we storage the information about the correct behaviour of the application. In this application we need to complete the necessary methods to manage the users, manage the flights and relative information and give the possibility of search different flights from different data.

The data is storage in two different databases, local SQL to manage the data of the normal use and a remote MongoDB to manage the orders of the user. This one gonna be use to storage all the information about the transactions of the user.

In this part of the project we investigate different webpages relatives to that theme and we arrived to our solution. 

## How to Start 🚀

+ To use all our solution the best is clone our back first: 
```
 $ git clone https://github.com/chsanleo/FlightSearch_BACK
```

+ and install the packages,

```
$ npm install
```

+ run the migrations to create the database

```
$ sequelize db:migrate
```

+ populate the database with basic data

```
$ sequelize db:seed:all
```
 
+ take a look to the /config/ files, where u need to take the samples and create ur own config files

+ clone the front repository
```
$ git clone https://github.com/Jesus1994-7/SearchFlight_FRONT
```
+ run both, back and front in the source folder
```
$ npm start
```

+ and... WORK!.

## Project status

>Is not finish and we are working adding more features and improvements on it, also fixing some small details ;). 

### Current Features 📄

+ Register users.
+ Login and Log Out.
+ Accces to the profile of a current user.
+ Search flights with different parameters.
+ Check the detail of a specific flight.
+ Use of Redux to the management of the data.

### Roadmap 📋

**About the front**

+ Create a CRM using the current system of common information to different entities.
+ Create the feature for show go and return tickets.
+ Create a complex search of flights with scales.

**About features**
+ Implement new search.
+ Add payment plataforms and payment types.

## Test the application ⚙️

Turn on the server.
```
$ npm start
```

Use the browser of your choice and surf to http://localhost:3000/ to enter and with the developer tools u can start.

![devtools](https://www.formacionprofesional.info/wp-content/uploads/2015/09/herramientas_desarrollo_iexplorer11.png)

Because we are using redux is a good idea also install the [redux develop tools](https://github.com/reduxjs/redux-devtools)


## Contributors ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)
* **Jesus Canovas** - [Jesus1994-7](https://github.com/Jesus1994-7)

## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Ask us before use. Feedback is welcome!. 
If u need more documentation or have any doubts about the code don't hesitiate to contact us.

## How to say 'thanks' to us  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to us (or two, or... some ;) some snacks also recomendable ). 
* Comments about always welcome!.