import { Resource } from "sst";
import Redis, { Cluster } from "ioredis";
import { v4 as uuidv4 } from "uuid";
import { Session } from ".";

const client =
  process.env.NODE_ENV === "production"
    ? new Cluster(
        [
          {
            host: Resource.SessionStore.host,
            port: Resource.SessionStore.port,
          },
        ],
        {
          redisOptions: {
            tls: { checkServerIdentity: () => undefined },
            username: Resource.SessionStore.username,
            password: Resource.SessionStore.password,
          },
        }
      )
    : new Redis();

export const redis: Session = {
  async create() {
    const sessionId = uuidv4();
    await client.set(sessionId, JSON.stringify({}));
    return sessionId;
  },

  async delete() {},

  async get(sessionId: string) {
    return JSON.parse((await client.get(sessionId)) ?? "{}");
  },

  async update(sessionId: string, data: { [key: string]: string }) {
    await client.set(sessionId, JSON.stringify(data));
    return data;
  },
};
