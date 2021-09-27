const { deepStrictEqual, rejects } = require('assert');
const { captureRejections } = require('events');
const fs = require('fs');
const { resolve } = require('path/posix');

/* function read_file(url, cb) {
        fs.readFile(url, (error, data) => {
                // Readed
                console.log(data.toString(), console.log);
        });
};

function write_file(url, content, cb) {
        fs.writeFile(url, content, function (error) {
                error
                ? console.log(`I can't write the file! ${error}`)
                : console.log('The file has been written successfully!')
        })
};

function delete_(url, cb) {
        fs.unlink(url, cb);
};

// write_file(__dirname + 'file1.txt', 'I am a new file', console.log);
// read_file(__dirname + '/file.txt')
delete_(__dirname + '/modulesfile1.txt', console.log) */

async function read_file(url) {
        try {
                await fs.readFile(url, (error, data) => {
                        // Readed
                        console.log(data.toString(), console.log);
                });
        } catch {
                await console.error(error);
        };
};

async function write_file(url, content, cb) {
        try {
                await fs.writeFile(url, content)
                console.log('The file has been written successfully!')
        } catch {
                console.error(`I can't write the file!`);
        }
};

async function delete_(url) {
        return new Promise((resolve, reject) => {
                try {
                        resolve(() => {
                                fs.unlink(url);
                        });
                } catch {
                        reject(console.error(error));
                };
        })};

const main = async () => {
        await read_file(__dirname + '/file.txt');
        await write_file(__dirname + '/file1.txt', 'Francisco es pato');
        await delete_(__dirname + '/file1.txt')
                .then(resolve => {
                        console.log("Hola")
                })
};
main();