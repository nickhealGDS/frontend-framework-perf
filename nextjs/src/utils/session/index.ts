import { cookies } from "next/headers";
import { inmem } from "./inmem";
import { redis } from "./redis";

export interface Session {
  create: () => Promise<string>;
  delete: (sessionId: string) => Promise<void>;
  get: (sessionId: string) => Promise<{}>;
  update: (sessionId: string, data: {}) => Promise<{}>;
}

const sessionImpl = process.env.SESSION_IMPL;

function getSessionImpl() {
  switch (sessionImpl) {
    case "redis":
      return redis;
    case "inmem":
      return inmem;
    default:
      throw new Error(`No session implementation for ${sessionImpl}.`);
  }
}

const session = getSessionImpl();

async function getSessionId() {
  const cookieStore = await cookies();
  const reqSessionId = cookieStore.get("session-id");

  if (!reqSessionId?.value) {
    const sessionId = await session.create();
    cookieStore.set("session-id", sessionId);
    return sessionId;
  }

  return reqSessionId.value;
}

export async function getSession() {
  const sessionId = await getSessionId();
  return session.get(sessionId);
}

export async function updateSession(data: {}) {
  const sessionId = await getSessionId();
  return session.update(sessionId, data);
}
