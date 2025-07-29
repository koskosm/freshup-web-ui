import type { Meta, StoryObj } from "@storybook/react";
import { ProductsGrid } from "@/components/products-grid";
import { mockProducts } from "@/lib/mock-data";

const meta: Meta<typeof ProductsGrid> = {
  title: "Components/ProductsGrid",
  component: ProductsGrid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A grid component that displays products with an empty state when no products are available.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    products: {
      control: "object",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithProducts: Story = {
  args: {
    products: mockProducts,
    className: "",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the products grid with multiple products displayed in a responsive grid layout.",
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    products: [],
    className: "",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the empty state when no products are available, displaying an empty state image and message.",
      },
    },
  },
};

export const SingleProduct: Story = {
  args: {
    products: [mockProducts[0]],
    className: "",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the products grid with a single product.",
      },
    },
  },
};

export const FewProducts: Story = {
  args: {
    products: mockProducts.slice(0, 3),
    className: "",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the products grid with a few products to demonstrate the grid layout.",
      },
    },
  },
}; 