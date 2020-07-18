import React from "react";

import { Card, CardFooter, Table } from "./../../components";

import { TrTableProductsList } from "./components/TrTableProductsList";
import { Paginations } from "../components/Paginations";

const UsersList = () => (
  <Card className='mb-3'>
    {/* START Table */}
    <div className='table-responsive-xl'>
      <Table className='mb-0' hover>
        <thead>
          <tr>
            <th className='align-middle bt-0'>Ürün Adı</th>
            <th className='align-middle bt-0'>Tutar</th>
            <th className='align-middle bt-0'>Durumu</th>
            <th className='align-middle bt-0 text-right'>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <TrTableProductsList />
          <TrTableProductsList id='2' />
          <TrTableProductsList id='3' />
          <TrTableProductsList id='4' />
          <TrTableProductsList id='5' />
          <TrTableProductsList id='6' />
          <TrTableProductsList id='7' />
          <TrTableProductsList id='8' />
          <TrTableProductsList id='9' />
        </tbody>
      </Table>
    </div>
    {/* END Table */}
    <CardFooter className='d-flex justify-content-center pb-0'>
      <Paginations />
    </CardFooter>
  </Card>
);

export default UsersList;
