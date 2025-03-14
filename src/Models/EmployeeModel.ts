import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    team: {type: String, required: true },
    role: {type: String, default: 'Colaborador'},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status: {type: String, default: 'ativo'},
})

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

export default EmployeeModel;