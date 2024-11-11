"use server";

import { CheckoutButton } from "@/features/subscription/components/checkout-button";
import { getStripePrices, getStripeProducts } from "@/lib/stripe";
import { CheckIcon } from "lucide-react";

type Subscription = {
  title: string;
  description: string;
  price: number;
  features: string[];
  buttonText: string;
  priceId: string;
};

export const PricingSection = async () => {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === "Basic");
  const proPlan = products.find((product) => product.name === "Pro");

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const proPrice = prices.find((price) => price.productId === proPlan?.id);

  const subscriptionPlans: Subscription[] = [
    {
      title: basePlan?.name ?? "Basic",
      description: basePlan?.description ?? "For starters",
      price: basePrice?.unitAmount ?? 10,
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buttonText: "Get started",
      priceId: basePrice?.id ?? "",
    },
    {
      title: proPlan?.name ?? "Pro",
      description: proPlan?.description ?? "For growing businesses",
      price: proPrice?.unitAmount ?? 30,
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buttonText: `Upgrade to ${proPlan?.name ?? "Pro"}`,
      priceId: proPrice?.id ?? "",
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Affordable Pricing for Every Business
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that fits your needs and budget. Get started with
              our free plan or upgrade to a paid plan for more features and
              usage.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl items-stretch gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {subscriptionPlans.map((subscription) => (
            <SubscriptionPlanCard key={subscription.title} {...subscription} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SubscriptionPlanCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  priceId,
}: Subscription) => {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <div className="flex flex-col gap-4 justify-between h-full">
        <div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold capitalize">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold">${price / 100}</p>
            <p className="text-muted-foreground text-sm">per month</p>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index}>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <CheckoutButton priceId={priceId}>{buttonText}</CheckoutButton>
      </div>
    </div>
  );
};
