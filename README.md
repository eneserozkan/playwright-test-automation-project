# 🎭 Playwright TypeScript Automation Framework

This project is a robust, scalable, and modular **Test Automation Framework** built with **TypeScript** and **Playwright**.

It supports both **Web UI (End-to-End)** and **API** testing within a single framework architecture, adhering to industry best practices.

## 🚀 Key Features

* **Page Object Model (POM):** Ensures code reusability, modularity, and easy maintenance.
* **Custom Fixtures:** Implements Dependency Injection to abstract object initialization (`new Page()`) from test files.
* **API Testing:** Handles Backend service testing (GET, POST, PUT) using Playwright's native `APIRequestContext`.
* **Data Driven Testing (DDT):** Executes test scenarios using dynamic data sets imported from JSON files.
* **Visual Regression Testing:** Pixel-perfect UI validation using snapshot comparisons.
* **Dynamic Reporting:** Integrated HTML reporting and Trace Viewer for advanced debugging and failure analysis.
* **CI/CD Integration:** Automated testing pipelines via GitHub Actions.

---

## 📂 Project Structure

```text
├── data/           # Test data files (JSON) for DDT
├── fixtures/       # Custom Test Fixtures (Extending base test)
├── pages/          # Page Object Classes & Methods (POM)
├── tests/
│   ├── api/        # API Tests (ReqRes, JSONPlaceholder)
│   └── e2e/        # E2E Web UI Tests (SauceDemo)
├── playwright.config.ts  # Global Project Configuration
└── package.json    # Dependencies and Scripts

INSTALLATION

# Clone the repository
git clone [https://github.com/eneserozkan/playwright-test-automation-project.git](https://github.com/eneserozkan/playwright-test-automation-project.git)

# Navigate to the project directory
cd playwright-test-automation-project

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

RUNNING TESTS
- Run all tests (UI & API):
    npx playwright test

- Run only UI (End-to-End) tests:
    npx playwright test tests/e2e

- Run only API tests:
    npx playwright test tests/api

- View the HTML Test Report:
    npx playwright show-report