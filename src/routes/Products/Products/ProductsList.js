import React from "react";

import { Card, CardFooter, Table } from "./../../../components";

import { TrTableProductsList } from "./components/TrTableProductsList";
import { Paginations } from "../../components/Paginations";

const ProductsList = ({ data }) => (
  <Card className='mb-3'>
    {/* START Table */}
    <div className='table-responsive-xl'>
      <Table className='mb-0' hover>
        <thead>
          <tr>
            <th className='align-middle bt-0'>Ürün</th>
            <th className='align-middle bt-0'>Açıklama</th>
            <th className='align-middle bt-0'>Durumu</th>
            <th className='align-middle bt-0 text-right'>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {data.map((productItem, index) => {
            return <TrTableProductsList key={index} id={index} {...productItem} />;
          })}
        </tbody>
      </Table>
    </div>
    {/* END Table */}
    <CardFooter className='d-flex justify-content-center pb-0'>
      <Paginations />
    </CardFooter>
  </Card>
);

export default ProductsList;
