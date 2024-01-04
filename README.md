# Boardgame

This is a React component library for Quibbble games. See [example.jsx](./src/example.jsx) for an example of how to use the provided components. 

## Install Packages

Run:

```
npm install
```

## Start Dev Testing Env

This runs the example [example.jsx](./src/example.jsx) and allows for testing:

```
npm run dev
```

## Create New Release

- Make desired changes.
- Bump [package.json](package.json) `version` field.
- Run `npm i` to update packages.
- Run `npm run build` to build `/dist`.
- Commit changes to `main` branch.
- Create a new release via Github UI.
- Github Actions will build and publish a new version.
- Latest package published to [quibbble/boardgame](https://github.com/quibbble/boardgame/pkgs/npm/boardgame).
