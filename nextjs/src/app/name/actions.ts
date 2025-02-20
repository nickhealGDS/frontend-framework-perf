"use server";
import { redirect } from "next/navigation";
import { updateSession } from "@/utils/session";

export async function submitName(formData: FormData) {
  // Store the name in session
  const name = formData.get("name");
  if (typeof name === "string") {
    await updateSession({ name });
  }

  // Redirect to the summary page
  redirect("/summary");
}
