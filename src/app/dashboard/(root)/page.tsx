import { getTranslations } from "next-intl/server";

const DashboardRootPage = async () => {
  const t = await getTranslations();

  return <div>{t("dashboard")}</div>;
};

export default DashboardRootPage;
