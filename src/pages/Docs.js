import React, { useEffect, useState } from "react";
import { Container, Grid, Segment, Menu } from "semantic-ui-react";
import { PageGrid } from "../components/PageGrid";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "../3.x/theme-flattop.css";
import "../3.x/addon.css";
import axios from "axios";

const docsSearch = (docs, key) => {
  for (var doc of docs) {
    if (doc.name === key) {
      return doc;
    }
  }
};

const getFirst = (docs, development) => {
  if (docs && docs.length > 0) {
    for (var doc of docs) {
      if (development || (!development && !doc.devOnly)) {
        return doc.name;
      }
    }
  }
};

export const Docs = () => {
  const [config, setConfig] = useState(null);
  const [development, setDevelopment] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [url, setUrl] = useState("");

  const populateDocs = () => {
    const docs = config.data;
    if (docs && docs.length > 0) {
      return docs.map((doc) => {
        if (development || (!development && !doc.devOnly)) {
          return (
            <Menu.Item
              name={doc.name}
              active={activeItem === doc.name}
              onClick={() => setActiveItem(doc.name)}
            >
              {doc.display}
            </Menu.Item>
          );
        }
        return null;
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/docs");
      const data = response.data;
      setConfig(data);
      setDevelopment(data.development);
      setActiveItem(getFirst(data.data, data.development));
    };

    if (!config) {
      fetchData();
    }

    if (activeItem !== "") {
      const doc = docsSearch(config.data, activeItem);
      if (doc) {
        setUrl(doc.src);
      }
    }
  }, [config, development, activeItem]);

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
            {config ? (
              <>
                <Menu attached="top" tabular>
                  {populateDocs()}
                </Menu>
                <Segment attached="bottom">
                  <SwaggerUI url={url} />
                </Segment>
              </>
            ) : null}
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Footer />
    </PageGrid>
  );
};
