import { getHomeDb } from "../models/home.model"

export function getHome(): Promise<any> {
  return getHomeDb();
}