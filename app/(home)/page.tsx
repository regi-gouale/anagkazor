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
        <div className="mx-auto mb-4">
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
        <div className="mx-auto mb-4">
          <h2 className="flex items-center text-base font-semibold text-primary mb-2">
            <LayoutDashboardIcon className="mr-2" />
            Des questions pour dégager mon profil
          </h2>
          <p className="text-sm text-justify">
            Vous êtes invités à répondre à des questions successives dont le
            traitement permet de faire ressortir en temps réel votre « profil »
            à partir de la combinaison de 4 « types » de missionnaire. Des
            fiches détaillées des caractéristiques de vos 2 types missionnaires
            majeurs complètent les résultats. <br className="mt-4" /><b>ATTENTION</b> : répondre à chaque
            question demande de la réflexion et faire tout ce questionnaire
            prend un certain temps ; prévoyez 20 minutes environ.
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
