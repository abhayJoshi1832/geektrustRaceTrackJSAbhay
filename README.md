# Problem statement
https://www.geektrust.com/coding/detailed/racetrack-management
 Context

 GeekRacers, an adventure sports company, owns race tracks on which they allow customers to drive their ​​bikes, cars and SUVs. There are separate dedicated tracks for each type of vehicle. Each track has a limit on the number of vehicles that can be driven simultaneously. 

 
GeekRacers offer 2 types of tracks: 

     Regular, it allows all types of vehicles to race on it. 
     VIP, it can only be used by cars and SUVs. 

Booking Fee
    The fee differs based on the type of race track and the type of vehicle. 
    Race Track Type	Vehicle Type	No. of Vehicles allowed	Cost Per Hour
    REGULAR	 BIKE	 4	 60
    REGULAR	 CAR	 2	 120
    VIP	 CAR	 1	 250
    REGULAR	 SUV	 2	 200
    VIP	 SUV	 1	 300

Booking Rules

     The race track has to be booked for a minimum of 3 Hrs per vehicle.  
     By default, all the vehicles can book only a regular race track. 
     If the regular racetrack is not available, cars or SUVs can be upgraded to a VIP race track. 
     Beyond the first 3 hrs, an additional 50 is charged per hour (applicable to all vehicles and all tracks). 
     An extra time of 15 minutes beyond the allotted 3 Hrs is not chargeable (provided the track is available). 
     If the extra time is more than 15 mts, one will be charged for the whole hour.
     eg. If extra time is 20 mins, then they are charged for 1 hour and if extra time is 1hr 5min, then they will be charged for 2 hours. 
     Racetracks can be booked from 1 PM to 8PM (both are inclusive). 
     All experiences have to be completed by 8PM. Hence, the last booking needs to be done by 5PM. 

Assumptions

     Vehicles can only use their dedicated tracks. That means a car can only use a track meant for cars and cannot switch to an SUV track even if it is available. 
     All the input commands have to be handled in first come first serve mode. 

 Goal

 Your goal is to calculate the total revenue generated under each racetrack type. 

Total revenue = Revenue earned for the default booking period + Revenue earned from additional booking period

# Implementation details
'Pre-requisites'
* NodeJS 12.6.0/14.15.4/16.10.0
* npm

# How to run the code

We have provided scripts to execute the code. 

Use `run.sh` if you are Linux/Unix/macOS Operating systems and `run.bat` if you are on Windows.  Both the files run the commands silently and prints only output from the input file `sample_input/input1.txt`. You are supposed to add the input commands in the file from the appropriate problem statement. 

Internally both the scripts run the following commands 

 * `npm ci --silent` - This will build the solution downloading the necessary dependencies.
 * Once the `npm install` from the previous build process is complete, we will execute the program using the command

`npm start --silent sample_input/input1.txt`

We expect your program to take the location to the text file as parameter. Input needs to be read from a text file, and output should be printed to the console. The text file will contain only commands in the format prescribed by the respective problem.

This main file, main.go should receive in the command line argument and parse the file passed in. Once the file is parsed and the application processes the commands, it should only print the output.

 # Running the code for multiple test cases

 Please fill `input1.txt` and `input2.txt` with the input commands and use those files in `run.bat` or `run.sh`. Replace `./geektrust sample_input/input1.txt` with `./geektrust sample_input/input2.txt` to run the test case from the second file. 

 # How to execute the unit tests

 Mocha based test cases are executed with the following command from the root folder
`mocha test`

Jest based test cases are executed with the following command from the root folder
`jest`

# Typescript

Your main file should be named as `geektrust.ts`.

As of now we only support Typescript under the NPM build system. This will require you to compile your typescript program into javascript.

We run the commands `npm install --silent`, `npm start --silent` and `npm test --silent`.

Please ensure that the npm install commands creates the file `geektrust.js` from your geektrust.ts file. The npm start command should then execute this `geektrust.js` file.

In your `package.json` file make sure you have an entry for the install, start and test script.

* The install command should install the dependencies and also build the `geektrust.js` file.
* The start command will execute the program.
* The test command should execute all the unit tests present

```
"scripts": {
    "install" :"<command to create your geektrust.js file>",
    "start": "node geektrust.js",
    "test": "mocha"
}
```

Note: If you create the geektrust.js file in some other folder (like dist/, build/ or out/)other than the main folder, then please appropriately edit the start command.

# Help

You can refer our help documents [here](https://help.geektrust.com)
You can read build instructions [here](https://github.com/geektrust/coding-problem-artefacts/tree/master/NodeJS)