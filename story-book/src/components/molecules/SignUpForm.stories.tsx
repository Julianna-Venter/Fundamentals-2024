import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import SignUp from "./SignUpForm";

const meta: Meta<typeof SignUp> = {
  component: SignUp,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SignUpForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText("Email", {
      selector: "input",
    });

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText("Password", {
      selector: "input",
    });

    await userEvent.type(passwordInput, "ExamplePassword", {
      delay: 100,
    });
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole("button", { name: /Submit/i });

    await userEvent.click(submitButton);

    const select: HTMLSelectElement = canvas.getByRole("listbox");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.selectOptions(select, ["PickerAchoo"]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.selectOptions(select, ["WetSquirrel"]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.selectOptions(select, ["Ash"]);

    await userEvent.click(submitButton);

    await expect(
      canvas.queryAllByDisplayValue("example-email@email.com")
    ).toBeTruthy();

    await expect(canvas.queryAllByDisplayValue("ExamplePassword")).toBeTruthy();

    await expect(select.value).toBe("Ash");
  },
};
