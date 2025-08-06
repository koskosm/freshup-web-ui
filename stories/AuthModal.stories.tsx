import type { Meta, StoryObj } from "@storybook/react";
import { AuthModal } from "@/components/auth-modal";

const meta: Meta<typeof AuthModal> = {
  title: "Components/AuthModal",
  component: AuthModal,
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
      options: ["en"],
    },
    onClose: {
      action: "closed",
    },
    onLogin: {
      action: "login",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    language: "en",
  },
};



export const Closed: Story = {
  args: {
    isOpen: false,
    language: "en",
  },
}; 