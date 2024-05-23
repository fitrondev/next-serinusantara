"use server";
import { signIn } from "@/auth";

export const login = async (values: any) => {
  await signIn("credentials", values);
};
