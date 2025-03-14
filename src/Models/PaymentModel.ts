import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrative', required: true},
    id: {type: String, require:true},
    created_at: {type: Date, require:true},
    updated_at: {type: Date, require:true},
    items_total_cost: {type: Number, require:true},
})

const PaymentModel = mongoose.model("Payments", PaymentSchema);

export default PaymentModel;