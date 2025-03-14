import TaskModel from "../Models/TaskModel";

const Create = (data: object) => TaskModel.create(data);
const FindById = (id: string) => TaskModel.find({employee_id: id});
const FindByIdAdmin = (id: string) => TaskModel.find({admin_id: id});
const FindByIdInMembers = (id: string) => TaskModel.find({ members: id }).populate('members');
const Update = (id: string, status: string) => TaskModel.findOneAndUpdate({ _id: id },{status});
const Delete = (id: string) => TaskModel.deleteOne({_id: id});

export default {Create,FindById,FindByIdAdmin,FindByIdInMembers,Update,Delete};