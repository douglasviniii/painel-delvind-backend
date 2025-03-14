import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative'},
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true }],
  name_team: {type: String, required: true},
  description: {type: String, require: true},
  date: {type: Date, required: true},
});

const TeamModel = mongoose.model("Team", TeamSchema);

export default TeamModel;