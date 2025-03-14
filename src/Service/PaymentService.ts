import PaymentModel from "../Models/PaymentModel";

const Create = (data: object) => PaymentModel.create(data);
const FindAll = () => PaymentModel.find();

export default {Create,FindAll};