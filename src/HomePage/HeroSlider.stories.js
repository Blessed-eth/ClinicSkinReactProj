import React from "react";
import { Story } from "@storybook/react";
import HeroSlider from "./HeroSlider"; // Import your HeroSlider component

export default {
  component: HeroSlider,
  title: "HeroSlider",
};

const Template: Story = (args) => <HeroSlider {...args} />;

export const Default = Template.bind({});
