import express,{ Request , Response } from "express";
import * as PersonalServices from '../services/personalServices';
const router = express.Router();


router.get('/', async(_req:Request , res:Response )=>{
    let personal =  await PersonalServices.getPersonal();
    res.json(personal);
});

export default router;