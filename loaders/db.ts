import { dbInit } from "../lib/db";

export default async () => {
  await dbInit();
}