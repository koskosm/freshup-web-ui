import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "@/components/product-card";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "ProductCard displays product information with a uniform 1:1 square image format (minimum 60x60px). Product images use object-cover for optimal display, while the FreshUp logo fallback uses object-contain to prevent cropping.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    product: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CocaCola: Story = {
  args: {
    product: {
      id: "1",
      name: "Coca-Cola Original",
      price: 12.0,
      image: "/images/products/coca-cola-original.png",
      category: "Beverages",
    },
  },
};

export const CocaColaZero: Story = {
  args: {
    product: {
      id: "2",
      name: "Coca-Cola Zero Sugar",
      price: 12.0,
      image: "/images/products/coca-cola-zero.png",
      category: "Beverages",
    },
  },
};

export const FantaGrape: Story = {
  args: {
    product: {
      id: "3",
      name: "Fanta Grape",
      price: 12.0,
      image: "/images/products/fanta-grape.png",
      category: "Beverages",
    },
  },
};

export const Pepsi: Story = {
  args: {
    product: {
      id: "4",
      name: "Pepsi",
      price: 12.0,
      image: "/images/products/pepsi.png",
      category: "Beverages",
    },
  },
};

export const SchweppesCreamSoda: Story = {
  args: {
    product: {
      id: "5",
      name: "Schweppes Cream Soda",
      price: 12.0,
      image: "/images/products/schweppes-cream-soda.png",
      category: "Beverages",
    },
  },
};

export const H2OWater: Story = {
  args: {
    product: {
      id: "6",
      name: "H2O Water",
      price: 8.0,
      image: "/images/products/h2o-water.png",
      category: "Beverages",
    },
  },
};

export const Aquarius: Story = {
  args: {
    product: {
      id: "9",
      name: "Aquarius",
      price: 10.0,
      image: "/images/products/aquarius.png",
      category: "Beverages",
    },
  },
};

export const SchweppesSodaWater: Story = {
  args: {
    product: {
      id: "6",
      name: "Schweppes Soda Water",
      price: 12.0,
      image: "/images/products/schweppes-soda-water.png",
      category: "Beverages",
    },
  },
};

export const CCLemon: Story = {
  args: {
    product: {
      id: "7",
      name: "CC Lemon",
      price: 12.0,
      image: "/images/products/cc-lemon.png",
      category: "Beverages",
    },
  },
};

export const NoImage: Story = {
  args: {
    product: {
      id: "8",
      name: "Snack Pack",
      price: 2.50,
      image: "",
      category: "Snacks",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "This story shows how the ProductCard looks when no image is provided. It will display the FreshUp logo as a fallback using object-contain to ensure the full logo is visible without cropping.",
      },
    },
  },
};

export const ProductGrid: Story = {
  render: () => {
    const products = [
      {
        id: "1",
        name: "Coca-Cola Original",
        price: 12.0,
        image: "/images/products/coca-cola-original.png",
        category: "Beverages",
      },
      {
        id: "2",
        name: "Coca-Cola Zero Sugar",
        price: 12.0,
        image: "/images/products/coca-cola-zero.png",
        category: "Beverages",
      },
      {
        id: "3",
        name: "Fanta Grape",
        price: 12.0,
        image: "/images/products/fanta-grape.png",
        category: "Beverages",
      },
      {
        id: "4",
        name: "Pepsi",
        price: 12.0,
        image: "/images/products/pepsi.png",
        category: "Beverages",
      },
      {
        id: "5",
        name: "Schweppes Cream Soda",
        price: 12.0,
        image: "/images/products/schweppes-cream-soda.png",
        category: "Beverages",
      },
      {
        id: "6",
        name: "Schweppes Soda Water",
        price: 12.0,
        image: "/images/products/schweppes-soda-water.png",
        category: "Beverages",
      },
      {
        id: "7",
        name: "CC Lemon",
        price: 12.0,
        image: "/images/products/cc-lemon.png",
        category: "Beverages",
      },
      {
        id: "8",
        name: "H2O Water",
        price: 8.0,
        image: "/images/products/h2o-water.png",
        category: "Beverages",
      },
      {
        id: "9",
        name: "Aquarius",
        price: 10.0,
        image: "/images/products/aquarius.png",
        category: "Beverages",
      },
      {
        id: "10",
        name: "Snack Pack",
        price: 2.50,
        image: "",
        category: "Snacks",
      },
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-6xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "This story shows all available products in a grid layout, including the fallback case with no image.",
      },
    },
  },
}; 