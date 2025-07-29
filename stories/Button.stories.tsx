import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "w-full max-w-xs text-white",
    style: { backgroundColor: "#FCBB34" },
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#E6A82D"),
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#FCBB34"),
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button with yellow background (#FCBB34) matching the BottomActionSheet styling.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    className: "w-full max-w-xs text-white",
    style: { backgroundColor: "#B2BBC6" },
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#A0A9B4"),
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#B2BBC6"),
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary button with gray background (#B2BBC6) for alternative actions.",
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    className: "w-full max-w-xs bg-white border-2 border-gray-200 hover:bg-gray-50",
  },
  parameters: {
    docs: {
      description: {
        story: "Outline button with white background and gray border, used for payment selection.",
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
  parameters: {
    docs: {
      description: {
        story: "Destructive button for dangerous actions like delete operations.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
    className: "w-full max-w-xs text-white",
    style: { backgroundColor: "#FCBB34" },
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#E6A82D"),
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#FCBB34"),
  },
  parameters: {
    docs: {
      description: {
        story: "Large primary button with yellow background.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
    className: "w-full max-w-xs text-white",
    style: { backgroundColor: "#FCBB34" },
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#E6A82D"),
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#FCBB34"),
  },
  parameters: {
    docs: {
      description: {
        story: "Small primary button with yellow background.",
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Button with Icon
      </>
    ),
    className: "w-full max-w-xs text-white",
    style: { backgroundColor: "#FCBB34" },
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#E6A82D"),
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#FCBB34"),
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button with icon, similar to the lock icon in BottomActionSheet.",
      },
    },
  },
}; 