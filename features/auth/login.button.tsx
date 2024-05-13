"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React, { useTransition } from "react";

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      onClick={() => {
        startTransition(() => signIn());
      }}
    >
        {isPending ? "Connexion en cours..." : "Se connecter avec Google"}
    </Button>
  );
};
