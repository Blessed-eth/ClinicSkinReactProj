import React from 'react';
import Navbar from './Navbar'; // Adjust the import path
import { action } from '@storybook/addon-actions';

// Export the default object with the title and component properties
export default {
  title: 'Common/Navbar', // The name for your component/story
  component: Navbar, // The React component you want to showcase
};

// Create a template for your component with initial props
const Template = (args) => <Navbar {...args} />;

// Define your actions or event handlers if needed
const handleButtonClick = action('Button Clicked');

// Create a Default story to showcase your component
export const Default = Template.bind({});
Default.args = {
  // You can pass any initial props you want to showcase
  // For example, you can set the initial state of your Navbar component
  // or demonstrate it in different states.
  // For instance:
  // isActive: false,
  // user: null,
  onButtonClick: handleButtonClick, // Pass your event handlers if needed
};
