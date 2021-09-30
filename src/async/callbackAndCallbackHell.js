function hello(name, myCallback) {
    setTimeout(function () {
        console.log('hello, '+ name);
        myCallback(name);
    }, 1500);
}

function talk(callbacktalk) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbacktalk();
    }, 1000);
}

function bye(name, otherBallback) {
    setTimeout(function() {
        console.log('bye', name);
        otherBallback();
    }, 1000);
}

function conversacion(name, times, callback) {
    if (times > 0) {
        talk(function () {
            conversacion(name, --times, callback);
        })
    } else {
        bye(name, callback);
    }
}


console.log('Starting process...');
hello('Diego', function (name) {
    conversacion(name, 10, function() {
        console.log('End process');
    });
});

/****************HELL**********************/
// hello('Alejandro', function (name) {
//     talk(function () {
//         talk(function () {
//             talk(function () {
//                 bye(name, function() {
//                     console.log('Ending process...');
//                 });
//             });
//         });
//     });
// });
