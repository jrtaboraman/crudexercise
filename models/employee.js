const mongoose = require('mongoose')

const employeesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Employee', employeesSchema)