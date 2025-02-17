import { v4 as uuidv4 } from "uuid";
import { Session } from ".";

const db: { [key: string]: any } = {};

export const inmem: Session = {
  async create() {
    const id = uuidv4();
    db[id] = {};
    return id;
  },

  async delete(sessionId: string) {
    delete db[sessionId];
  },

  async get(sessionId: string) {
    console.log(db);
    return db[sessionId];
  },

  async update(sessionId: string, data: {}) {
    db[sessionId] = data;
    return db[sessionId];
  },
};
