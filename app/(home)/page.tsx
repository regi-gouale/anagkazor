import { buttonVariants } from "@/components/ui/button";
import { LoginButton } from "@/src/features/auth/login.button";
import clsx from "clsx";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container flex items-center h-full w-full">
      <div className="w-full flex justify-center">
        <Link
          href="/"
          className={clsx(
            buttonVariants({ variant: "outline" }),
            "hover:bg-primary hover:text-background",
          )}
        >
          Connaître mon profil
        </Link>
      </div>
    </main>
  );
}
