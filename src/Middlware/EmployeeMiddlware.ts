import dotenv from 'dotenv';
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import EmplyeeService from '../Service/EmplyeeService.js';

dotenv.config();

interface CustomRequest extends Request {
  userid?: string;
  userObject?: object;
}

const EmployeeMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  try {

     const { authorization } = req.headers;

     if (!authorization) {
       res.status(401).send("Unauthorized");
    }

    const parts = authorization!.split(" ");

    if (parts.length !== 2) {
      res.status(401).send("Unauthorized");
    }

    const [schema, token] = parts;
    if (schema !== "Bearer") {
      res.status(401).send("Unauthorized");
    } 

    jwt.verify(token, `${process.env.SECRET_KEY_JWT}`, async (error, decoded) => {
        
      if (error) {
          return res.status(401).send({message: "Token Inválido", error});
        }

        const payload = decoded as JwtPayload;
        const userId = payload?.id;

         if (!userId) {
          return res.status(400).send("Nenhum usuário encontrado");
        } 

         const user = await EmplyeeService.FindById(userId);

         if (!user || !user.id) {
            return res.status(400).send("Nenhum usuário encontrado");
        } 
        
        req.userid = userId;
        req.userObject = user;
        next(); 
      }
    ); 
  } catch (err) {
    res.status(500).send({message: "Falha ao iniciar sessão", err});
  }
};

export default EmployeeMiddleware;