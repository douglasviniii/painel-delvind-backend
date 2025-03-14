import EmployeeModel from "../Models/EmployeeModel";
import jwt from "jsonwebtoken";

const CreateEmployeeService = (data: object) => EmployeeModel.create(data);
const FindById = (id: string) => EmployeeModel.findById(id);
const FindAll = () => EmployeeModel.find();
const Login = (email: string) => EmployeeModel.findOne({email: email}).select("password");
const FindEmployee = (email: string) => EmployeeModel.findOne({email: email});
const Generatetoken = (id: string) => jwt.sign({ id: id }, `${process.env.SECRET_KEY_JWT}`, { expiresIn: 86400 });
const Update = (id: string, data: object) => EmployeeModel.findByIdAndUpdate(id, { $set: data }, { new: true });
const Delete = (id: string) => EmployeeModel.deleteOne({_id: id});

export default {CreateEmployeeService,FindAll,Login, FindEmployee,Generatetoken,FindById,Update,Delete};