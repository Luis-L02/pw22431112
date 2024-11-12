import express = require('express');
import { Request , Response } from "express";
import * as PersonalServices from '../services/personalServices';
const router = express.Router();


router.get('/', async(_req:Request , res:Response )=>{
    let personal =  await PersonalServices.getPersonal();
    res.json(personal);
});

router.get('/:id', async(req:Request , res:Response )=>{
    let personal =  await PersonalServices.getPersonalOne(Number(req.params.id));
    res.json(personal);
});

router.post('/', async(req:Request , res:Response )=>{
    try {
        const {nombre,direccion,telefono,estatus} = req.body;
        const nuevoPersonal = await PersonalServices.createPersonal({nombre,direccion,telefono,estatus});
        res.send(nuevoPersonal);

    } catch (e) {
        res.send({error:"No se puede crear el personal"})
    }
});

router.put('/', async(req:Request , res:Response )=>{
    try {
        const {id,nombre,direccion,telefono,estatus} = req.body;
        const modificado = await PersonalServices.updatePersonal({
            id,
            nombre,
            direccion,
            telefono,
            estatus});
        console.log(modificado);

        res.send(modificado);
    } catch (error) {
        res.send({error:"No se puede actualizar el personal"})
    }
});

router.delete('/', async(req:Request , res:Response )=>{
    try {
        const {id} = req.body;
        const eliminado = await PersonalServices.deletePersonal(Number(id));
        res.send(eliminado);
    } catch (error) {
        res.send({error:"No se puede eliminar el personal"})
    }
});

export default router;