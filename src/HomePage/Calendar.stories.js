import React from "react";
import { Story } from "@storybook/react";
import Calendar from "./Calendar"; // Import your Calendar component

export default {
  component: Calendar,
  title: "Calendar",
};

const Template: Story = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
