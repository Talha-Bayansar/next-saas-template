import { cn } from "@/lib/utils";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { History, HistoryItem } from "./history";

type Props = {
  items: HistoryItem[];
  className?: string;
};

export const Header = ({ className, items }: Props) => {
  return (
    <header className={cn("flex shrink-0 items-center gap-2 mb-8", className)}>
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <History items={items} />
    </header>
  );
};
