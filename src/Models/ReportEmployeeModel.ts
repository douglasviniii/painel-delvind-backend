import mongoose from "mongoose";

const ReportEmployeeSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true},
    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
})

const ReportEmployeeModel = mongoose.model("ReportEmployee", ReportEmployeeSchema);

export default ReportEmployeeModel;