function hello(name) {
        return new Promise(function (resolve, reject) {
                setTimeout(function () {
                        console.log(`hello, ${name}`);
                         resolve(name);
                        reject('There is a error')
                }, 1500);

        });
}

function talk(name) {
        return new Promise((resolve, reject) => {
                setTimeout(function() {
                        console.log('Bla bla bla bla...');
                        resolve(name);
                }, 1000);
        });
};

function bye(name) {
        return new Promise((resolve, reject) => {
                setTimeout(function() {
                        console.log('bye', name);
                        resolve();
                }, 1000);
        })
}
// ---
console.log('Starting process')
hello('Diego')
        .then(talk)
        .then(bye)
        .then((name) => {
                console.log('Ending process...')
        })
        .catch(error => {
                console.error('There is a error' + ' ' + error)
        })