import type { Meta, StoryObj } from "@storybook/react";
import { OrderListing } from "@/components/order-listing";
import { mockOrders } from "@/lib/mock-data";

const meta: Meta<typeof OrderListing> = {
  title: "Components/OrderListing",
  component: OrderListing,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "An order listing page that displays user orders with status indicators and navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orders: {
      control: "object",
    },
    language: {
      control: { type: "select" },
      options: ["en", "zh"],
    },
    onBack: {
      action: "back",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orders: mockOrders,
    language: "en",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the order listing page with multiple orders displaying different statuses (Paid, Checking out, Outstanding).",
      },
    },
  },
};

export const Chinese: Story = {
  args: {
    orders: mockOrders,
    language: "zh",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the order listing page in Chinese language.",
      },
    },
  },
};

export const EmptyOrders: Story = {
  args: {
    orders: [],
    language: "en",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the order listing page with no orders, displaying an empty state.",
      },
    },
  },
};

export const SingleOrder: Story = {
  args: {
    orders: [mockOrders[0]],
    language: "en",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the order listing page with a single order.",
      },
    },
  },
}; 