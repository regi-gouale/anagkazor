"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";

const mySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  city: z.string().min(1),
});

export type QuizInfoFormValues = z.infer<typeof mySchema>;
type QuizInfoFormProps = {
  handleSubmit: (values: QuizInfoFormValues) => Promise<string>;
};

export const QuizInfoForm = ({ handleSubmit }: QuizInfoFormProps) => {
  const form = useZodForm({
    schema: mySchema,
    defaultValues: { name: "", email: "", city: "" },
  });
  const router = useRouter();

  return (
    <div className="flex items-center max-w-2xl h-full mx-auto">
      <Card className="flex flex-col mx-4">
        <CardHeader className="mb-2">
          <CardTitle className="text-center mb-2 text-2xl uppercase max-lg:text-xl">
            Commencer le questionnaire
          </CardTitle>

          <CardDescription className="text-justify text-sm max-lg:text-xs">
            <div>
              A présent vous allez lire 116 affirmations simples et concrètes
              qui décrivent une série de situations ou d’attitudes
              missionnaires. Vous êtes invité à vous reconnaître personnellement
              ou non dans chacune de ces affirmations, pas en fonction de votre
              passé ou de votre idéal futur, mais de votre expérience actuelle.
              5 réponses vous sont proposées :
            </div>
            <ul className="list-disc list-inside flex w-full justify-between mx-auto my-2 font-semibold max-md:grid max-md:grid-cols-3">
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="justify-center">Tout à fait</div>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="justify-center">Assez bien</div>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="justify-center">Je ne sais pas</div>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="justify-center">Un peu</div>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="justify-center">Pas du tout</div>
              </li>
            </ul>
            <div>
              Lorsque vous aurez achevé le questionnaire, la synthèse de vos
              réponses permettra d’identifier votre profil missionnaire.
              Précision préalable : chacune des affirmations proposées se réfère
              à un style missionnaire et les styles sont parfois fort différents
              dans leur expression, quoique complémentaires au service de la
              mission. Il est donc logique que chacun se reconnaisse tout à fait
              dans des affirmations, un peu dans certaines, pas du tout dans
              d’autres. Chaque description illustre une situation ou un mode
              missionnaire qui existe dans l’Eglise et y a toute sa place ;
              ainsi, en forçant le trait, ce n’est ni un jugement – ou une
              dévalorisation – ni une source d’orgueil – ou un titre de gloire –
              que de s’y reconnaître ou pas ! Que chacun réponde donc à ce
              questionnaire l’esprit serein, librement, en cohérence avec
              lui-même.
            </div>
            <br /> <b className="text-red-500">Attention :</b> Vous aurez 20
            secondes pour répondre à chaque question.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form
            form={form}
            onSubmit={async (values) => {
              const missionaryId = await handleSubmit(values);
              router.push(`/quiz/${missionaryId}`);
              return missionaryId;
            }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <FormLabel>Prénom & Nom</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jean Dupont"
                        className="col-span-2"
                        required
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <div></div>
                    <FormMessage lang="fr" className="col-span-2" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="jdupont@email.com"
                        className="col-span-2"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <div></div>
                    <FormMessage lang="fr" className="col-span-2" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <FormLabel>Ville</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Lyon"
                        className="col-span-2"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <div></div>
                    <FormMessage lang="fr" className="col-span-2" />
                  </div>
                </FormItem>
              )}
            />
            <div className="flex flex-row justify-between mt-8">
              <Button
                variant="outline"
                className="mx-8"
                onClick={() => {
                  router.push("/");
                }}
              >
                Annuler
              </Button>
              <Button
                variant="default"
                className="mx-8"
                // disabled={isLoading}
              >
                Suivant
              </Button>
            </div>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col justify-between mx-auto mt-4 w-full">
          <div className="text-xs text-justify text-slate-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quam
            magnam quos saepe eligendi a architecto reprehenderit iusto in nemo
            consequatur facilis earum, ducimus odio ipsum aut dolor quo!
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
