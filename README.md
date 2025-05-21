# Movie App Test Automation

This project contains automated tests for the Movie App using Playwright with TypeScript.

## Project Structure

```
├── tests/
│   ├── pages/      # Page Object Models
│   ├── utils/      # Helper functions and utilities
│   ├── fixtures/   # Test fixtures and setup
│   ├── data/       # Test data and constants
│   └── specs/      # Test specifications
├── playwright.config.ts
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm test
```

- Run tests in a specific browser:
```bash
npm test -- --project=chromium
```

- Run tests in debug mode:
```bash
npm test -- --debug
```

## Page Object Model

The project follows the Page Object Model pattern where:
- `pages/`: Contains page classes that represent different pages in the application
- `utils/`: Contains helper functions and common utilities
- `fixtures/`: Contains test fixtures and setup code
- `data/`: Contains test data and constants
- `specs/`: Contains the actual test files

## Best Practices

1. Use Page Object Model for better maintainability
2. Keep tests independent and isolated
3. Use meaningful names for test cases
4. Maintain test data separately
5. Use fixtures for common setup
6. Follow AAA pattern (Arrange, Act, Assert)
