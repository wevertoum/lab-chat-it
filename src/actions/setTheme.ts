"use server";

import { cookies } from "next/headers";

export async function setTheme(theme: string) {
  const cookieStore = cookies();
  cookieStore.set("theme", theme, {
    name: "name",
    value: "lee",
    httpOnly: true,
    path: "/",
  });
}
