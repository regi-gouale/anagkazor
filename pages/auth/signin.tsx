import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]"
        >
          <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
              <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Connexion</h1>
                  <p className="text-balance text-muted-foreground">
                    Connectez-vous pour accéder à votre compte
                  </p>
                </div>
                <div className="grid gap-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => signIn(provider.id)}
                  >
                    Se connecter avec {provider.name}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) return { redirect: { destination: "/", permanent: false } };
  const providers = await getProviders();

  return { props: { providers: providers ?? [] } };
}
