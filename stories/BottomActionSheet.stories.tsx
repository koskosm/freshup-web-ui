import type { Meta, StoryObj } from "@storybook/react";
import { BottomActionSheet } from "@/components/bottom-action-sheet";

const meta: Meta<typeof BottomActionSheet> = {
  title: "Components/BottomActionSheet",
  component: BottomActionSheet,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The bottom action sheet component that displays the unlock interface with different states based on user authentication.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    user: {
      control: "object",
    },
    language: {
      control: { type: "select" },
      options: ["en"],
    },
    onUnlockDoor: {
      action: "unlock-door",
    },
    onShowAuthModal: {
      action: "show-auth-modal",
    },
    onPaymentComplete: {
      action: "payment-complete",
    },
    onClose: {
      action: "close",
    },
    disabled: {
      control: "boolean",
    },
    showPaymentSelection: {
      control: "boolean",
    },
    showPaymentProcessing: {
      control: "boolean",
    },
    showUnlockProcessing: {
      control: "boolean",
    },
    showCheckout: {
      control: "boolean",
    },
    showQrScan: {
      control: "boolean",
    },
    showError: {
      control: "boolean",
    },
    unlockStage: {
      control: { type: "select" },
      options: ["unlocking", "calculating", "complete"],
    },
    amount: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    user: null,
    language: "en",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the bottom action sheet when user is not logged in, displaying the sign up/login button.",
      },
    },
  },
};



export const LoggedIn: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the bottom action sheet when user is logged in, displaying the pay and unlock button.",
      },
    },
  },
};



export const Disabled: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the bottom action sheet in disabled state, typically when other modals are open.",
      },
    },
  },
};

export const PaymentSelection: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showPaymentSelection: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the payment method selection screen with multiple payment options.",
      },
    },
  },
};



export const PaymentProcessing: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showPaymentProcessing: true,
    amount: 200,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the payment processing screen with loading animation.",
      },
    },
  },
};


export const UnlockProcessing: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showUnlockProcessing: true,
    unlockStage: "unlocking",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the unlock processing screen with door unlocking animation.",
      },
    },
  },
};


export const UnlockCalculating: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showUnlockProcessing: true,
    unlockStage: "calculating",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the unlock processing screen during payment calculation.",
      },
    },
  },
};


export const UnlockComplete: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showUnlockProcessing: true,
    unlockStage: "complete",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the unlock processing screen when payment is complete.",
      },
    },
  },
};


export const Checkout: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showCheckout: true,
    amount: 200,
    order: {
      id: "1",
      items: [
        { id: "1", name: "Coca Cola", price: 8.5, quantity: 2 },
        { id: "2", name: "Pepsi", price: 8.0, quantity: 1 },
      ],
      total: 25.0,
      status: "completed",
      orderNumber: "1249001",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the checkout screen with purchased items and payment summary.",
      },
    },
  },
};


export const QrScan: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showQrScan: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the QR scan screen for logged-in users to scan fridge QR codes.",
      },
    },
  },
};


export const Error: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
    showError: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the error state with red circle and X icon when an error occurs.",
      },
    },
  },
};

