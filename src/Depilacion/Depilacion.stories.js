import React from 'react';
import Depilacion from './Depilacion'; // Import the Depilacion component

export default {
  title: "Depilacion",
  component: Depilacion,
};

const Template = (args) => <Depilacion {...args} />;
export const Default = Template.bind({});
