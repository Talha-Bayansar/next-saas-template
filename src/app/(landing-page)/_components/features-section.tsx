import Image from "next/image";

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Features Section Title
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              sed quo ipsum quis aspernatur, aperiam qui rem iure amet odio
              mollitia repudiandae nam pariatur alias. Nostrum veritatis
              praesentium nulla fuga?
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="h-[500px] w-[300px] rounded bg-gray-400" />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Feature 1</h3>
                  <p className="text-muted-foreground">Feature 1 description</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Feature 2</h3>
                  <p className="text-muted-foreground">Feature 2 description</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Feature 3</h3>
                  <p className="text-muted-foreground">Feature 3 description</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Feature 4</h3>
                  <p className="text-muted-foreground">Feature 4 description</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
