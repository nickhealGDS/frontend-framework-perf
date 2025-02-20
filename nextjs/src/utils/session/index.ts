import { cookies } from "next/headers";
import { redis } from "./redis";

type Store = { [key: string]: string };

export interface Session {
  create: () => Promise<string>;
  delete: (sessionId: string) => Promise<void>;
  get: (sessionId: string) => Promise<Store>;
  update: (sessionId: string, data: Store) => Promise<Store>;
}

const session = redis;

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

export async function getSession(): Promise<Store> {
  const sessionId = await getSessionId();
  return session.get(sessionId);
}

export async function updateSession(data: Store) {
  const sessionId = await getSessionId();
  return session.update(sessionId, data);
}
