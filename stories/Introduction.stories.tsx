import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Introduction/Welcome",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>FreshUp Vending Machine Web UI</h1>
      
      <p>
        Welcome to the Storybook for the FreshUp Vending Machine Web UI! This is a modern, 
        interactive vending machine application built with Next.js 15, React 19, and TypeScript.
      </p>

      <h2>🚀 Features</h2>
      <ul>
        <li><strong>User Authentication</strong>: Phone-based login system with user profiles</li>
        <li><strong>Payment Processing</strong>: Integrated payment modal with deposit system</li>
        <li><strong>Smart Item Detection</strong>: AI-powered item detection and recognition</li>
        <li><strong>Multi-language Support</strong>: English and Chinese language support</li>
        <li><strong>Real-time Session Management</strong>: Track vending sessions and user interactions</li>
        <li><strong>Responsive Design</strong>: Modern UI built with Tailwind CSS and Radix UI components</li>
      </ul>

      <h2>🛠️ Tech Stack</h2>
      <ul>
        <li><strong>Framework</strong>: Next.js 15 (App Router)</li>
        <li><strong>Language</strong>: TypeScript</li>
        <li><strong>UI Library</strong>: React 19</li>
        <li><strong>Styling</strong>: Tailwind CSS with custom animations</li>
        <li><strong>UI Components</strong>: Radix UI primitives with shadcn/ui</li>
        <li><strong>Form Handling</strong>: React Hook Form with Zod validation</li>
      </ul>

      <h2>📖 How to Use This Storybook</h2>
      
      <h3>Component Stories</h3>
      <p>Each component has its own story with different states and variations. You can:</p>
      <ul>
        <li><strong>View different states</strong>: See how components look in different scenarios</li>
        <li><strong>Interact with controls</strong>: Use the Controls panel to modify props in real-time</li>
        <li><strong>Test interactions</strong>: Use the Actions panel to see event handlers being called</li>
        <li><strong>View responsive behavior</strong>: Switch between different viewport sizes</li>
      </ul>

      <h3>Page Stories</h3>
      <p>Full-page stories show how components work together in the complete application context.</p>

      <h3>Documentation</h3>
      <p>Each story includes automatic documentation generated from TypeScript types and JSDoc comments.</p>

      <h2>🎯 Development Workflow</h2>
      <ol>
        <li><strong>Component Development</strong>: Create or modify components in the <code>components/</code> directory</li>
        <li><strong>Story Creation</strong>: Add or update stories in the <code>stories/</code> directory</li>
        <li><strong>Testing</strong>: Use Storybook to test component behavior and interactions</li>
        <li><strong>Documentation</strong>: Update stories with better descriptions and examples</li>
      </ol>

      <h2>🔧 Available Scripts</h2>
      <pre>
{`# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook

# Start the main Next.js application
npm run dev`}
      </pre>

      <h2>📁 Project Structure</h2>
      <pre>
{`freshup-web-ui/
├── app/                    # Next.js app router pages
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   └── *.tsx            # Feature-specific components
├── stories/              # Storybook stories
├── lib/                  # Utility functions and types
└── public/               # Static assets`}
      </pre>

      <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.2rem" }}>
        Happy developing! 🎉
      </p>
    </div>
  ),
}; 