import mysql from 'mysql2/promise';
import config from '../config';

let con!: mysql.Connection;

export async function dbInit() {
    con = await mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.pass,
        database: config.db.database
    });
}

export const dbQuery = async (query: string, values?: any): Promise<any> => {
    try {
        const [rows, fields] = await con.execute(query, values);
        return rows;
    } catch (err) {
        return err;
    }
}

export const dbEscape = (data: any): string => con.escape(data);
