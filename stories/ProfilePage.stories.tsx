import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "@/components/profile-page";

const meta: Meta<typeof ProfilePage> = {
  title: "Components/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The user profile page component with full-screen layout and no margins.",
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
    onLanguageToggle: {
      action: "language-toggled",
    },
    onBack: {
      action: "back",
    },
    onLogout: {
      action: "logout",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: "1",
      name: "Frank",
      phone: "+852 6356 3334",
      isAuthenticated: true,
    },
    language: "en",
  },
};



export const NoUser: Story = {
  args: {
    user: null,
    language: "en",
  },
}; 