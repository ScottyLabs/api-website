import React from 'react';
import '../App.css';
import {
  Segment,
  Header,
  Image,
  Grid,
} from 'semantic-ui-react';
import { PageGrid } from '../components/PageGrid';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <PageGrid>
      <Nav location='home' />
      <Grid.Row
        as={Segment}
        vertical
        inverted
        verticalAlign='middle'
        textAlign="center"
        style={{ height: '80%', overflow: 'auto' }}
      >
        <Grid.Column><Image src="scotty-circle.svg" centered size="small" circular />
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
        </Header></Grid.Column>
      </Grid.Row>
      <Footer />
    </PageGrid>
  );
}