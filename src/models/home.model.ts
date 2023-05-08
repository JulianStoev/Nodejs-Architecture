import { dbQuery } from "../lib/db.lib";

export function getHomeDb(): Promise<any> {
    return dbQuery(`SELECT page_content FROM pages WHERE page_name = ? LIMIT 1`, [ 'home' ]);
}