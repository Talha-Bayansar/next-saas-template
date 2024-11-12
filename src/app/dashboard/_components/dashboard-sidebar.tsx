"use client";

import { ChevronUp, Home, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutAlertDialog } from "@/features/auth/components/sign-out-alert-dialog";
import { User } from "@/db/schema";
import { routes } from "@/lib/routes";
import Link from "next/link";

type Props = {
  user: User;
};

const items = [
  {
    title: "Home",
    url: routes.dashboard.root,
    icon: Home,
  },
];

export function DashboardSidebar({ user }: Props) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />{" "}
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {user.email}
                  </span>
                  <ChevronUp className="ml-auto shrink-0" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Link
                    className="w-full"
                    href={routes.dashboard.settings.root}
                  >
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => e.preventDefault()}>
                  <SignOutAlertDialog>
                    <button className="text-left">Sign out</button>
                  </SignOutAlertDialog>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
