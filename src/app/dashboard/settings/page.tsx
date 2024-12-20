"use server";

import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { requireAuth } from "@/features/auth/api";
import { HistoryItem } from "@/components/layout/history";
import { routes } from "@/lib/routes";
import { MySubscription } from "./_components/my-subscription";
import { getTranslations } from "next-intl/server";

const DashboardSettingsPage = async () => {
  const user = await requireAuth();
  const t = await getTranslations();

  const history: HistoryItem[] = [
    {
      label: t("dashboard"),
      href: routes.dashboard.root,
    },
    {
      label: t("settings"),
    },
  ];

  return (
    <Main className="flex-grow">
      <Header items={history} />
      <MySubscription user={user} />
    </Main>
  );
};

export default DashboardSettingsPage;
