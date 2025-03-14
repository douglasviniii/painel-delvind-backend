import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema({
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative', required: true},
    clientEmail: {type: String, require:true},
    clientName: {type: String, require:true},
    clientPhone: {type: String, require:true},
    createdAt: {type: String, require:true},
    items: [{}],
    technicalNotes: {type: String, require:true},
    technician: {type: String, require:true},
    total: {type: Number, require:true},
})

const BudgetModel = mongoose.model("Budgets", BudgetSchema);

export default BudgetModel;