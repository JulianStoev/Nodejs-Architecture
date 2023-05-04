import { dbQuery } from "../lib/db.lib";

export function getHomeDb(): Promise<any> {
    return dbQuery(``);
}