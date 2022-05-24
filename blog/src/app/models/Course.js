const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: {
            type: String,
            maxlength: 255,
        },
        description: {
            type: String,
            maxlength: 600,
        },
        image: {
            type: String,
            maxlength: 255,
        },
        slug: {
            type: String,
        },
        videoId: {
            type: String,
        },
        // createAt: {type:Date, default:Date.now},
        // updateAt: {type:Date, default:Date.now},
    },
    { timestamps: true },
);

module.exports = mongoose.model('Course', Course);
