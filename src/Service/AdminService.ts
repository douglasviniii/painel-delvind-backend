import AdministrativeModel from "../Models/AdministrativeModel";
import jwt from "jsonwebtoken";


const CreateAdminService = (data: object) => AdministrativeModel.create(data);
const Login = (email: string) => AdministrativeModel.findOne({email: email}).select("password");
const FindAdmin = (email: string) => AdministrativeModel.findOne({email: email});
const Generatetoken = (id: string) => jwt.sign({ id: id }, `${process.env.SECRET_KEY_JWT}`, { expiresIn: 86400 });

export default {CreateAdminService,Login,FindAdmin,Generatetoken};