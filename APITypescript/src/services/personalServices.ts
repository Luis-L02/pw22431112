import { Personal,PersonalNuevo } from './typePersonal';
import * as conexion from '../config/bd';

const conn = conexion.conexion;

export const getPersonalOne = async (id:number)=>{
    try {
        const [results] = await conn.query('SELECT * FROM personal WHERE id = ? LIMIT 1',id);
        return results
    } catch (err) {
        console.log(err);
        return {error:"No se puede obtener el personal"}
    } 
}

export const getPersonal = async ()=>{
    try {
        const [results] = await conn.query('SELECT * FROM personal');
        return results
    } catch (err) {
        console.log(err);
        return {error:"No se puede obtener el personal"}
    } 
}

export const createPersonal = async (nuevo:PersonalNuevo)=>{    
    try {
        const [results] = await conn.query('INSERT INTO personal(nombre,direccion,telefono,estatus) VALUES(?,?,?,?)',[nuevo.nombre,nuevo.direccion,nuevo.telefono,nuevo.estatus]);
        return results
    } catch (err) {
        console.log(err);
        return {error:"No se puede crear el personal"}
    } 
}

export const updatePersonal = async (modificado:Personal)=>{
    try {
        const [results] = await conn.query('UPDATE personal SET nombre = ?, direccion = ?, telefono = ?, estatus = ? WHERE id = ?',[modificado.nombre,modificado.direccion,modificado.telefono,modificado.estatus,modificado.id]);
        return results
    } catch (err) {
        console.log(err);
        return {error:"No se puede actualizar el personal"}
    } 
}

export const deletePersonal = async (id:number)=>{
    try {
        const [results] = await conn.query('DELETE FROM personal WHERE id = ?',[id]);
        return results
    } catch (err) {
        console.log(err);
        return {error:"No se puede eliminar el personal"}
    } 
}