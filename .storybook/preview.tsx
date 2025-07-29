import React from "react";
import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // Remove padding for fullscreen stories
      const isFullscreen = context.parameters?.layout === "fullscreen";
      return (
        <div style={{ padding: isFullscreen ? 0 : "2rem" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview; 