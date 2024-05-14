import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuthSession } from "@/lib/auth";
import { User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DropdownMenuItemLogout } from "./logout.button";

export const UserProfileButton = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" className="text-primary dark:text-primary-foreground dark:border-primary">
          {session?.user.name ?? ""}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-primary dark:text-secondary-foreground">
        <DropdownMenuItem className="flex">
          <Link href="/profile" className="flex mx-auto">
            <User2 className="mr-2 h-4 w-4" />
            Mon profil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex border-t border-accent">
          <DropdownMenuItemLogout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
