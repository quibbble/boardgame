# Boardgame

This is a React component library for Quibbble games. See [example.jsx](./src/example.jsx) for an example of how to use the provided components. 

## Install Packages

Run:

```bash
npm install quibbble/boardgame
```

## Start Dev Testing Env

This runs the example [example.jsx](./src/example.jsx) and allows for testing:

```bash
npm run dev
```

### Test with game e.g. carcassonne

1. git clone this and [carcassonne](https://github.com/quibbble/carcassonne)
2. in carcassonne root directory:  
uninstall dependency, and reinstall local dependencie
```bash
npm uninstall @quibbble/boardgame
npm install --save <path/to/local>/boardgame
```
3. when changes are made in the boardgame module you need to run
```bash
npm run build
```
before seeing changes in the browser

## Create New Release

- Make desired changes.
- Bump [package.json](package.json) `version` field.
- Run `npm i` to update packages.
- Run `npm run build` to build `/dist`.
- Commit changes to `main` branch.
- Create a new release via Github UI.
- Github Actions will build and publish a new version.
- Latest package published to [quibbble/boardgame](https://github.com/quibbble/boardgame/pkgs/npm/boardgame).
