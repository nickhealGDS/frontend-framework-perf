"use server";
import { redirect } from "next/navigation";

export async function submitName() {
  // Create a new post
  // ...

  // Redirect to the new post
  redirect("/summary");
}
