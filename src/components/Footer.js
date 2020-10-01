import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

export const Footer = () => (
  <Grid.Row
    as={Segment}
    inverted
    vertical
    verticalAlign="middle"
    textAlign="center"
    style={{ height: '10%' }}
  >
    <Grid.Column>
      <Header
        as="h5"
        inverted
        style={{ fontSize: '1.5em', fontWeight: 'normal' }}
      >
        <Header.Content>
          Powered by <a href="https://scottylabs.org">ScottyLabs</a>
        </Header.Content>
      </Header>
    </Grid.Column>
  </Grid.Row>
);
