import type { Meta, StoryObj } from "@storybook/react";
import VendingMachineApp from "@/app/page";

const meta: Meta<typeof VendingMachineApp> = {
  title: "Pages/VendingMachineApp",
  component: VendingMachineApp,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The main vending machine application page with different states including authentication, QR scanning, and payment flows.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shows the default state of the vending machine app with QR scan state and empty product grid. This is the initial state for all users.",
      },
    },
  },
};

export const LoggedInWithQrScan: Story = {
  parameters: {
    docs: {
      description: {
        story: "To see this state: 1) Click 'Sign up / Login' button, 2) Enter phone number and click 'Next', 3) The app will show QR scan state with empty product grid. This demonstrates when a user is logged in but hasn't scanned a fridge yet.",
      },
    },
  },
};

export const AuthModal: Story = {
  parameters: {
    docs: {
      description: {
        story: "To see this state: 1) Click the QR code icon in the bottom action sheet, 2) Since user is not logged in, the authentication modal will appear. This demonstrates the flow after scanning QR when not logged in.",
      },
    },
  },
};

export const PaymentSelection: Story = {
  parameters: {
    docs: {
      description: {
        story: "To see this state: 1) Follow steps for LoggedInWithQrScan to login, 2) Click the QR code icon, 3) The payment selection will appear. This demonstrates the flow after scanning QR when logged in.",
      },
    },
  },
}; 