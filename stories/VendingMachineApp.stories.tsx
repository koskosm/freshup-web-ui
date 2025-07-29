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
        story: "Shows the default state of the vending machine app with no user logged in. Users can click 'Sign up / Login' to start the authentication flow.",
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

export const AfterFridgeScanned: Story = {
  parameters: {
    docs: {
      description: {
        story: "To see this state: 1) Follow steps for LoggedInWithQrScan, 2) Click the QR code icon in the bottom action sheet, 3) The app will show full product list. This demonstrates after a user has scanned a fridge.",
      },
    },
  },
};

export const PaymentFlow: Story = {
  parameters: {
    docs: {
      description: {
        story: "To see this state: 1) Follow steps for AfterFridgeScanned, 2) The payment selection will appear automatically. This demonstrates the payment flow after scanning a fridge.",
      },
    },
  },
}; 