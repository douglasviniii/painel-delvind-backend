import mongoose from "mongoose";

const AdministrativeSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    role: {type: String, default: 'admin'},
    password: {type: String, required: true},
})

const AdministrativeModel = mongoose.model("Administrative", AdministrativeSchema);

export default AdministrativeModel;