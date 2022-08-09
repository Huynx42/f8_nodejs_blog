const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: {
            type: String,
            maxlength: 255,
            required: true,
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
            slug: 'name',
            unique: true,
        },
        videoId: {
            type: String,
            required: true,
        },
        level: {
            type: String,
        },
        // createAt: {type:Date, default:Date.now},
        // updateAt: {type:Date, default:Date.now},
    },
    { timestamps: true },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete);

module.exports = mongoose.model('Course', Course);
