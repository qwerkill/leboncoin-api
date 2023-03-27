const mongoose = require('mongoose');

const UploadFileSchema = new mongoose.Schema({
    ETag: {
        type: String,
    },
    ServerSideEncryption: {
        type: String,
    },
    Location: {
        type: String,
    },
    Key: {
        type: String,
    },
    Bucket: {
        type: String,
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const UploadFile = mongoose.model('UploadFile', UploadFileSchema);

module.exports = UploadFile;