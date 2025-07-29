import type { Meta, StoryObj } from "@storybook/react";
import { PaymentModal } from "@/components/payment-modal";

const meta: Meta<typeof PaymentModal> = {
  title: "Components/PaymentModal",
  component: PaymentModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    language: {
      control: { type: "select" },
      options: ["en", "zh"],
    },
    amount: {
      control: "number",
    },
    onClose: {
      action: "closed",
    },
    onPaymentComplete: {
      action: "payment-complete",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    language: "en",
    amount: 200,
  },
};

export const Chinese: Story = {
  args: {
    isOpen: true,
    language: "zh",
    amount: 200,
  },
};

export const LargeAmount: Story = {
  args: {
    isOpen: true,
    language: "en",
    amount: 500,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    language: "en",
    amount: 200,
  },
}; 