import React from "react";
import { Meta, Story } from "@storybook/react";
import Agendar from "./Agendar"; // Import your Agendar component

export default {
  component: Agendar,
  title: "Agendar",
};

const Template: Story = (args) => <Agendar {...args} />;

export const Default = Template.bind({});
