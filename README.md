# Smart Academy Project Five

A small e-commerce-style web application built with Next.js. The app displays products from the Fake Store API, supports product details and a client-side shopping cart, and includes demo authentication and informational pages.

## Features

- Browse a featured product catalog on the home page.
- View product details, ratings, descriptions, and prices.
- Add products to the cart.
- Increase, decrease, and remove cart items.
- See total item count and total price.
- Register through the DummyJSON demo API.
- Sign in through the Fake Store demo authentication API.
- View and delete a demo user on the About page through the Swagger Petstore API.
- View contact information loaded from the Fake Store API.
- Responsive page styling with CSS Modules.

## Tech stack

- [Next.js](https://nextjs.org/) 16.3.5 with the App Router
- [React](https://react.dev/) 19
- [Redux Toolkit](https://redux-toolkit.js.org/) and React Redux
- React Hook Form and Yup for registration form handling and validation
- ESLint with the Next.js configuration
- External demo APIs:
  - [Fake Store API](https://fakestoreapi.com/)
  - [DummyJSON](https://dummyjson.com/)
  - [Swagger Petstore](https://petstore.swagger.io/)

## Requirements

- Node.js 18.18 or newer
- npm

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after building |
| `npm run lint` | Run ESLint |

## Routes

| Route | Description |
| --- | --- |
| `/` | Product catalog loaded from Fake Store API |
| `/productDetails/[id]` | Product details, add-to-cart, and demo delete action |
| `/cart` | Current client-side cart and order summary |
| `/login` | Demo sign-in form |
| `/register` | Registration form with Yup validation |
| `/about` | Demo user profile loaded from Swagger Petstore |
| `/contact` | Contact details loaded from Fake Store API |

## Project structure

```text
src/
├── app/
│   ├── (auth)/login/          Demo sign-in page
│   ├── (auth)/register/       Registration page and validation
│   ├── about/                 Demo user profile
│   ├── cart/                  Shopping cart
│   ├── contact/               Contact details
│   ├── productDetails/[id]/   Product details
│   ├── StoreProvider.js       Redux store provider
│   ├── layout.js              Shared layout, navbar, and footer
│   └── page.js                Product catalog
├── components/
│   ├── footer/                Shared footer
│   └── navbar/                Shared navigation and cart badge
└── lib/
    ├── hooks.js               Typed-style Redux hooks for the app
    ├── store.js               Redux store configuration
    └── slices/
        ├── cartSlice.js       Cart items, quantities, and totals
        └── userSlice.js       User state scaffold
```

## Data and authentication notes

This project currently uses public demo APIs directly from the application. It does not have a custom backend, database, environment variables, or persistent cart storage.

- Cart contents are stored in Redux memory and reset when the page is fully reloaded.
- Registration and login are demonstration flows and should not be used with real credentials.
- API availability and product data depend on the external services above.
- The product delete action calls the demo API and returns to the catalog when the API reports success; it is not a persistent application database operation.

## Validation

Run the linter before submitting changes:

```bash
npm run lint
```

Build the application for a production check:

```bash
npm run build
```

