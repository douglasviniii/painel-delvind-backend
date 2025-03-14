import mongoose from 'mongoose';

const CalledSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative'},
    title: {type: String , required: true},
    description: {type: String , required: true},
    author: {type: String},
    date: {type: Date, required: true},
    status: {type: String, required: true},
});

const CalledModel = mongoose.model('Called', CalledSchema);

export default CalledModel;