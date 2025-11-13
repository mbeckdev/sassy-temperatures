# 🌡️ Sassy Temperature Converter

A Next.js application that displays a temperature conversion table with sassy descriptions for different temperatures, perfect for low humidity areas.

## Features

- Temperature conversion from Fahrenheit to Celsius
- Sassy, humorous descriptions for temperatures ranging from -42°F to 242°F
- Responsive table design with search functionality
- Built with Next.js 14, React, TypeScript, and Tailwind CSS

## Temperature Range

The app covers temperatures from **-42°F to 242°F** with amusing descriptions like:
- "Can't walk an entire block without your nose freezing" (for very cold temperatures)
- "Don't need a sweater in the sun" (for pleasant temperatures)
- "It's too hot for a jacket" (for warm temperatures)
- "Even the sun is asking for sunscreen" (for extremely hot temperatures)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout
    page.tsx            # Main page
    globals.css         # Global styles
  components/
    TemperatureTable.tsx # Main table component
  utils/
    temperatureData.ts  # Temperature conversion and sassy descriptions
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ESLint** - Code linting

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
