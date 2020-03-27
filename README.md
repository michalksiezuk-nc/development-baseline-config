# Development tools and baseline configuration

Having solid development tool chain and practices enables teams to deliver coherent, high quality code. This repository aims to gather information about developer tools for various languages and workflows, and provide well reviewed configuration baselines.

## Contents

* Development
  * JavaScript
    * Linter and style guide
    * TypeScript
    * Build tools
    * Documentation tools
    * Best practices
  * CSS
  * EditorConfig
  * Git
    * Hooks
    * Commit conventions
    * Semantic release
* Testing
* Other tools
  * Architecture Decision Records
* Interesting reads

## Development

### JavaScript

#### Linter and style guide

ESlint configuration provided in this repository is extended by Airbnb style guide base configuration, TypeScript support and few custom rules.

* Integrations (editors, build tools, CLI) https://eslint.org/docs/user-guide/integrations
* Airbnb JavaScript style guide https://github.com/airbnb/javascript
* Typescript support https://github.com/typescript-eslint/typescript-eslint
* Prettier integration https://prettier.io/docs/en/integrating-with-linters.html

#### TypeScript

* Integration (editors, build tools) https://www.typescriptlang.org/docs/home.html
* TSlint is now replaced by ESlint

#### Build tools

* Bundlers
  * Webpack (most common) https://webpack.js.org/
  * Rollup (best bundle size results) https://rollupjs.org/guide/en/
  * Parcel (zero-configuration development server) https://parceljs.org/
* Bundle analyzers
  * Webpack https://github.com/webpack-contrib/webpack-bundle-analyzer
  * Rollup https://www.npmjs.com/package/rollup-plugin-visualizer
  * Parcel https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser

#### Documentation tools

* JSDoc https://jsdoc.app/
* TSDoc https://github.com/microsoft/tsdoc
* React Styleguidist https://react-styleguidist.js.org/
* Docz https://www.docz.site/
* GitHub Pages https://pages.github.com/

#### Best practices

* node.js best practices https://github.com/goldbergyoni/nodebestpractices

### CSS

* PostCSS https://postcss.org/
* postcss-preset-env https://preset-env.cssdb.org/
* stylelint https://stylelint.io/

### EditorConfig

EditorConfig helps maintain consistent coding styles across various editors and IDEs.

More information:

* EditorConfig integration https://editorconfig.org/#download

### Git

#### Hooks

* Lefthook https://github.com/Arkweid/lefthook
* Husky https://github.com/typicode/husky
* lint-staged https://github.com/okonet/lint-staged

#### Commit conventions

* Conventional Commits https://www.conventionalcommits.org/
* Commitizen http://commitizen.github.io/cz-cli/

#### Semantic versioning

* Semantic Versioning https://semver.org/
* semantic-release https://semantic-release.gitbook.io/semantic-release/
* Standard Version https://github.com/conventional-changelog/standard-version

## Testing
* Jest https://jestjs.io/
* Cypress https://www.cypress.io/
* Testing Library https://testing-library.com/

## Other tools
### Architecture Decision Records

* ADR Homepage https://adr.github.io/
* Documenting Architecture Decisions http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions

## Interesting reads

* ThoughtWorks Technology Radar https://www.thoughtworks.com/radar
* State of JS https://2019.stateofjs.com/
