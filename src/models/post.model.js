const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
    uploadFiles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UploadFile'
    }],
    formatted_address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Post', PostSchema);


