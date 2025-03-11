# Workflow repo for the CA

## How to run the project

### Prerequisites
Make sure to have [Node.js](https://nodejs.org/) v14 or later installed.

### Installation

Clone the repository:
```bash
git clone https://github.com/nicolaibye/workflow-repo-ca.git
```
Install dependencies:
```bash
npm install
```

### Running tests

npm scripts for unit and e2e tests
```bash
npm run test:unit
```
```bash
npm run test:e2e
```

### Environment values

Make sure to create a .env file with the following values for tests
```bash
TEST_EMAIL=valid-email-address
TEST_PASSWORD=valid-password
```
These can also be found in .env.example

### Dependencies
- Vitest
- Playwright
- ESLint
- Prettier
- Husky
- Tailwind
