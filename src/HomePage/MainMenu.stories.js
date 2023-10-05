import React from "react";
import { MainMenu } from "./MainMenu"; // Import the MainMenu component
import { Story } from "@storybook/react";

export default {
  title: "Components/MainMenu", // The title that appears in the Storybook sidebar
  component: MainMenu,
};

// Create a Template that accepts args (props)
const Template = (args) => <MainMenu {...args} />;

// Define your stories with different variations here
export const Default = Template.bind({});
Default.args = {
  // Define default props here if needed
};

// You can add more variations (stories) as needed
// For example, you can create stories with different props to show different states of your component
