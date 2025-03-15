import {Request, Response} from 'express';
import TeamService from '../Service/TeamService';

interface CustomRequest extends Request {
    userid?: string;
    userObject?:object;
} 

const CreateTeam = async (req: Request, res: Response) => {
    try {
        const {name_team, description ,members} = req.body;

        const date = new Date();
        const formattedDate = date.toISOString();
        
        await TeamService.Create({
            admin_id: `${process.env.ID_ADMIN}`,
            name_team: name_team,
            description: description,
            members: members,
            date: formattedDate,
        });
        res.status(200).send({message: 'Team created'});
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const FindTeam = async (req: Request, res: Response) => {
    try {
        const Team = await TeamService.Find();
        res.status(200).send(Team);
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const FindByIdTeam = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.userid;

        if(!id){
            res.send(404).send({message: 'id null'});
            return;      
        }

        const Team = await TeamService.FindById(id);
        res.status(200).send(Team);
        
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const UpdateTeam = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const data = req.body;

        await TeamService.Update(id, data);
        res.status(200).send({message: 'Team updated'});
        
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const DeleteTeam = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        res.status(200).json(await TeamService.Delete(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

export default {CreateTeam,FindTeam,FindByIdTeam,UpdateTeam,DeleteTeam};