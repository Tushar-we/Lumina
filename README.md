# Lumina - Premium E-Commerce Platform

![Lumina Showcase](https://via.placeholder.com/1200x600?text=Lumina+E-Commerce+Showcase)

Lumina is a modern, responsive, and visually stunning e-commerce frontend built to demonstrate best-in-class React practices, state management, and premium UI design.

## ✨ Features

- **Premium UI/UX:** Built with Tailwind CSS utilizing glassmorphism, soft gradients, and modern typography.
- **Fluid Animations:** Page transitions, micro-interactions, and component animations using Framer Motion.
- **Product Integration:** Live data fetching from FakeStore API.
- **Advanced State Management:** Fully functional Cart, Wishlist, and Authentication simulation using React Context API and LocalStorage.
- **Dark/Light Mode:** Full theme switching support with persistent preference.
- **Fully Responsive:** Mobile-first approach ensuring a perfect experience across all devices.
- **Search & Filter:** Dynamic product searching and categorization.
- **External Integration:** Direct product link to Amazon search for simulated purchasing.

## 🛠️ Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Icons:** React Icons
- **Notifications:** React Toastify
- **State Persistence:** LocalStorage API

## 🔑 Demo Credentials

To test the protected routes (Profile/Checkout flow), use the following demo credentials on the `/auth` page:

- **Email:** `test@user.com`
- **Password:** `123456`

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd E-Commerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Deployment

The project is fully configured for zero-config deployments on major platforms.

### Build Command
To generate a production build locally:
```bash
npm run build
```
This will create a `dist` directory with the optimized production assets.

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click "New Project".
3. Import your GitHub repository.
4. Vercel will automatically detect the Vite preset.
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Deploying to Netlify

1. Push your code to a GitHub repository.
2. Log into [Netlify](https://www.netlify.com/) and click "Add new site" -> "Import an existing project".
3. Connect your GitHub account and select the repository.
4. Set the build settings:
   - Base directory: `/`
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x450?text=Home+Page+Screenshot)

### Products List
![Products List](https://via.placeholder.com/800x450?text=Products+List+Screenshot)

### Product Detail & Cart
![Product Detail](https://via.placeholder.com/800x450?text=Product+Detail+Screenshot)

---
*Built with ❤️ for a modern web experience.*
