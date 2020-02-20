# Problem Dashboard

The Problem Dashboard is intended to function as an organized list of patient conditions taken from multiple problem 
list types and display a master problem list. The Dashboard will offer an organized summary of relevant labs, notes and diagnostics 
associated with each problem. The objective of the Problem Dashboard is two-fold:
1. To increase clinician  well-being and efficiency by  rendering all relevant information concisely in one place
2. To improve patient outcomes by increasing clinician efficacy

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
If not already set up, install nvm, Node.js, npm:
```
The recommended way to install nvm, Node.js and npm on Windows is to use the Windows Subsystem for Linux v2 (WSL2). Explanation of that is here: https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2

NOTE: I did not have the permissions required to set up this sub-system, so I was unable to complete this part the correct way, and instead set up the node.js environment directly on to windows. Explanation is here:
https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows
This way offers less developer control so I would also recommend using the WSL2 link when possible.

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repo from github:

```
git clone https://github.com/Ajjuarez/problemDashboard
```

cd into destination folder:

```
cd problemDashboard
```

Install dependencies:

```
npm install
```

Run the application

```
npm start
```

The application should be now be running on http://localhost:3000/#

To view the application in a demo view frame navigate to
file:///C:/Users/your/file/path/problemDashboard/views/demo/frame.html<br>

### Accessing the SQLite Database

Navigate to SQLite folder in the problemDashboard directory:

```
c:\your\path\problemDashboard\sqlite>
```

Use the following command to connect to the database:

```
c:\sqlite>sqlite3 c:\sqlite\db\probDashDB.db
```

You should now be connected and see the following prompt to indicate that you are now inside the database:

```
sqlite>
```

Try a simple command to view all the tables available in the sample database:

```
sqlite> .tables 
```
For further instruction on how to use the database: https://www.sqlitetutorial.net/sqlite-sample-database/<br>

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Node.js](https://nodejs.org/en/) - Dependency Management
* [SQLite](https://www.sqlite.org/index.html) - Database Engine


## Authors

* **Alexandria Juarez** - *Initial work* - [Github](https://github.com/Ajjuarez)
* **Julia Otteson** - *Initial work* - [Github](https://github.com/Ajjuarez)

See also the list of [contributors](https://github.com/Ajjuarez/problemDashboard/contributors) who participated in this project.

