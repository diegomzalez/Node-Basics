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
