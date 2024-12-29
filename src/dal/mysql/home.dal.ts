import { mysqlQuery } from "../../lib/mysql/mysql.lib";

export function getHomeDb(): Promise<any> {
    return mysqlQuery(`SELECT page_content FROM pages WHERE page_name = ? LIMIT 1`, [ 'home' ]);
}