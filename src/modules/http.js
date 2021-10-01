const http = require('http');
http.createServer(router).listen(3000);

function router (req, res) {
    console.log('New request!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hello, how about you?');
            res.end();
            break;

        default:
            res.write(`Error 404: I don't know what you want`);
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // Write response to user
    // res.write('Hello, I can use NodeJS HTPP')

    // res.end();
};

console.log(`Listening http on port 3000`);