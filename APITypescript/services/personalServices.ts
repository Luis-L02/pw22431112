import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config()

const conexion = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PW
});

async function query(query:string, params: any[] = []) {
    const [rows] = await conexion.execute(query,params)
    return rows
}

export const getPersonal = async ()=>{
    try {
        const rows = await query('SELECT * FROM personal');
        return rows
    } catch (err) {
        return {error:"No se puede obtener el personal"}
    } 
}