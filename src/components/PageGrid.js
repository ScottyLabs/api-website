import React from 'react';
import { Grid } from 'semantic-ui-react';

export const PageGrid = ({ children }) => (
  <Grid padded style={{ height: '100vh' }}>
    {children}
  </Grid>
);