import TeamModel from "../Models/TeamModel";

const Create = (data: object) => TeamModel.create(data);
const Update = (id: string, data: object) => TeamModel.findByIdAndUpdate(id, data, {new: true}); 
const Delete = (id: string) => TeamModel.deleteOne({_id: id});

const Find = () => TeamModel.find().populate('admin_id')
.populate('members');
const FindById = (id: string) => TeamModel.find({ members: id }).populate('admin_id')
.populate('members');

export default {Create,Update,Delete,Find,FindById};