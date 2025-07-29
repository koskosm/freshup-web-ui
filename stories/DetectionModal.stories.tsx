import type { Meta, StoryObj } from "@storybook/react";
import { DetectionModal } from "@/components/detection-modal";

const meta: Meta<typeof DetectionModal> = {
  title: "Components/DetectionModal",
  component: DetectionModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    onClose: {
      action: "closed",
    },
    onDetectionComplete: {
      action: "detection-complete",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
}; 