import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { isLastOfArray } from "@/lib/utils";
import { Fragment } from "react";

export type HistoryItem = {
  label: string;
  href?: string;
};

type Props = {
  items: HistoryItem[];
};

export const History = ({ items }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => {
          return (
            <Fragment key={`${item.label}`}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink asChild>
                    <Link href={item.href!}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLastOfArray(i, items) && (
                <BreadcrumbSeparator key={`${item.label}_separator`} />
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
