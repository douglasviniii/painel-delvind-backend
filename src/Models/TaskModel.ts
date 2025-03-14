import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
  admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative'},
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}],
  title: {type: String, required: true},
  description: {type: String, required: true},
  date: {type: Date, required: true},
  status: {type: String, required: true},
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;