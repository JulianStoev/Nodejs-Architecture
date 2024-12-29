import mysql, { escape } from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASS, DB_USER } from '../config/db.config';

let connPool!: mysql.Pool;

export function dbInit(): void {
    connPool = mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
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
