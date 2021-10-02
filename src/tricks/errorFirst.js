function async(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        };
    }, 1000);
};
async(function (error, data) {
    if(error) {
        console.error('Theres a error');
        console.error(error);
        // throw error;
        return false;
    };

    console.log('All has been good, my data is' + data)
})