# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Comes with prettier pre-configured

Eslint has already been configured with eslint-config-prettier to let prettier handle the code formatting you can add or modify your prettier rules in './prettierc'

## Vitest

Added vitest, react-testing-Library and userEvent from testing library for writing react tests.
Used jest-dom to simulate dom tree during testing.

### Getting started

After cloning the repository run `npm install` & then run:
`./setUpProjectName.sh <your-project-name>`.
This will automatically replace the name of the current project `react-template` to whatever project name you provide.
Remember to change the `<title></title>` in **index.html** yourself as it needs to be human readable.
