"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Loader } from "@/components/ui/loader";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React, { useTransition } from "react";

export const DropdownMenuItemLogout = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      onClick={() => {
        startTransition(() => signOut());
      }}
    >
      {isPending ? (
        <Loader className="mr-2" size={4} />
      ) : (
        <LogOut size={4} className="mr-2" />
      )}
      Se déconnecter
    </DropdownMenuItem>
  );
};
