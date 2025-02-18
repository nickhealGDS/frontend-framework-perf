import { Resource } from "sst";
import { createClient } from "redis";
import { v4 as uuidv4 } from "uuid";
import { Session } from ".";

const client = await createClient({
  url:
    process.env.NODE_ENV === "development"
      ? "redis://localhost:6379"
      : `redis://${Resource.SessionStore.username}:${Resource.SessionStore.password}@${Resource.SessionStore.host}:${Resource.SessionStore.port}`,
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

export const redis: Session = {
  async create() {
    const sessionId = uuidv4();
    await client.set(sessionId, JSON.stringify({}));
    return sessionId;
  },

  async delete(sessionId: string) {
    // delete db[sessionId];
  },

  async get(sessionId: string) {
    return JSON.parse((await client.get(sessionId)) ?? "{}");
  },

  async update(sessionId: string, data: {}) {
    await client.set(sessionId, JSON.stringify(data));
    return data;
  },
};
