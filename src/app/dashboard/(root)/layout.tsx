import { Header } from "@/components/layout/header";
import { HistoryItem } from "@/components/layout/history";
import { Main } from "@/components/layout/main";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
};

const DashboardRootLayout = async ({ children }: Props) => {
  const t = await getTranslations();
  const history: HistoryItem[] = [
    {
      label: t("dashboard"),
    },
  ];

  return (
    <Main>
      <Header items={history} />
      {children}
    </Main>
  );
};

export default DashboardRootLayout;
