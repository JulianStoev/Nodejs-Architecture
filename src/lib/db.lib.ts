import mysql, { escape } from 'mysql2/promise';
import config from '../config';

let connPool!: mysql.Pool;

export async function dbInit() {
    try {
        connPool = mysql.createPool({
            host: config.db.host,
            user: config.db.user,
            password: config.db.pass,
            database: config.db.database,waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    } catch(err) {
        console.log(err);
    }
}

export const dbQuery = async (query: string, values?: any): Promise<any> => {
    try {
        const [ rows ] = await connPool.execute(query, values);
        return rows;
    } catch (err) {
        throw new Error(err as string);
    }
}

export const dbEscape = (data: any): string => escape(data);
