import ReportAdminModel from "../Models/ReportAdminModel";

const Create = (data: object) => ReportAdminModel.create(data);
const FindById = (id: string) => ReportAdminModel.find({admin_id: id})
const Update = (id: string, data: object) => ReportAdminModel.findByIdAndUpdate(id, data, {new: true}); 
const Delete = (id: string) => ReportAdminModel.deleteOne({_id: id});   

export default {Create,FindById,Delete,Update};