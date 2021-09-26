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

cost envVar = process.env.EXAMPLE;

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

## Global
__Node__ has the global object that it contains all methods and basics properties that we use.

__Global__ is the equivalent of __this__ in the browser.
