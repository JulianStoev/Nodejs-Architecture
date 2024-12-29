import { mysqlQuery } from "../../lib/mysql/mysql.lib";

export function isLoggedDb(token: string): Promise<any> {
    return mysqlQuery(`SELECT user_session FROM users WHERE user_session = ? LIMIT 1`, [token]);
}