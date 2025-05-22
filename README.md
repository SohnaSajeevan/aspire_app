# Aspire App

A modern card management web application built with Vue 3, TypeScript, and Vuex. This application allows users to manage their debit cards, view transactions, and control card features such as freezing/unfreezing, setting spend limits, and more.

## Features

- **Card Management:** Create, view, and manage debit cards
- **Card Operations:** Freeze/unfreeze cards, set spend limits, and more
- **Transaction History:** View recent transactions
- **Responsive Design:** Works well on desktop and mobile devices

## Tech Stack

- **Frontend Framework:** Vue 3
- **Programming Language:** TypeScript
- **State Management:** Vuex 4
- **Routing:** Vue Router 4
- **Styling:** Bootstrap 5, Bootstrap Icons
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/SohnaSajeevan/aspire_app.git
cd aspire-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit http://localhost:5173

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- `src/assets`: Static assets like images and SVGs
- `src/components`: Reusable Vue components
- `src/icons`: Icon components
- `src/mock`: Mock data for development
- `src/pages`: Vue components that represent pages
- `src/router`: Vue Router configuration
- `src/store`: Vuex store modules
- `src/styles`: Global styles
- `src/types`: TypeScript type definitions
- `src/utils`: Utility functions

## Key Features

### Card Management
Users can view their cards, create new cards, and manage their existing cards. Each card displays its number (masked for security), expiry date, and cardholder name.

### Card Operations
- **Freeze/Unfreeze Card**: Temporarily disable a card
- **Set Spend Limit**: Configure spending limits for better budget control
- **Add to Google Pay**: Add cards to Google Pay for mobile payments
- **Replace Card**: Request a replacement for a damaged or lost card
- **Cancel Card**: Permanently cancel a card

## License

[MIT License](LICENSE)
