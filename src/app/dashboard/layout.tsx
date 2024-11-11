import { PageContainer } from "@/components/layout/page-container";
import { requireAuth } from "@/features/auth/api";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard to manage app.",
};

const DashboardLayout = async ({ children }: Props) => {
  await requireAuth();

  return (
    <PageContainer className="flex flex-col flex-grow">
      {children}
    </PageContainer>
  );
};

export default DashboardLayout;
