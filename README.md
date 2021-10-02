# Node Basics
In this repository, I resume all of I __learned__ in the Platzi Node Basics Course.
So to improve my documentation with my learning and proyects.

# Nodejs
__Node__ is one of the most effecient ways to run and execute code on servers, in a very scalable way.

It's a __JavaScript__ runtime enviroment outsite the browser. It was created in 2009, oriented to servers. So it can be run on many dispositives wihtout a browser, to allow us create async servers.

## Characteristics
It is __single-threaded__, with __asynchronous__ inputs and outputs, using a proccesasor core for each process.

## V8
__Node__ use __V8__ runtime enviroment, created by __Google__.
It converts __JavaScript__ in __Machine Code__ instead of interpreting in real time.

## Modules
__Node__ works on the basis of modules.
Some modules come with Node, and other we can get with package managers. For example: [NPM](https://github.com/diegomdevs/npmCourse).

## Oriented Events
There's a __event bucle__ running constanly listening these events.
You can orient your code __reactively__.

## Event Loop
It's a process with a __loop__ that it manages and resolves , asynchronously, all events of your application. These events are sent to the Event Loop by the __Event Queue__.

## Event Queue
It contains everything that is sent to it in our code (request, function, event, etc), Passing events to the __Event Loop__ one by one.

## Thread Pool
If the __Event Loop__ cannot resolve some heavy events, the __Thread Pool__ will manage and resolve these events asynchronously. Then send them to the __Event Queue__.

## Enviroment Variables
The __Environments__ variables are datas that we can get outside our code.

To declarate an __environment variable__, we can use the following syntax:

        const envVar = process.env.EXAMPLE;

So then we can assign any value executing our script:

        envVar=EXAMPLE node example.js

## Nodemon
__Nodemon__ is a tool that helps develop __node.js__ based applications by automatically restarting the node application when file changes in the directory are detected.

## Installation
Either through cloning with git or by using __npm__ (the recommended way):

        npm install -g nodemon

# Asynchronous

## Callbacks
__JavaScript callbacks__ are executed in the sequence they are called. Not in the sequence they are defined.

## Callback Hell
__Hell callbacks__ occur when you start to pass a function as a parameter that in turn calls another function as a parameter, and so on up to n numbers.

## Promises
__Promises__ are a more elegant and readable syntax for making callbacks, thus creating a much more scalable and understandable code for all people.

## Async-Await
To avoid that everything looks asynchronous, and that the syntax is more readable, sequential operations such as making a file to be processed, uploading it to have a URL and then sending it to a database.
Async and Await allow us to explicitly define a function as asynchronous and wait for the function to finish. It will not be blocking the main thread, as it will be waiting for it to be resolved with the event loop.


# Module Cores
## Global
__Node__ has the global object that it contains all methods and basics properties that we use.

__Global__ is the equivalent of __this__ in the browser.

## File System
File System is a __module of Node__ that it give us methods to modify our files on our system.

### readFile
It __reads__ the content of a file, we will pass as a parameter the url of the file to read:

        s.readFile(url_file);

### writeFile
It __writes__ and __create__ a file (if the file doesn't exist), we will pass as parameter the url of the file and the content that it will write.

        fs.writeFile(url_file, content)

### delete
__delete__ will delete a file, we will pass parameter the url of the file.

        fs.unlink(url);

## Console
Using console we can show values on our terminal:

- console.log: receives any type and displays it in the console.
- console.info: it is equivalent to log but it is used to inform.
- console.error: it is equivalent to log but it is used for errors.
- console.warn: it is equivalent to log but it is used for warning.
- console.table: displays a table from an object.
- console.count: starts an auto increment counter.
- console.countReset: reset the counter to 0.
- console.time: start a timer in ms.
- console.timeEnd: End the timer.
- console.group: allows grouping errors by indentation.
- console.groupEnd: end grouping.
- console.clear: clear the console.

Using this console methods, we can make our code much more effective, legible and professional. Showing direct and effective information.

## Errors (Try / Catch)

With __Node__ we can handle errors in a very optimal way, but first we must understand how Node handles errors by default.
When an error happens in Node, it will by default end the entire process of our code to warn that an error has occurred, this can be fatal for our projects, errors are also reported by threads, that is, if an error happens in the main thread of the event loop, that is, the queue event, the error will be warned from this same thread, but if an error happens before from another thread such as the thread of asynchronous functions, the error will be warned from that thread without showing the main thread error.
We can handle this flow of errors so that Node does not stop when one occurs and we can handle it according to our wishes, for this we use try and catch. Being try the block of code that will execute the function that may or may not fail and being catch the function that will catch the error and we will specify what to do with it.

        try {
                (code executed successfully)
        } catch (error) {
                (error code)
        };

## Child Process

In __Node__ we can create child processes that execute any action of our operating system, as if we were on the command line. It has two functions __spawn__ and __exec__.
The most significant difference between child_process.spawn and child_process.exec is in what spawn returns a stream and exec returns a buffer.

- Use spawn when you want the child process to return huge binary data to Node.

- Use exec when you want the child process to return simple status messages.
- Use spawn when you want to receive data from the moment the process starts.
- Use exec when you only want to receive data at the end of the execution.

## Natives Modules
In __Node__ we can use native modules, to execute code of others languages in Node. In this case, I use a native module of __C++__ to display a hello world. More info [C++ Addons](https://nodejs.org/api/addons.html).
Also I use [node-gyp](https://github.com/nodejs/node-gyp) to build the program.

## HTTP
__Node__ offers us the __HTTP__ module which mainly allows us to create a server on our computer.
In this module we will find everything we need to create a route system, which will respond to each route, the headers it can send, etc.
One of the main methods of this module is createServer, which will allow us to open a port to create the server.

## OS
OS provide us methods to get OS information.

## Process
The process object is an EventEmitter instance; we can subscribe to it to listen for node events.

## NPM
Npm is the most popular JavaScript package manager that gives us many tools to implement them
in your projects and also share them with the community.

## Require and Import
To import our own or third-party modules, we must use the require or import.

## Useful Modules

### Bcrypt
With __bcrypt__ we can encrypt passwords in a very efficient and fast way.

### Moment
__Moment__ provides us with very detailed time information in our app.

### Sharp
__Sharp__ methods help us to modify images effectively.

## Data stored vs in memory
Learning about __buffers__ and __streams__, the correct way to manage all data process to have faster and more powerful processes.

### Buffer
A __buffer__ is a memory space (in ram memory), in which data is stored temporarily.

It is the crudest form in which data can be stored. (They are saved in bytes and the data type is not specified)

On the console, the data is displayed in hexadecimal format.

### Streams
__Streams__ are Buffer reading points, with these we can declare what actions to execute when a buffer is received. There are three types of streams, read stream, write stream, and read / write stream.

# NodeJS tricks

## Benchmarking (console time y timeEnd)
It encloses a block of code and then evaluates how long it takes to execute.
And you can also work this with asynchronous processes.

## Debugger
__NodeJS__ comes integrated with a debug mode to be able to connect from any code inspection tool to our nodejs code.

We can use the --inspect flag in the terminal with nodemon.

## Error First Callbacks
A pattern that is always followed in any language and dev program is Error First Callbacks, this means that whenever we have a callback, the first parameter should be the error.
### Throw
Throw a user-defined exception.