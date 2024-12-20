import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User } from "@/db/schema";
import { ManageSubscriptionButton } from "@/features/subscription/components/manage-subscription-button";
import { useTranslations } from "next-intl";

type Props = {
  user: User;
};

export const MySubscription = ({ user }: Props) => {
  const t = useTranslations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("mySubscription")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <p className="font-medium capitalize">
                {t("currentPlan")}: {user.planName || t("free")}
              </p>
              <p className="text-sm text-muted-foreground">
                {user.subscriptionStatus === "active"
                  ? t("billedMonthly")
                  : user.subscriptionStatus === "trialing"
                  ? t("trialPeriod")
                  : t("noActiveSubscription")}
              </p>
            </div>
            <ManageSubscriptionButton />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
