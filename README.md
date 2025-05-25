# EdgeSimPy WEB Backend For Frontend (BFF)

A lightweight GraphQL Backend-For-Frontend (BFF) for the EdgeSimPy web platform, built with Express, Apollo Server, and TypeScript.

## Table of Contents

- [EdgeSimPy WEB BFF](#edgesimpy-web-backend-for-frontend-bff)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Step 1: Prepare your environment](#step-1-prepare-your-environment)
    - [Step 2: Clone this repository](#step-2-clone-this-repository)
    - [Step 3: Install project dependencies](#step-3-install-project-dependencies)
    - [Step 4: Launch the application](#step-4-launch-the-application)
  - [Scripts and Commands](#scripts-and-commands)
    - [Build and Run](#build-and-run)
    - [Development Mode](#development-mode)
  - [Project Folder Structure](#project-folder-structure)
  - [Environment Configuration](#environment-configuration)
  - [Key Dependencies](#key-dependencies)

## Getting Started

### Step 1: Prepare your environment

Ensure your development environment is ready:

- Download and install [Node.js and NPM](https://nodejs.org/en/download/)
- Optionally, install yarn globally. While npm works fine, the docs reference yarn commands.
  
```bash
npm install -g yarn
```

### Step 2: Clone this repository

Clone the repo and open it in your preferred code editor.

```bash
git clone git@github.com:ArielMAJ/EdgeSimPy.WEB.BFF.git

# Navigate into the project folder
cd EdgeSimPy.WEB.BFF
```

Duplicate the `.env.example` file and rename it to `.env`. Fill in the required environment variables—see the [Environment Configuration](#environment-configuration) section for details.

### Step 3: Install project dependencies

Install all necessary packages:

```bash
yarn
```

### Step 4: Launch the application

Start the development server with:

```bash
yarn start:dev
```

> This command runs a local server using `ts-node-dev`, automatically restarting on file changes.
> The server will be accessible at `http://localhost:{{port}}`, where `{{port}}` matches the value in your `.env` file.

## Scripts and Commands

All scripts are defined in `package.json`. Here are the most important ones:

### Build and Run

- **Build Process**:
  - `yarn build`: Compiles TypeScript code into JavaScript in the `build` directory
  - `yarn prebuild`: Automatically runs before building to clean the `build` directory

- **Running the Application**:
  - `yarn start`: Launches the production server
    - This command triggers a sequence: `prestart` → `build` → `prebuild` → 
    server start
    - After building, the server runs at `http://localhost:{{port}}`

### Development Mode

- Use `yarn start:dev` to launch the app with `ts-node-dev`.
- The server will be available at `http://localhost:{{port}}`.

## Project Folder Structure

| Name                               | Description |
| ---------------------------------- | ----------- |
| **src/**                           | Main source code |
| **src/config/**                    | Configuration modules |
| **src/graphql/resolvers/**         | GraphQL resolvers, organized by domain and operation type (mutation/query) |
| **src/graphql/resolvers/*/types/** | GraphQL object and input type definitions |
| **src/utils/**                     | Utility functions and helpers |
| .env.example                       | Sample environment variable file |
| **build/**                         | Compiled output files |

## Environment Configuration

Refer to the `.env.example` file for all required environment variables. Copy it to `.env` and update the values as needed for your setup.

## Key Dependencies

| Dependency                        | Description                       |
| --------------------------------- | --------------------------------- |
| [Express](https://expressjs.com/) | Minimal and flexible Node.js web framework |
| [Apollo Server Express](https://www.apollographql.com/docs/apollo-server/v1/servers/express/) | Apollo Server integration for Express |
| [TypeGraphQL](https://typegraphql.com/) | Modern framework for building GraphQL APIs in Node.js |
| [GraphQL](http://graphql.org/graphql-js/) | Query language for APIs |
| [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) | Watches TypeScript files and restarts the server on changes |
| [dotenv](https://www.npmjs.com/package/dotenv) | Loads environment variables from `.env` into `process.env` |
| [Joi](https://joi.dev/) | Powerful schema validation for JavaScript |
