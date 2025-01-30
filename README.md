# Luxora E-Commerce

A modern e-commerce platform built with Next.js, TypeScript, and MongoDB.

## Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- MongoDB installed and running
- npm or yarn package manager

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
env

DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```


## Installation

1. Clone the repository:
```
bash

git clone <repository-url>
cd my-app
```

2. Install dependencies:

```
bash
npm install
or
yarn install
```


3. Run the development server:
```
bash

npm run dev
or
yarn dev
```



4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- User authentication (Register/Login)
- Product listing with infinite scroll
- Product search functionality
- Wishlist management
- Responsive design
- Server-side rendering
- Dynamic routing

## Tech Stack

- Next.js 14
- TypeScript
- MongoDB
- Tailwind CSS
- DaisyUI
- Redux Toolkit
- JWT Authentication
- Swiper.js
- React Infinite Scroll

## Project Structure

my-app/
├── src/
│ ├── app/ # Next.js app directory
│ ├── components/ # Reusable components
│ ├── db/ # Database models and configuration
│ ├── redux/ # Redux store and slices
│ ├── helper/ # Helper functions
│ └── types/ # TypeScript type definitions
├── public/ # Static files
└── ...config files



## API Routes

- `/api/users/register` - User registration
- `/api/users/login` - User authentication
- `/api/products` - Product listing and search
- `/api/wishlist` - Wishlist management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

