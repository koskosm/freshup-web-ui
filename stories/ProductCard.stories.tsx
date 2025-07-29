import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "@/components/product-card";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    product: {
      control: "object",
    },
    onSelect: {
      action: "selected",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: "1",
      name: "Coca Cola",
      price: 3.50,
      image: "/products/cola.jpg",
      category: "Beverages",
    },
  },
};

export const Expensive: Story = {
  args: {
    product: {
      id: "2",
      name: "Premium Coffee",
      price: 8.99,
      image: "/products/coffee.jpg",
      category: "Beverages",
    },
  },
};

export const NoImage: Story = {
  args: {
    product: {
      id: "3",
      name: "Snack Pack",
      price: 2.50,
      image: "",
      category: "Snacks",
    },
  },
}; 