import { Controls, Primary, Stories, Title } from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import "../src/index.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Stories />
          <h1>Custom Controls</h1>
          <Primary />
          <Controls />
        </>
      ),
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),

    (Story) => (
      <div className="flex justify-center h-full w-full p-6 dark:bg-slate-900">
        <Story />
      </div>
    ),
  ],
};

export default preview;
