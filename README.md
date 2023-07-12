# **eMobile**

**eMobile** is your trusted one-stop shop for brand new phones. It is built with **React** and **Javascript**.

## **Tech Stack**

- **React**
- **Javascript**
- **Redux Toolkit**
- **React Context**
- **React Query**
- **Axios**
- **React Router**
- **Jest & React Testing Library**
- **Cypress**
- **ESLint & Prettier**
- **Github Actions**

## **Getting started**

To start the project, first you need to **install** the dependencies with npm. Run the following command in the project root:

```
npm install
```

To start the app in **development mode**, run:

```
npm start
```

To start the app in **production mode**, first you need to run the build and then start the website by running the following commands:

```
npm run build

npx serve build
```

## **Running tests**

To run the **test** suite, use the following command:

```
npm test // npm run test:coverage
```

To run e2e tests, run the following command and run all specs on cypress:

```
npm run cypress
```

## **Additional information and comments**

- Developed following **SOLID** and **Clean Code** principles.
- The app has been tested using **Jest** and **React Testing Library**, with a **test coverage up to ~80%**.
- **E2E testing** has been performed with **Cypress**.
- The user will find an **intuitive and responsive user interface** that ensures a **seamless** and **accessible experience**. **Feedback** is given to the user via **loading states** and **error handling**.
- API requests are **cached** for 1 hour so that a new request to an already requested url is only done when the initial request was more than an hour ago.
- The app is a **Single Page Application** so that it dynamically rewrites a current page with new data instead of loading the enitre page.
- The app has been developed using the **adapter pattern**. The components are designed to **contain minimal logic** and **receive data via props or hooks** that **encapsulate the logic**. This approach makes the components **easier to test** since the received props can be easily mocked, and function spies or specific states can be used to test the component behavior. **Refactors** are also easier to perform, as the **components** themselves **do not need to be changed**. Instead, you only need to modify the hook where the logic is encapsulated, giving you **greater confidence** in the **reliability of your tests**.

## **Running linters**

To run ESLint, please run the following command:

```
npm run lint
```
