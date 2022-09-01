import { dbQuery } from "../lib/db";

export function getHomeDb(): Promise<any> {
  return dbQuery(``);
}