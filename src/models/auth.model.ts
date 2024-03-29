import { dbQuery } from "../lib/db.lib";

export function isLoggedDb(token: string): Promise<any> {
    return dbQuery(`SELECT user_session FROM users WHERE user_session = ? LIMIT 1`, [token]);
}