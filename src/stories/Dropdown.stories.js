import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import CustomDropdown from './Dropdown'; // Import your CustomDropdown component here
import 'bootstrap/dist/css/bootstrap.min.css';


export default {
  title: 'CustomDropdown', // The title of your story
  component: CustomDropdown, // The component you want to display in the story
  decorators: [withKnobs], // Add knobs support for dynamic props
};

export const Default = () => {
  const selectedList = text('Selected List', 'Selected Default List'); // Use knobs for dynamic props
  const showCheck = boolean('Show Checkbox', false);
  const showButton = boolean('Show Button', true);

  const lists = [
    { name: 'Option 1', icontype: 'Icon 1', rightIcon: 'Right Icon 1' },
    { name: 'Option 2', icontype: 'Icon 2', rightIcon: 'Right Icon 2' },
    // Add more options as needed
  ];

  const setSelectedList = (event, value) => {
    action('Selected List')(event, value);
  };

  return (
    <CustomDropdown
      selectedList={selectedList}
      lists={lists}
      showCheck={showCheck}
      showButton={showButton}
      setSelectedList={setSelectedList}
    />
  );
};

Default.story = {
  name: 'Default Configuration', // The name that appears in the storybook
};
