# Blockhouse Trial Task

## Table of Contents

- [About the Project](#about-the-project)
- [Project Setup](#project-setup)
  - [Dependencies](#dependencies)
  - [Available Scripts](#available-scripts)
  - [Running the App Locally](#running-the-app-locally)
- [CI/CD Setup](#cicd-setup)
  - [Tools Used](#tools-used)
  - [Pipeline Workflow](#pipeline-workflow)
  - [Build Triggers](#build-triggers)
  - [Configuration Files](#configuration-files)
  - [Environment Variables](#environment-variables)
  - [Steps to Set Up CI/CD Locally](#steps-to-set-up-cicd-locally)
- [License](#license)

---

## About the Project

This project is a mobile application built using **Expo**, **React Native**, and **TypeScript**. It incorporates modern development practices and provides essential mobile app functionality.

---

## Project Setup

To set up the project locally, follow these steps:

1. **Ensure you have Node.js and npm (or yarn) installed on your system**
2. **Clone the Repository:**
   - Clone this repository locally:
     ```bash
     git clone https://github.com/rmatos1/blockhouse-trial-task.git
     ```
3. **Navigate to Project Folder:**
   - Open a terminal and navigate to the project directory:
     ```bash
     cd blockhouse-trial-task
     ```
4. **Install Dependencies:**
   - Install all project dependencies:
     ```bash
     npm install
     ```
   - Or using yarn
     ```bash
     yarn install
     ```

---

### Dependencies

This project relies on the following packages:

- [@hookform/resolver](https://www.npmjs.com/package/@hookform/resolvers)
- [@react-navigation](https://reactnavigation.org/)
- [expo](https://expo.dev/)
- [react, react-dom, react-native](https://reactnative.dev/)
- [react-hook-form](https://react-hook-form.com/)
- [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)
- [react-native-svg](https://www.npmjs.com/package/react-native-svg)
- [styled-components](https://styled-components.com/)
- [zod](https://www.npmjs.com/package/zod)

---

### Available Scripts

- **start**: Starts the app in an emulator or connected device.
- **android**, **ios**, **web**: Starts the app for the specific platform (Android, iOS, or Web).
- **test**: Runs tests using Jest.
- **lint**: Runs lint checks on the code.

---

### Running the App Locally

1. **Make sure you have an emulator set up or a physical device connected.**
2. **Start the app using the command:**
   ```bash
   npm start
   ```

- Or using yarn:
  ```bash
  yarn start
  ```

3. **Follow the instructions in the terminal to open the app on the emulator or device.**

---

## CI/CD Setup

This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). The pipeline is configured to automatically run linting, testing, and build processes whenever changes are pushed to the master branch.

---

### Tools Used

- **GitHub Actions**: For automating the CI/CD pipeline. [Learn more](https://docs.github.com/en/actions)

- **Expo EAS Build**: For building the Android and iOS apps. [Learn more](https://docs.expo.dev/build/introduction/)

- **Jest**: For running unit tests.

- **ESLint**: For linting the codebase.

---

### Pipeline Workflow

The pipeline consists of the following jobs:

1. **Lint and Test**:

   - Runs linting and unit tests to ensure code quality.

2. **Build Android**:

- Builds the Android app using Expo EAS Build.

3. **Build iOS**:

- Builds the iOS app using Expo EAS Build.

---

### Build Triggers

The pipeline is triggered on:

- **Push to master branch**: Automatically runs the entire pipeline (lint, test, and build).

---

### Configuration Files

- **[.github/workflows/build.yml](https://github.com/rmatos1/blockhouse-trial-task/blob/master/.github/workflows/build.yml)**: Defines the GitHub Actions workflow.

- **eas.json**: Configures the Expo EAS Build settings.

- **app.json**: Contains app-specific configuration (e.g., Android package name, iOS bundle identifier).

---

### Environment Variables

The following environment variables are required for the pipeline to work:

- **EXPO_TOKEN**: An Expo access token for authenticating with Expo EAS Build.

---

### Steps to Set Up CI/CD Locally

1. **Generate an Expo Access Token**:

- Log in to your Expo account and generate a token from the [Expo dashboard](https://expo.dev/settings/access-tokens).

2. **Add the Token to GitHub Secrets**:

- Go to your GitHub repository settings.

- Navigate to Secrets and variables > Actions.

- Add a new secret named EXPO_TOKEN with the value of your Expo access token.

3. **Push Changes to Trigger the Pipeline**:

- Push changes to the master branch to trigger the CI/CD pipeline.

---

## License

This project is licensed under the [MIT License](LICENSE).
