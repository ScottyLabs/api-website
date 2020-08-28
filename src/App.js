import React from 'react';
import './App.css';
import { Segment, Header, Image, Grid } from 'semantic-ui-react';

function App() {
  return (
    <Segment inverted vertical style={{ height: '100vh', padding: '1em 0em' }}>
      <Grid
        textAlign="center"
        verticalAlign="middle"
        style={{ height: '90vh' }}
      >
        <Grid.Column>
          <Grid.Row>
            <Image src="scotty-circle.svg" inline size="small" circular />
          </Grid.Row>
          <Grid.Row>
            <Header
              as="h3"
              inverted
              style={{
                fontSize: '3.5em',
                fontWeight: 'normal',
                marginTop: '0.5em',
              }}
            >
              <Header.Content>
                ScottyLabs API Server<span className="blink">_</span>
              </Header.Content>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Grid textAlign="center" style={{ height: '10vh' }}>
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
      </Grid>
    </Segment>
  );
}

export default App;
