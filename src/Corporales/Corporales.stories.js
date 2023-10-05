// Import the necessary dependencies
import React from 'react';
import { Template } from '@storybook/react'; // Corrected import

// Import the component you want to create a story for (assuming the component is named "Corporales")
import Corporales from '../path/to/Corporales';

// Create a named export for the Default story
export const Default = Template.bind({});
Default.args = {
  component: Corporales,
  title: "Corporales",
} 

// Export the Default story at the end of the file
export default {
  title: 'Corporales',
  component: Corporales,
};
