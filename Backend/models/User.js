const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    CustomerId: {type: Number, required: true},
    FirstName: {type: String, required: true},
    LastName: {type: String, required: true},
    PhoneNo: {type: String, required: true},
    EmailId: {type: String, required: true},
    Address: {type: String, required: true},
    PinCode: {type: Number, required: true}
});

module.exports = mongoose.model('User', UserSchema);