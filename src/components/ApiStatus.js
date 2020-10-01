import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../App.css';

export const ApiStatus = ({ status }) => {
  if (status) {
    return (
      <>
        <Icon name="circle" className="blink-green" /> Online
      </>
    );
  } else {
    return (
      <>
        <Icon name="circle outline" /> Offline
      </>
    );
  }
};
