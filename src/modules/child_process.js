const { exec, spawn } = require('child_process');
const { stderr } = require('process');


exec('node src/modules/console.js', (error, stdout, stderr) => {
        if (error) {
                console.error(error);
                return false;
        };
        console.log(stdout)
});

let process = spawn('ls', ['-la']);

console.log(process);