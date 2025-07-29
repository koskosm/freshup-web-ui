import type { Meta, StoryObj } from "@storybook/react";
import { HeroCarousel } from "@/components/hero-carousel";

const meta: Meta<typeof HeroCarousel> = {
  title: "Components/HeroCarousel",
  component: HeroCarousel,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A hero carousel component with animated image transitions, navigation arrows, and page indicators.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: "object",
    },
    autoPlayInterval: {
      control: "number",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      {
        src: "/images/hero-drinks-new.png",
        alt: "Fresh tropical beverages on beach"
      },
      {
        src: "/images/hero-drinks.png",
        alt: "Refreshing drinks selection"
      }
    ],
    autoPlayInterval: 4000,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the hero carousel with two images, auto-playing every 4 seconds with navigation arrows and page indicators.",
      },
    },
  },
};

export const SingleImage: Story = {
  args: {
    images: [
      {
        src: "/images/hero-drinks-new.png",
        alt: "Fresh tropical beverages on beach"
      }
    ],
    autoPlayInterval: 4000,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the hero carousel with a single image. Navigation arrows and indicators are hidden when there's only one image.",
      },
    },
  },
};

export const FastAutoPlay: Story = {
  args: {
    images: [
      {
        src: "/images/hero-drinks-new.png",
        alt: "Fresh tropical beverages on beach"
      },
      {
        src: "/images/hero-drinks.png",
        alt: "Refreshing drinks selection"
      }
    ],
    autoPlayInterval: 2000,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the hero carousel with faster auto-play interval (2 seconds) for demonstration purposes.",
      },
    },
  },
};

export const NoAutoPlay: Story = {
  args: {
    images: [
      {
        src: "/images/hero-drinks-new.png",
        alt: "Fresh tropical beverages on beach"
      },
      {
        src: "/images/hero-drinks.png",
        alt: "Refreshing drinks selection"
      }
    ],
    autoPlayInterval: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the hero carousel without auto-play. Users can navigate manually using arrows or indicators.",
      },
    },
  },
}; 