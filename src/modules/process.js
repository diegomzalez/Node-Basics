// const PROCESS = require('process');

process.on('beforeExit', () => {
    console.log('The process will end');
});

process.on('exit', () => {
    console.log('The process end');
});

process.on('uncaughtException', (error, origin) => {
    console.error('Oops, we forgot to catch a bug!');
    console.error(error);
});
XD();
