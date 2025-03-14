import mongoose from "mongoose";

const ReportAdminSchema = new mongoose.Schema({
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative', required: true},
    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
})

const ReportAdminModel = mongoose.model("ReportAdmin", ReportAdminSchema);

export default ReportAdminModel;