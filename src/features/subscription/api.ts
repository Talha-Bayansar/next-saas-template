"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { safeAction } from "@/lib/safe-action";
import {
  createCheckoutSession,
  createCustomerPortalSession,
} from "@/lib/stripe";

const checkoutSchema = z.object({
  priceId: z.string().min(1),
});

export const checkoutAction = safeAction
  .schema(checkoutSchema)
  .action(async ({ parsedInput: { priceId } }) => {
    await createCheckoutSession({ priceId });
  });

export const customerPortalAction = safeAction.action(async () => {
  const portalSession = await createCustomerPortalSession();
  redirect(portalSession.url);
});
