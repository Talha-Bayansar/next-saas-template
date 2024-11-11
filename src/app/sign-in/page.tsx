import { Logo } from "@/components/logo";
import { AuthForm } from "@/features/auth/containers/auth-form";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    email?: string;
    prefill?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Authentication",
  description: `Sign in to ${APP_NAME}`,
};

export default async function SignInPage({ searchParams }: Props) {
  const { email, prefill } = await searchParams;

  return (
    <div className="container mx-auto flex p-4 md:p-0 relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Logo />
          {APP_NAME}
        </div>
      </div>
      <div className="lg:p-8 flex flex-col items-center">
        <div className="items-center flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign into your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to sign into your account
            </p>
          </div>
          <AuthForm email={email} prefill={prefill} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
