import React, { useEffect, useState } from 'react';
import { Segment, Grid, Table, Header, Container } from 'semantic-ui-react';
import { ApiStatus } from '../components/ApiStatus';
import { getApiStatus } from '../util/apis';

export const StatusTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const retrieveData = () => {
      setLoading(true);
      setData(getApiStatus(false));
      setLoading(false);
    }
    retrieveData();
    const interval = setInterval(() => {
      retrieveData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Grid.Row
      as={Segment}
      vertical
      inverted
      verticalAlign="top"
      textAlign="center"
      style={{ height: '80%', overflow: 'auto' }}
    >
      <Grid.Column>
        <Container>
          <Header
            as="h3"
            inverted
            style={{
              fontSize: '1.5em',
              fontWeight: 'normal',
            }}
          >
            <Header.Content>ScottyLabs API & App Status</Header.Content>
          </Header>
          <Table columns={3} striped size="large" inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {loading ? null : data.map(({ api, status, notes }) => (
                <Table.Row key={api.name}>
                  <Table.Cell selectable>
                    <a href={api.link}>{api.name}</a>
                  </Table.Cell>
                  <Table.Cell>
                    <ApiStatus status={status} />
                  </Table.Cell>
                  <Table.Cell>{notes}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <p style={{ textAlign: 'right' }}>Refreshes every minute</p>
        </Container>
      </Grid.Column>
    </Grid.Row>
  );
};
