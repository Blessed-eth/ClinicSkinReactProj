import React from "react";
import { Story } from "@storybook/react";
import Eyebrows from "./Eyebrows"; // Import your Eyebrows component

export default {
  component: Eyebrows,
  title: "Eyebrows",
};

const Template: Story = (args) => <Eyebrows {...args} />;

export const Default = Template.bind({});
