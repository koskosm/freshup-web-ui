import type { Meta, StoryObj } from "@storybook/react";
import { CheckoutModal } from "@/components/checkout-modal";

const meta: Meta<typeof CheckoutModal> = {
  title: "Components/CheckoutModal",
  component: CheckoutModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    order: {
      control: "object",
    },
    depositAmount: {
      control: "number",
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    order: {
      id: "1",
      orderNumber: "ORD-2024-001",
      items: [
        {
          id: "1",
          name: "Coca-Cola Zero Sugar",
          price: 12.0,
          quantity: 1,
        },
        {
          id: "2",
          name: "Fanta Grape",
          price: 12.0,
          quantity: 1,
        },
      ],
      total: 24.0,
      createdAt: new Date(),
    },
    depositAmount: 200,
  },
};

export const LargeOrder: Story = {
  args: {
    isOpen: true,
    order: {
      id: "2",
      orderNumber: "ORD-2024-002",
      items: [
        {
          id: "1",
          name: "Coca-Cola Zero Sugar",
          price: 12.0,
          quantity: 2,
        },
        {
          id: "2",
          name: "Fanta Grape",
          price: 12.0,
          quantity: 3,
        },
        {
          id: "3",
          name: "Premium Coffee",
          price: 25.0,
          quantity: 1,
        },
      ],
      total: 85.0,
      createdAt: new Date(),
    },
    depositAmount: 200,
  },
};

export const RefundCase: Story = {
  args: {
    isOpen: true,
    order: {
      id: "3",
      orderNumber: "ORD-2024-003",
      items: [
        {
          id: "1",
          name: "Coca-Cola Zero Sugar",
          price: 12.0,
          quantity: 1,
        },
      ],
      total: 12.0,
      createdAt: new Date(),
    },
    depositAmount: 200,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    order: null,
    depositAmount: 200,
  },
}; 