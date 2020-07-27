import React from "react";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Card,
  CardFooter,
  Table,
} from "./../../../components";

import { TrTableOrdersList } from "./components/TrTableOrdersList";

const TasksList = () => (
  <Card className='mb-3'>
    {/* START Table */}
    <div className='table-responsive-xl'>
      <Table className='mb-0' hover>
        <thead>
          <tr>
            <th className='align-middle bt-0'>Sipariş Durumu</th>
            <th className='align-middle bt-0'>Tarih</th>
            <th className='align-middle bt-0'>Sipariş Veren</th>
            <th className='align-middle bt-0'>Ürün</th>
            <th className='align-middle bt-0 text-right'>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <TrTableOrdersList />
          <TrTableOrdersList id='2' />
          <TrTableOrdersList id='3' />
          <TrTableOrdersList id='4' />
          <TrTableOrdersList id='5' />
          <TrTableOrdersList id='6' />
          <TrTableOrdersList id='7' />
          <TrTableOrdersList id='8' />
          <TrTableOrdersList id='9' />
          <TrTableOrdersList id='10' />
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

export default TasksList;
