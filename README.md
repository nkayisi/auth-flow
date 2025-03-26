# AuthFlow

A modern Next.js template that streamlines authentication and user profile management with multiple providers (GitHub, Keycloak, etc.). Built with TypeScript and Tailwind CSS, it offers a secure, scalable, and customizable foundation for web applications requiring robust user authentication.

## Project Structure

```
📂 auth-flow/                             # Project root directory
│── 📂 src/                               # Main source code
│   ├── 📂 app/                           # Pages and routes (Next.js App Router)
│   │   ├── 📂 api/                       # API routes (authentication, and other server-side routes of Next.js)
│   │   │   └── 📂 auth/                  # Authentication routes
│   │   ├── 📄 page.tsx                   # Main page (landing page or project home page)
│   │   ├── 📄 layout.tsx                 # Global layout
│   │   ├── 📄 global.css                 # Global styles
│   │   ├── 📂 components/                # Reusable components
│   │   │   ├── 📂 modals/                # Dialog components (for all modals in the project)
│   │   │   ├── 📂 ui/                    # Components from the UI library
│   │   │   │   └── 📂 custom/            # Custom UI components
│   │   │   └── 📂 wrappers/              # Encapsulation components (auth, providers)
│   │   │       ├── 📂 auth/              # Authentication wrapper components
│   │   │       └── 📂 providers/         # Provider wrapper components
│   │   ├── 📂 lib/                       # Certaines Logique métier
│   │   │   ├── 📂 actions/               # Server actions
│   │   │   │   └── 📄 auth-actions.ts    # Server actions for authentication
│   │   │   └── 📂 utils/                 # Utility functions
│   │   └── 📄 auth.ts                    # Authentication configuration file
│── 📂 public/                            # Static files (SVG, images)
│── 📄 .env.local.template                # Template for environment variables
│── 📄 next.config.ts                     # Next.js configuration
│── 📄 package.json                       # Dependencies and scripts
│── 📄 tailwind.config.ts                 # Tailwind CSS configuration
└── 📄 tsconfig.json                      # TypeScript configuration
```


## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Contributing

You can check out [the AuthFlow GitHub repository](https://github.com/nkayisi/auth-flow) - your feedback and contributions are welcome!

## License

[MIT](https://choosealicense.com/licenses/mit/)
