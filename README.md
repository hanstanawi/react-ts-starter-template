## React + TypeScript Starter Template

React starter template with TypeScript and TailwindCSS to kickstart your frontend project.

### What's inside?

This starter template includes:

- [React](https://react.dev/) - Library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Your safety net when writing JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Utility first CSS
- [pnpm](https://pnpm.io/) - Fast and efficient package manager
- [Vite](https://vitejs.dev/guide/) - Blazingly fast frontend build tool
- [React Router](https://reactrouter.com/en/main) - Client side routing solution for React
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Find & fix problems in the codebase and format code automatically on save
  - [Airbnb Config](https://github.com/airbnb/javascript) - Airbnb style guide
- [Lucide React](https://lucide.dev/) - Beautiful and consistent open-source icons for React
- [Husky](https://typicode.github.io/husky/) - Git hooks tool
  - [Commit Lint](https://commitlint.js.org/#/) - Force devs to follow conventional commit message
  - [Lint Staged](https://github.com/lint-staged/lint-staged) - Format & lint your code before committing, block commit if issues are detected
- [Github Actions](https://docs.github.com/en/actions) - Check, test, and build your code automatically on push and PR
- [Dependabot](https://github.com/dependabot) - Create pull-request to update your dependencies
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Unit test your components

### Getting Started

1. Clone repo:

   Tips: You can use [degit](https://github.com/Rich-Harris/degit) to clone this repo without running `git clone`. [Learn more](https://github.com/Rich-Harris/degit)

   ```bash
   degit hanstanawi/react-ts-starter-template your-app-name
   ```

   or simply use this template on GitHub when creating new repository.

2. Install dependencies:

   Make sure you have [pnpm](https://pnpm.io/) installed. [Learn more](https://pnpm.io/installation) about installing pnpm.

   ```
   pnpm install
   ```

3. Run the development server

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5137](http://localhost:5137) with your browser to see the result.

   You can start editing the page by modifying `App.tsx`. The page auto-updates as you edit the file.

## Switching CSS Frameworks / UI Library

"What if I don't want to use Tailwind?"

You can use another React CSS framework or UI library, like [Chakra UI](https://chakra-ui.com/), by simply removing Tailwind config and its dev dependencies.

1. Remove Tailwind config
   ```bash
   rm -rf tailwind.config.ts postcss.config.js
   ```
2. Remove Tailwind directives on the `src/index.css`

   You need to remove these lines of code

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Uninstall dev dependencies on `package.json`
   ```bash
   pnpm remove tailwindcss postcss prettier-plugin-tailwindcss autoprefixer tailwind-merge clsx
   ```
4. Remove Tailwind `cn` utility function
   ```bash
   rm -rf src/lib/utils.ts
   ```

Now you have removed TailwindCSS config and its dependencies, we can add another UI library or CSS framework, in this example, we are going to use [Chakra UI](https://chakra-ui.com/) a great choice for a simple and good-to-go component library to build React components.

This docs guides you a quick start to setup Chakra UI on this project. To learn more about [Chakra UI](https://chakra-ui.com/) you can visit Chakra UI [documentation](https://chakra-ui.com/docs/components)

1. Install Chakra UI dependencies
   ```bash
   pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion
   ```
2. Setup `Chakra` Provider

   Add `ChakraProvider` at the root of the application. Go to `src` directory and inside `main.tsx`, wrap `ChakraProvider` around `<App />` component

   `src/main.tsx`

   ```tsx
   import './index.css';

   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import { ChakraProvider } from '@chakra-ui/react';
   import { createBrowserRouter, RouterProvider } from 'react-router-dom';

   import AboutPage from '@/pages/about';
   import Homepage from '@/pages/home';
   import NotFoundPage from '@/pages/not-found';

   import App from './App';

   const router = createBrowserRouter([
     {
       path: '/',
       element: <App />,
       errorElement: <NotFoundPage />,
       children: [
         {
           path: '',
           element: <Homepage />,
           index: true,
         },
         {
           path: 'about',
           element: <AboutPage />,
         },
       ],
     },
   ]);

   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
     <React.StrictMode>
       <ChakraProvider>
         <RouterProvider router={router} />
       </ChakraProvider>
     </React.StrictMode>,
   );
   ```

3. You can start using Chakra UI components in the project.

## Icons

This starter template uses Lucide React icons as the default icons library. You can switch to other React icons library such as [React Icons](https://react-icons.github.io/react-icons/) or [FontAwesome Icons](https://fontawesome.com/v5/docs/web/use-with/react)

1. Simply uninstall Lucide
   ```bash
   pnpm remove lucide-react
   ```
2. Install other icon library e.g. [React Icons](https://react-icons.github.io/react-icons/)
   ```bash
   pnpm add react-icons
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Learn React](https://react.dev/learn) - learn about React fundamentals and APIs.
- [Learn TypeScript](https://learntypescript.dev/) - an interactive course to learn TypeScript
- [Learn TailwindCSS](https://tailwindcss.com/) - learn about TailwindCSS and its documentation
- [Learn React with TypeScript](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup) - learn about integrating React with TypeScript
- [Learn Testing Library](https://testing-library.com/docs/queries/about/#priority) - learn about Testing Library core queries
- [React Testing Library tips](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) - tips from Kent C. Dodds about Testing Library
