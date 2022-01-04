import { Request,Response } from "express";
import { getManager } from "typeorm";
import { RegistrationValidation } from "../validation/register.validation";

export const Register=(req: Request,res: Response)=>{
    const body=req.body;
    const {error}=RegistrationValidation.validate(body);
    if(error){
        return res.status(400).send(error.details);
    }
    if(body.password !== body.password_confirm){
        return res.status(400).send("password do not match");
    }

    const repository=getManager().getRepository
    
res.send(req.body);
}