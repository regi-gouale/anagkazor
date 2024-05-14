import { Button, buttonVariants } from "@/components/ui/button";
import { HomeCarousel } from "@/src/features/layout/home.carousel";
import clsx from "clsx";
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container flex flex-col items-center h-full w-full">
      <div className="w-full flex justify-center mt-8">
        <div className="w-full mx-auto">
          <HomeCarousel />
        </div>
      </div>
      <div className="w-full flex flex-col mt-8 max-md:flex-col-reverse gap-4">
        <div className="mx-auto mb-8">
          <h2 className="flex items-center text-base font-semibold text-primary mb-2">
            <LayoutDashboardIcon className="mr-2" />
            Quelle est ma place dans l&apos;évangélisation ?
          </h2>
          <p className="text-sm text-justify">
            De nombreux baptisés engagés dans la mission se posent la question
            de leur place et appel dans l’évangélisation, et de nombreux
            pasteurs cherchent comment les assister dans ce discernement.
            Découvrir ses propres charismes et ses modes d’expression
            missionnaire permet en effet à chaque baptisé de mieux répondre à
            l’appel du Christ à témoigner de sa foi et annoncer l’Evangile : il
            y répond avec d’autant plus de paix et de joie, qu’il arrive à mieux
            saisir les contours de son profil missionnaire. Ce site Internet
            apporte des réponses aux questions que se posent des baptisés et des
            pasteurs qui s’engagent ou veulent s’engager dans l’évangélisation.
          </p>
        </div>
        <div className="mx-auto">
          <h2 className="flex items-center text-base font-semibold text-primary mb-2">
            <LayoutDashboardIcon className="mr-2" />
            Quelle est ma place dans l&apos;évangélisation ?
          </h2>
          <p className="text-sm text-justify">
            De nombreux baptisés engagés dans la mission se posent la question
            de leur place et appel dans l’évangélisation, et de nombreux
            pasteurs cherchent comment les assister dans ce discernement.
            Découvrir ses propres charismes et ses modes d’expression
            missionnaire permet en effet à chaque baptisé de mieux répondre à
            l’appel du Christ à témoigner de sa foi et annoncer l’Evangile : il
            y répond avec d’autant plus de paix et de joie, qu’il arrive à mieux
            saisir les contours de son profil missionnaire. Ce site Internet
            apporte des réponses aux questions que se posent des baptisés et des
            pasteurs qui s’engagent ou veulent s’engager dans l’évangélisation.
          </p>
        </div>
        <div className="w-full">
          <Link
            href="/quiz"
            className={clsx(buttonVariants({ variant: "default" }), "w-full")}
          >
            Accéder au questionnaire
          </Link>
        </div>
      </div>
    </main>
  );
}
