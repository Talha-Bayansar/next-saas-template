"use server";

import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { requireAuth } from "@/features/auth/api";
import { HistoryItem } from "@/components/layout/history";
import { MySubscription } from "./_components/my-subscription";
import { getTranslations } from "next-intl/server";
import { ChangeLocale } from "./_components/change-locale";
import { View } from "@/components/layout/view";
import { cookies } from "next/headers";

const DashboardSettingsPage = async () => {
  const user = await requireAuth();
  const t = await getTranslations();
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "en";

  const history: HistoryItem[] = [
    {
      label: t("settings"),
    },
  ];

  return (
    <Main className="flex-grow">
      <Header items={history} />
      <View className="w-full">
        <MySubscription user={user} />
        <ChangeLocale locale={locale} />
      </View>
    </Main>
  );
};

export default DashboardSettingsPage;
