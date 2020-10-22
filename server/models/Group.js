const mongoose = require('mongoose');
const User = require('./User');
const { ObjectId } = mongoose.Schema.Types;


const groupSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 100
    },
    createdBy: {
        type: ObjectId,
        ref: "User"
    },
    members: [],
    admins: []
});

const Group = mongoose.model("Group", groupSchema);
module.exports = { Group };
