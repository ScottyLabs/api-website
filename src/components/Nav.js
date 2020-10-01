import React from "react";
import { Segment, Grid, Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import config from '../config.json';

const populateNav = (location) => {
  const development = config.development || false;
  const pages = config.pages;
  if (pages.length > 0) {
    return pages.map((page) => {
      if (development || !development && !page.devOnly) {
        return (
          <Menu.Item
            icon={page.icon}
            name={page.name}
            active={location === page.name}
            as={Link}
            to={page.path}
          />
        );
      }
    });
  }
};

export const Nav = ({ location }) => (
  <Grid.Row
    as={Segment}
    vertical
    inverted
    verticalAlign="middle"
    style={{ height: "10%" }}
  >
    <Grid.Column>
      <Container>
        <Menu inverted pointing secondary size="huge">
          {populateNav(location)}
        </Menu>
      </Container>
    </Grid.Column>
  </Grid.Row>
);
