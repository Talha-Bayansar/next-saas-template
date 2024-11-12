"use server";

import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { requireAuth } from "@/features/auth/api";
import { HistoryItem } from "@/components/layout/history";
import { routes } from "@/lib/routes";
import { MySubscription } from "./_components/my-subscription";

const DashboardSettingsPage = async () => {
  const user = await requireAuth();

  const history: HistoryItem[] = [
    {
      label: "Dashboard",
      href: routes.dashboard.root,
    },
    {
      label: "Settings",
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
