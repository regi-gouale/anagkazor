"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Eclipse, Home, Menu, MessageCircle, User2 } from "lucide-react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useTransition } from "react";

export const BurgerMenu = ({ session }: { session: Session | null }) => {
  const [isPending, startTransition] = useTransition();
  const {setTheme, theme} = useTheme();
  //   if (!session?.user) {
  //     return null;
  //   }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <Menu className="text-primary hover:bg-primary dark:text-primary-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="items-center space-y-4 text-primary dark:text-secondary-foreground">
          <Link
            href={session?.user ? "/profile" : ""}
            className="grid grid-cols-3 items-center border-b pb-2"
            onClick={() => {
              if (!session?.user) startTransition(() => signIn());
              else return;
            }}
          >
            <User2 className="h-4 w-4 mx-2 col-span-1" />
            {session?.user ? (
              <div className="col-span-2 text-sm">Profil</div>
            ) : (
              <div className="col-span-2 text-sm">Connexion</div>
            )}
          </Link>
          <Link
            href="/contact"
            className="grid grid-cols-3 items-center"
          >
            <MessageCircle className="h-4 w-4 mx-2 col-span-1" />
            <div className="col-span-2 text-sm">Contact</div>
          </Link>

          <Link
            href="/about"
            className="grid grid-cols-3 items-center"
          >
            <Home className="h-4 w-4 mx-2 col-span-1" />
            <div className="col-span-2 text-sm">À propos</div>
          </Link>

          <Link
            href=""
            className="border-t pt-2 grid grid-cols-3 items-center"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            <Eclipse className="h-4 w-4 mx-2 col-span-1" />
            <div className="col-span-2 text-sm">Theme</div>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
