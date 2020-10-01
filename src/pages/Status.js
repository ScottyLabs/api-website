import React from 'react';
import { PageGrid } from '../components/PageGrid';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { StatusTable } from '../components/StatusTable';

export const Status = () => {
  return (
    <PageGrid>
      <Nav location="status" />
      <StatusTable />
      <Footer />
    </PageGrid>
  );
};
