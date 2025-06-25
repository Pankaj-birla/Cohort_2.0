"use server" /* important to writre bcoz as we calling from the cilent component then it assume that this is also client side rendering*/
import client from "@/db";

export async function signup(email: string, password: string) {
  try {
    await client.user.create({
      data: {
        username: email,
        password: password,
      },
    });
    return true;
  } catch (e) {}
  return false;
}
