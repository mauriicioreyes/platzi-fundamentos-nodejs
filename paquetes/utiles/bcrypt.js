const bcrypt = require('bcrypt');

const password = '12345';

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res) {
        // console.error('Error:', err.message);
        console.log(res);
    });
});