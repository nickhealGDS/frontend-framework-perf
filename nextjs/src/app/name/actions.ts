"use server";
import { redirect } from "next/navigation";
import { updateSession } from "@/utils/session";

export async function submitName(formData: FormData) {
  // Store the name in session
  await updateSession({ name: formData.get("name") });

  // Redirect to the summary page
  redirect("/summary");
}
