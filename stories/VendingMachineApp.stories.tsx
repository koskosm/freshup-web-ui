import type { Meta, StoryObj } from "@storybook/react";
import VendingMachineApp from "@/app/page";

const meta: Meta<typeof VendingMachineApp> = {
  title: "Pages/VendingMachineApp",
  component: VendingMachineApp,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The main vending machine application interface with full-screen layout and no margins.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithUserLoggedIn: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "This story shows the vending machine interface with a logged-in user. The user can interact with all features including payment, item detection, and checkout.",
      },
    },
  },
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const TabletView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}; 