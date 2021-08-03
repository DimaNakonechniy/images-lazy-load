# cra-quick-start

## Getting started

Step 1: Clone this repo

```sh
git clone https://github.com/sergei97k/cra-quick-start

cd cra-quick-start
```

Step 2: Install

```sh
yarn install
// or
npm install
```

Step 3: Start

```sh
yarn start
// or
npm run start
```

## List of NPM Scripts

```sh
yarn dev         # build and watch, but javascript not minified
yarn build       # build a minified production version
yarn test        # run test using Jest and Enzyme
yarn test:cover  # run test using Jest and Enzyme with coverage report
yarn eject       # remove the single build dependency from your project
```

## List of used dependencies

- ESLint
- Prettier
- Husky
- Jest
- Enzyme

## Absolute Imports

The presence of **jsconfig.json** file in a directory indicates that the directory is the root of a project.

if you want to import a module located at **src/components/Button.js**, you can import the module like so:

```javascript
import Button from "components/Button";
```

For more information on this configuration file, see the [jsconfig.json reference](https://create-react-app.dev/docs/importing-a-component/#absolute-imports) documentation.

## WebStorm settings

#### ESLint configuration:

1. Open **WebStorm -> Preferences** and find **ESLint**
2. Set option "Automatic ESLint configuration" or "Manual ESLint configuration"

<img src="https://www.dropbox.com/s/e9ojm6cr0f1jzk6/ESLint-ws-config.png?raw=1" alt="ESLint configuration" width="750" />

#### Prettier configuration:

1. Open **WebStorm -> Preferences** and find **Prettier**
2. Select Prettier package

<img src="https://www.dropbox.com/s/dviuxf253qj7edb/Prettier-ws-config.png?raw=1" alt="Prettier configuration" width="750" />
