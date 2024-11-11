import { Header } from "@/components/layout/header";

type Props = {
  children: React.ReactNode;
};

const DashboardRootLayout = ({ children }: Props) => {
  return (
    <>
      <Header title="Dashboard" />
      {children}
    </>
  );
};

export default DashboardRootLayout;
