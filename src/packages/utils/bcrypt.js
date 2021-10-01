const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, (error, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, (error, res) => {
        console.log(res);
    });
});