# FreshUp Vending Machine Web UI Storybook 

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

