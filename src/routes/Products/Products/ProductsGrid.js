import React from "react";

import Pagination from "../../components/Pagination";
import { CardColumns } from "./../../../components";
import { ProductsCardGrid } from "./../../components/Products/ProductsCardGrid";

const ProductsGrid = ({ data, page, handlePageChange }) => (
  <React.Fragment>
    <CardColumns>
      {data.results.map((productItem, index) => {
        return <ProductsCardGrid key={index} id={index} {...productItem} />;
      })}
    </CardColumns>
    <div className='d-flex justify-content-center'>
      <Pagination
        pageCount={data.totalPages}
        forcePage={Number(page) - 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel=''
        nextLabel=''
        onPageChange={handlePageChange}
      />
    </div>
  </React.Fragment>
);

export default ProductsGrid;
