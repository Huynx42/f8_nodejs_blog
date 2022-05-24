const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://172.17.0.2:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect succesfully!!!');
    } catch (error) {
        console.log('fail!');
    }
}

module.exports = { connect };
