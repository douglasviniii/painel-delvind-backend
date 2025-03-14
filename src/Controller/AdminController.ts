import { Request, Response} from "express";
import AdminService from "../Service/AdminService";

const CreateAdmin = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        res.status(201).json(await AdminService.CreateAdminService({email, password}));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

const Auth = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        const user = await AdminService.Login(email);

        if (!user) {
            res.status(401).json({message: 'User not found'});
            return;
        }

        if(password != user!.password){
            res.status(401).json({message: 'Invalid password'});
            return;
        }

        const token = await AdminService.Generatetoken(user!.id);
        const admin = await AdminService.FindAdmin(email);

        res.status(200).json({token,admin});        
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

export default {CreateAdmin,Auth};