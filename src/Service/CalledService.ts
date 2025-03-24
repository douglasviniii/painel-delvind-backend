import CalledModel from "../Models/CalledModel";

const Create = (data: object) => CalledModel.create(data);
const FindById = (id: string) => CalledModel.find({employee_id: id}).sort({ _id: -1 });
const FindByIdAdmin = (id: string) => CalledModel.find({admin_id: id}).sort({ _id: -1 });
const Update = (id: string, status: string) => CalledModel.findOneAndUpdate({ _id: id },{status});
const Delete = (id: string) => CalledModel.deleteOne({_id: id});

export default{Create,FindById,FindByIdAdmin,Update,Delete};