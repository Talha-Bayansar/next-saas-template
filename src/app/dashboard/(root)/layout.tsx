import { Header } from "@/components/layout/header";
import { HistoryItem } from "@/components/layout/history";
import { Main } from "@/components/layout/main";

type Props = {
  children: React.ReactNode;
};

const DashboardRootLayout = ({ children }: Props) => {
  const history: HistoryItem[] = [
    {
      label: "Dashboard",
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
