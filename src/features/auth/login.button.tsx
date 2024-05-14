"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { useTransition } from "react";

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() => {
        startTransition(() => signIn());
      }}
      variant="ghost"
      size="sm"
      className="text-primary dark:text-primary-foreground hover:bg-primary hover:text-background  font-semibold"
    >
      {isPending ? (
        <Loader className="mr-2 h-4 w-4 max-md:sr-only text-primary" />
      ) : (
        <LogIn className="mr-2 h-4 w-4 max-md:sr-only text-primary" />
      )}
      <span className="max-md:sr-only text-base">Connexion</span>
    </Button>
  );
};
