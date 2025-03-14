import mongoose from "mongoose";

const SendReportSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true},
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative', required: true},
    report_id: {type: mongoose.Schema.Types.ObjectId, ref: 'ReportEmployee', required: true},
})

const SendReportModel = mongoose.model("SendReport", SendReportSchema);

export default SendReportModel;