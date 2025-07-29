# FreshUp Vending Machine Web UI

A modern, interactive vending machine web application built with Next.js 15, React 19, and TypeScript. This application simulates a smart vending machine experience with authentication, payment processing, item detection, and user management features.

## 🚀 Features

- **User Authentication**: Phone-based login system with user profiles
- **Payment Processing**: Integrated payment modal with deposit system
- **Smart Item Detection**: AI-powered item detection and recognition
- **Multi-language Support**: English and Chinese language support
- **Real-time Session Management**: Track vending sessions and user interactions
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components
- **Theme Support**: Dark/light mode with next-themes
- **Form Validation**: React Hook Form with Zod schema validation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Package Manager**: pnpm

## 📦 Key Dependencies

- **UI Components**: Complete Radix UI component library
- **Form Management**: React Hook Form with @hookform/resolvers
- **Date Handling**: date-fns and react-day-picker
- **Carousel**: Embla Carousel React
- **Notifications**: Sonner toast notifications
- **Charts**: Recharts for data visualization
- **Animations**: tailwindcss-animate

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/freshup-web-ui.git
   cd freshup-web-ui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
freshup-web-ui/
├── app/                    # Next.js app router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main vending machine interface
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── auth-modal.tsx    # Authentication modal
│   ├── payment-modal.tsx # Payment processing modal
│   ├── detection-modal.tsx # Item detection interface
│   ├── checkout-modal.tsx # Checkout process
│   ├── unlock-modal.tsx  # Door unlock interface
│   ├── product-card.tsx  # Product display component
│   └── profile-page.tsx  # User profile management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and types
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🎯 Core Features

### Authentication System
- Phone number-based login
- User session management
- Profile management with order history

### Payment Processing
- Deposit-based payment system (¥200 deposit)
- Multiple payment method support
- Transaction tracking

### Smart Vending Experience
- Door unlock simulation
- Item detection and recognition
- Real-time session tracking
- Automatic checkout calculation

### Multi-language Support
- English and Chinese interfaces
- Dynamic language switching
- Localized content and messaging

## 🧪 Development

### Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

### Environment Variables

Create a `.env.local` file in the root directory for any environment-specific configurations.

## 🎨 UI/UX Features

- **Modern Design**: Clean, intuitive interface with smooth animations
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Built with Radix UI primitives for excellent accessibility
- **Theme Support**: Automatic dark/light mode detection
- **Loading States**: Smooth loading animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ using Next.js, React, and TypeScript 