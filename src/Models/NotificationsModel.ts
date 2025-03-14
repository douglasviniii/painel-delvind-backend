import mongoose from "mongoose";

const NotificationsSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true},
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative', required: true},
    message: {type: String, required: true},
    date: {type: Date},
})

const NotificationsModel = mongoose.model("Notifications", NotificationsSchema);

export default NotificationsModel;