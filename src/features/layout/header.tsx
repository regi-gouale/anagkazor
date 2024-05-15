import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { ToggleTheme } from "../themes/theme.toggle";
import { UserProfileButton } from "../auth/user.profile.button";
import { LoginButton } from "../auth/login.button";
import { BurgerMenu } from "./burger.menu";

export const AppHeader = async () => {
  const session = await getAuthSession();

  return (
    <header className="border-b border-b-accent fixed top-0 z-20 bg-background w-full">
      <div className="container flex items-center justify-between py-2 max-w-4xl mx-auto gap-1">
        <Link href="/" className="text-primary mr-auto dark:text-primary-foreground">
          <div className="flex flex-row items-end text-2xl font-extrabold font-sans mr-auto">
            Anagkazor
            <div className="text-xs font-normal font-sans dark:text-primary">ICC AuRA</div>
          </div>
        </Link>
        <nav className="flex justify-center gap-4 max-md:sr-only w-full text-primary dark:text-primary-foreground">
          <Link href="/quiz" className="hover:font-bold rounded-md">
            Accéder au questionnaire
          </Link>
          <div>|</div>
          <Link href="/contact" className="hover:font-bold rounded-md">
            Contact
          </Link>
        </nav>
        <div className="flex align-middle">
          <div className="mr-2 max-md:sr-only">
            <ToggleTheme />
          </div>
          <div className="mx-auto my-auto max-md:sr-only">
            {session?.user ? <UserProfileButton /> : <LoginButton />}
          </div>
          <div className="sr-only max-md:not-sr-only">
            <BurgerMenu session={session}/>
          </div>
        </div>
      </div>
    </header>
  );
};
