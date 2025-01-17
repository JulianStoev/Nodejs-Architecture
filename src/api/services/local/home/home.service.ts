import { getHomeDb } from "../../../../dal/mysql/home.dal";

export function getHome(): Promise<any> {
    return getHomeDb();
}