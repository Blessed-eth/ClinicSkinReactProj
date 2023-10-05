import React from 'react';
import { action } from '@storybook/addon-actions';
import MiCuenta from './MiCuenta'; // Adjust the import path

export default {
  title: 'MiCuenta', // The name for your component/story
  component: MiCuenta, // The React component you want to showcase
};

// Create a template for your component with initial props
const Template = (args) => <MiCuenta {...args} />;

// Define your actions or event handlers if needed
const handleClick = action('Button Clicked');
const handleClose = action('Close Button Clicked');

// Create a Default story to showcase your component
export const Default = Template.bind({});
Default.args = {
  // You can pass any initial props you want to showcase
  // For example, you can pass initial data or set initial state
};

// Additional stories to showcase different scenarios or functionality
export const WithContent = Template.bind({});
WithContent.args = {
  // Pass props to show the component with content (e.g., active page)
  // For example, if you have an active page for MiCuenta
  activePage: '#home', // Adjust this based on your component's props
  handleClick, // Pass your event handlers if needed
  handleClose,
};
