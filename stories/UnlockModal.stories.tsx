import type { Meta, StoryObj } from "@storybook/react";
import { UnlockModal } from "@/components/unlock-modal";

const meta: Meta<typeof UnlockModal> = {
  title: "Components/UnlockModal",
  component: UnlockModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    stage: {
      control: { type: "select" },
      options: ["unlocking", "calculating", "complete"],
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unlocking: Story = {
  args: {
    isOpen: true,
    stage: "unlocking",
  },
};

export const Calculating: Story = {
  args: {
    isOpen: true,
    stage: "calculating",
  },
};

export const Complete: Story = {
  args: {
    isOpen: true,
    stage: "complete",
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    stage: "unlocking",
  },
}; 