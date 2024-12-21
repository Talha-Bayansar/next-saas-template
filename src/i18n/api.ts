"use server";

import { safeAction } from "@/lib/safe-action";
import { cookies } from "next/headers";
import { z } from "zod";

export const changeLocale = safeAction
  .schema(
    z.object({
      locale: z.string(),
    })
  )
  .action(async ({ parsedInput: { locale } }) => {
    const cookieStore = await cookies();
    cookieStore.set("locale", locale);
  });
