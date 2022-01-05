import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/user.entity";
import { RegistrationValidation } from "../validation/register.validation";
import bcyptjs from 'bcryptjs';

export const Register =  async (req: Request, res: Response)=> {
    const body = req.body;
    const { error } = RegistrationValidation.validate(body);
    if (error) {
        return res.status(400).send(error.details);
    }
    if (body.password !== body.password_confirm) {
        return res.status(400).send("password do not match");
    }

    const repository = getManager().getRepository(User);
  const {password,...user}=  await repository.save({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: await bcyptjs.hash(body.password, 10),
    })

    res.send(user);
}