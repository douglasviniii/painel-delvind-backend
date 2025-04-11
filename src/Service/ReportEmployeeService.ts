import ReportEmployeeModel from "../Models/ReportEmployeeModel";
import SendReportModel from "../Models/SendReportModel";

const Create = (data: object) => ReportEmployeeModel.create(data);
const Send = (data: object) => SendReportModel.create(data);
const FindByIdSends = (id: string) => SendReportModel.find({admin_id: id}).sort({ _id: -1 }).populate("report_id").populate("employee_id");
const FindByIdSendsEmployee = (id: string) => SendReportModel.find({employee_id: id}).sort({ _id: -1 }).populate("report_id").populate("employee_id");
const FindById = (id: string) => ReportEmployeeModel.find({employee_id: id}).sort({ _id: -1 });
const Delete = (id: string) => ReportEmployeeModel.deleteOne({_id: id});
const DeleteSends = (id: string) => SendReportModel.deleteOne({_id: id});
const Update = (id: string, data: object) => ReportEmployeeModel.findByIdAndUpdate(id, data, {new: true});    

export default {Create,Send,FindByIdSends,FindById,Delete,DeleteSends,Update,FindByIdSendsEmployee};