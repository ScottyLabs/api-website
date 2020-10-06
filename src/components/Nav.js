import React, { useState, useEffect } from "react";
import { Segment, Grid, Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from 'axios';

export const Nav = ({ location }) => {
  const [config, setConfig] = useState({});
  const [development, setDevelopment] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_ROOT_URL + "/api/pages");
      const data = response.data;
      setConfig(data);
      setDevelopment(data.development);
    }
    fetchData();
  }, []);

  const populateNav = (location) => {
    const pages = config.data;
    if (pages && pages.length > 0) {
      return pages.map((page) => {
        if (development || (!development && !page.devOnly)) {
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
        return null;
      });
    }
  };
  
  return (
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
            {config ? populateNav(location) : null}
          </Menu>
        </Container>
      </Grid.Column>
    </Grid.Row>
  );  
}