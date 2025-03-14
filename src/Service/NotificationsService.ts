import NotificationsModel from "../Models/NotificationsModel";

const Create = (data: object) => NotificationsModel.create(data);
const Delete = (id: string) => NotificationsModel.deleteOne({_id: id});
const FindById = (id: string) => NotificationsModel.find({employee_id: id});
const FindAll = () => NotificationsModel.find();

export default {Create,Delete,FindById,FindAll};