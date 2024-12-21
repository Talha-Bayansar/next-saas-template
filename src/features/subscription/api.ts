"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { safeAction } from "@/lib/safe-action";
import {
  createCheckoutSession,
  createCustomerPortalSession,
} from "@/lib/stripe";
import { getTranslations } from "next-intl/server";

const checkoutSchema = async () => {
  const t = await getTranslations();

  return z.object({
    priceId: z
      .string({
        required_error: t("validations.required", { field: "Price ID" }),
      })
      .min(1, t("validations.required", { field: "Price ID" })),
  });
};

export const checkoutAction = safeAction
  .schema(checkoutSchema)
  .action(async ({ parsedInput: { priceId } }) => {
    await createCheckoutSession({ priceId });
  });

export const customerPortalAction = safeAction.action(async () => {
  const portalSession = await createCustomerPortalSession();
  redirect(portalSession.url);
});
