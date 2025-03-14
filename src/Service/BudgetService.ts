import BudgetModel from "../Models/BudgetModel";

const Create = (data: object) => BudgetModel.create(data);
const FindAll = () => BudgetModel.find();
const Update = (id: string, data: object) => BudgetModel.findByIdAndUpdate(id, data, {new: true}); 
const Delete = (id: string) => BudgetModel.deleteOne({_id: id});

export default {Create,FindAll,Update,Delete};