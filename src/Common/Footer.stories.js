import React from "react";
import { Footer } from "./Footer"; // Import your Footer component

// This default export is required for Storybook
export default {
  title: "Footer", // The title of your component category in Storybook
  component: Footer, // The component you want to showcase
};

// Define a template for your component's story
const Template = (args) => <Footer {...args} />;

// Now, create individual stories based on different scenarios or variations
export const Default = Template.bind({});
Default.args = {};

// You can create more stories with different props or scenarios as needed
export const WithSocialMedia = Template.bind({});
WithSocialMedia.args = {
  // Add props to simulate a scenario with social media icons
  // For example: socialMediaIcons: ["facebook", "twitter", "instagram"],
};
