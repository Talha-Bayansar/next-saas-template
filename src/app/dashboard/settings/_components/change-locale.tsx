"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from "@/i18n";
import { changeLocale } from "@/i18n/api";
import { useTranslations } from "next-intl";
import { useAction } from "next-safe-action/hooks";

type Props = {
  locale: string;
};

export const ChangeLocale = ({ locale }: Props) => {
  const t = useTranslations();
  const changeLocaleAction = useAction(changeLocale);

  const getFullLanguage = (locale: string) => {
    switch (locale) {
      case "en":
        return t("en");
      case "nl":
        return t("nl");
      case "fr":
        return t("fr");
      default:
        return t("en");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("language")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={locale}
          onValueChange={(v) => changeLocaleAction.execute({ locale: v })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((language) => (
              <SelectItem key={language} value={language}>
                {getFullLanguage(language)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};
