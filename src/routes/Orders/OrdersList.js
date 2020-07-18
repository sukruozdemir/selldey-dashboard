import React from "react";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Card,
  CardFooter,
  Table,
} from "./../../components";

import { TrTableOrdersList } from "./components/TrTableOrdersList";

const ProjectsList = () => (
  <Card className='mb-3'>
    {/* START Table */}
    <div className='table-responsive-xl'>
      <Table className='mb-0' hover>
        <thead>
          <tr>
            <th className='align-middle bt-0'>Yıldız</th>
            <th className='align-middle bt-0'>Proje</th>
            <th className='align-middle bt-0'>Durumu</th>
            <th className='align-middle bt-0'>Tamamlanan Görev</th>
            <th className='align-middle bt-0'>Kişi</th>
            <th className='align-middle bt-0 text-right'>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <TrTableOrdersList />
        </tbody>
      </Table>
    </div>
    {/* END Table */}
    <CardFooter className='d-flex justify-content-center pb-0'>
      <Pagination aria-label='Page navigation example'>
        <PaginationItem>
          <PaginationLink previous href='#'>
            <i className='fa fa-fw fa-angle-left'></i>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href='#'>
            <i className='fa fa-fw fa-angle-right'></i>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </CardFooter>
  </Card>
);

export default ProjectsList;
