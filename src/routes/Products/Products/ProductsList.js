import React from "react";

import Pagination from "../../components/Pagination";
import { Card, CardFooter, Table } from "./../../../components";

import { TrTableProductsList } from "./components/TrTableProductsList";

const ProductsList = ({ data, page, handlePageChange }) => {
  return (
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
            {data.results.map((productItem, index) => {
              return (
                <TrTableProductsList key={index} id={index} {...productItem} />
              );
            })}
          </tbody>
        </Table>
      </div>
      {/* END Table */}
      <CardFooter className='d-flex justify-content-center pb-0'>
        <Pagination
          pageCount={data.totalPages}
          forcePage={Number(page) - 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          previousLabel=''
          nextLabel=''
          onPageChange={handlePageChange}
        />
      </CardFooter>
    </Card>
  );
};

export default ProductsList;
