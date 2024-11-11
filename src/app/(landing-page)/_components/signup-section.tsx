import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { redirect } from "next/navigation";

export const SignupSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Start using the App Today.
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sign up for our SaaS platform and begin using the app for your
            business.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form
            action={async (formData: FormData) => {
              "use server";
              const email = formData.get("email") as string;
              const searchParams = new URLSearchParams([["prefill", email]]);
              redirect(`${routes.signIn.root}?${searchParams}`);
            }}
            className="flex gap-2"
          >
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Sign In</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Sign in to get started.{" "}
            <Link
              href="#"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
