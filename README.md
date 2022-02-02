# Angular Base Development Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3 and then later upgraded to Angular 13.

# Tailwind

Tailwind is upgraded to v.3 that only uses JIT (Just In Time) build chain. This increases performance a lot and reduces the size of the compiled CSS by only including class declarations for the classes used in the application.

# Development

## VS Code and Debug mode

After installing NPM packages and recommended VS Code extensions you can simply press F5-key to start debug mode. This will allow you to use VS Code as the Chrome debugger and you can put breakpoints and see the console output in VS Code directly.

## Development server

Run `npm run start` for a dev server with real data. Run `npm run start:mock` for a dev server with mocked data. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features

- Angular SPA
- Tailwind JIT
- Prettier
- VS Code prepared with settings & extensions
- Unit Testing with Jasmine & Karma
- i18n localization & translations

### i18n

Achieved trough `@angular/localize`. Check the official (Angular i18 guide)[https://angular.io/guide/i18n] from more information.

We are using JSON files for i18n here, for simplicity. The support was added in Angular 12.0.3 :D

## Creating new components/modules/others

Is highy encouraged to use [Angular CLI](https://angular.io/cli) to create any new compnent.

Angular and all his related packages evolve pretty fast, to use the proper Angular CLI version, is highly recommended to use the local version of the CLI. Using the local version is as simple as adding `npx` in front of the usual Angular CLI commands

```bash
npx ng generate service path/to/the/service
npx ng generate component path/to/the/component
```

If for some reason, using a global `npx` version is preferred, is possilbe to install an specific version **globally** by running the following command:

```
npm install -g @angular/cli@^13.1.1
```

- Double check the version in `package.json` file.

The `npx` command is used to run executables inside the project `node_modules` folder

## Project structure

Short paths for inports are defined in `tsconfig.json`. You should use always _short_ imports to prevent any problem if a path changes in the future.

```json
"paths": {
    "@shared/*": ["app/shared/*"],
    "@authenticated/*": ["app/authenticated/*"],
    "@public/*": ["app/public/*"]
},
```

### `app/shared`

All shared components across the app should be place here. If a service is only used with authenticated users, should NOT be placed here

```typescript
import { LoggerService } from "@shared/services/logger.service";
```

### `app/auth`

Components only used in the authenticated part of the app should live here

### `app/public`

Components only used in the public part of the app should live here
