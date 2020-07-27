import React from "react";

import { CardColumns } from "./../../../components";
import { ProductsCardGrid } from "./../../components/Products/ProductsCardGrid";
import { Paginations } from "./../../components/Paginations";

const ProductsGrid = () => (
  <React.Fragment>
    <CardColumns>
      <ProductsCardGrid />
      <ProductsCardGrid id='2' />
      <ProductsCardGrid id='3' />
      <ProductsCardGrid id='4' />
      <ProductsCardGrid id='5' />
      <ProductsCardGrid id='6' />
      <ProductsCardGrid id='7' />
      <ProductsCardGrid id='8' />
      <ProductsCardGrid id='9' />
      <ProductsCardGrid id='10' />
      <ProductsCardGrid id='11' />
      <ProductsCardGrid id='12' />
    </CardColumns>
    <div className='d-flex justify-content-center'>
      <Paginations />
    </div>
  </React.Fragment>
);

export default ProductsGrid;
