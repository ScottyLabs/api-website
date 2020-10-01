import React, { useEffect, useState } from "react";
import { Container, Grid, Segment, Menu } from "semantic-ui-react";
import { PageGrid } from "../components/PageGrid";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "../3.x/theme-flattop.css";
import "../3.x/addon.css";

export const Docs = () => {
  const [activeItem, setActiveItem] = useState("course");
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (activeItem === 'course') {
      setUrl('https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/petstore-expanded.json');
    } else {
      setUrl('https://petstore.swagger.io/v2/swagger.json');
    }
  }, [activeItem]);

  return (
    <PageGrid>
      <Nav location="docs" />
      <Grid.Row
        as={Segment}
        vertical
        verticalAlign="top"
        textAlign="center"
        style={{ height: "80%", overflow: "auto" }}
      >
        <Grid.Column>
          <Container style={{ textAlign: "left" }}>
            <Menu attached="top" tabular>
              <Menu.Item
                name="course"
                active={activeItem === "course"}
                onClick={() => setActiveItem("course")}
              >
                Course API
              </Menu.Item>
              <Menu.Item
                name="dining"
                active={activeItem === "dining"}
                onClick={() => setActiveItem("dining")}
              >
                Dining API
              </Menu.Item>
            </Menu>

            <Segment attached="bottom">
              <SwaggerUI url={url} />
            </Segment>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Footer />
    </PageGrid>
  );
};
