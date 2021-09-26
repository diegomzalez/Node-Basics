# Node Basics
In this repository, I resume all of I learned in the Platzi Node Basics Course.
So to improve my documentation with my learning and proyects.

# Nodejs
Node is one of the most effecient ways to run and execute code on servers, in a very scalable way.

It's a JavaScript runtime enviroment outsite the browser. It was created in 2009, oriented to servers. So it can be run on many dispositives wihtout a browser, to allow us create async servers.

## Characteristics
It is single-threaded, with asynchronous inputs and outputs, using a proccesasor core for each process.

## V8
Node use V8 runtime enviroment, created by Google.
It converts JavaScript in Machine Code instead of interpreting in real time.

## Modules
Node works on the basis of modules.
Some modules come with Node, and other we can get with package managers. For example: [NPM](https://github.com/diegomdevs/npmCourse).

## Oriented Events
There's a event bucle running constanly listening these events.
You can orient your code reactively.

## Event Loop
It's a process with a loop that it manages and resolves , asynchronously, all events of your application. These events are sent to the Event Loop by the Event Queue.

## Event Queue
It contains everything that is sent to it in our code (request, function, event, etc), Passing events to the Event Loop one by one.

## Thread Pool
If the Event Loop cannot resolve some heavy events, the Thread Pool will manage and resolve these events asynchronously. Then send them to the Event Queue.

## Enviroment Variables
The Environments variables are datas that we can get outside our code.

To declarate an environment variables, we can use the following syntax:

cost envVar = 

So then we can assign any value executing our script:

envVar=EXAMPLE node example.js

## Nodemon
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Installation
Either through cloning with git or by using npm (the recommended way):

npm install -g nodemon

# Asynchronous

## Callbacks
JavaScript callbacks are executed in the sequence they are called. Not in the sequence they are defined.

## Callback Hell
Hell callbacks occur when you start to pass a function as a parameter that in turn calls another function as a parameter, and so on up to n numbers.

## Promises
Promises are a more elegant and readable syntax for making callbacks, thus creating a much more scalable and understandable code for all people.

## Async-Await
To avoid that everything looks asynchronous, and that the syntax is more readable, sequential operations such as making a file to be processed, uploading it to have a URL and then sending it to a database.
Async and Await allow us to explicitly define a function as asynchronous and wait for the function to finish. It will not be blocking the main thread, as it will be waiting for it to be resolved with the event loop.
