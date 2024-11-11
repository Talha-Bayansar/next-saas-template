import { PageContainer } from "@/components/layout/page-container";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAuth } from "@/features/auth/api";
import { Metadata } from "next";
import { DashboardSidebar } from "./_components/dashboard-sidebar";
import { Main } from "@/components/layout/main";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard to manage app.",
};

const DashboardLayout = async ({ children }: Props) => {
  const user = await requireAuth();

  return (
    <SidebarProvider>
      <DashboardSidebar user={user} />
      <PageContainer className="flex flex-col flex-grow">
        <Main>
          <SidebarTrigger className="mb-4" />
          {children}
        </Main>
      </PageContainer>
    </SidebarProvider>
  );
};

export default DashboardLayout;
