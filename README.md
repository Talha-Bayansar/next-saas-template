## Setup

1. First update .example.env file

```bash
# DATABASE
POSTGRES_URL=""

# Email
MY_EMAIL=""
MY_PASSWORD=""

# CONFIG
BASE_URL=""

# STRIPE
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
```

2. Change app name in ./src/lib/constants.ts

```ts
export const APP_NAME = "Next SaaS Template";
```

3. Change the app logo in ./src/components/logo.tsx

```ts
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    ...
  );
};
```

4. Generate all splash screens and app icons for PWA in public folder ./public/

5. Add app icons to the app directory -> ./src/app/

6. Change name and update metadata inside the root layout ./src/app/layout.tsx

```ts
const APP_NAME = "Next SaaS Template";
const APP_DEFAULT_TITLE = "Next SaaS Template";
const APP_TITLE_TEMPLATE = "%s - Next SaaS Template";
const APP_DESCRIPTION = "Official Next SaaS Template";
const AUTHOR_NAME = "Talha Bayansar";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Next", "SaaS", "Template"],
  authors: [
    { name: AUTHOR_NAME },
    {
      name: AUTHOR_NAME,
      url: "https://www.linkedin.com/in/talha-bayansar-17039a19a/",
    },
  ],
  appleWebApp: {
    title: APP_DEFAULT_TITLE,
    startupImage: [...],
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};
```

## Run application

1. Install dependencies:

```bash
# if react version is >19
npm install
# if react version is 19=<
npm install --legacy-peer-deps
```

2. Generate and migrate schema to the database

```bash
npm run db:generate
npm run db:migrate
```

3. Run the development server:

```bash
npm run dev
```
