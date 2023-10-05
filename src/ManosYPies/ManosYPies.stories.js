import React from "react";
import { Story } from "@storybook/react";
import ManosYPies from "./ManosYPies"; // Import your ManosYPies component

export default {
  component: ManosYPies,
  title: "ManosYPies",
};

const Template: Story = (args) => <ManosYPies {...args} />;

export const Default = Template.bind({});
