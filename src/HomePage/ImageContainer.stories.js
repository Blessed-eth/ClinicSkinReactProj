import React from "react";
import { ImageContainer } from "./ImageContainer"; // Import your component
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "ImageContainer", // This will be the name of the component in Storybook
  component: ImageContainer, // The component to showcase
  decorators: [withKnobs], // Add any decorators you need, like knobs for props
};

export const Default = () => (
  <ImageContainer>
    {/* You can add your component's props here */}
  </ImageContainer>
);
