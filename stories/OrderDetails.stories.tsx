import type { Meta, StoryObj } from "@storybook/react";
import { OrderDetails } from "@/components/order-details";
import { mockOrders } from "@/lib/mock-data";

const meta: Meta<typeof OrderDetails> = {
  title: "Components/OrderDetails",
  component: OrderDetails,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "An order details page that displays comprehensive order information with different statuses and action buttons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    order: {
      control: "object",
    },
    language: {
      control: { type: "select" },
      options: ["en"],
    },
    onBack: {
      action: "back",
    },
    onPayOutstanding: {
      action: "pay-outstanding",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PaidOrder: Story = {
  args: {
    order: mockOrders[0], // Paid order
    language: "en",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the order details for a paid order with blue status indicator and no action button.",
      },
    },
  },
};

export const OutstandingOrder: Story = {
  args: {
    order: mockOrders[2], // Outstanding order
    language: "en",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the order details for an outstanding order with orange status indicator and 'Pay Outstanding Amount' button.",
      },
    },
  },
};

export const CheckingOutOrder: Story = {
  args: {
    order: mockOrders[1], // Checking out order
    language: "en",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the order details for a checking out order with yellow status indicator and processing message.",
      },
    },
  },
};

 