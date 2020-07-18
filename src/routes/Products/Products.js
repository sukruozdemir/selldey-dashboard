import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "./../../components";
import { HeaderMain } from "../components/HeaderMain";

import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";

import { ProductsLeftNav } from "./../components/Products/ProductsLeftNav";
import { ProjectsSmHeader } from "./../components/Projects/ProjectsSmHeader";

const Products = (props) => (
  <>
    <Container fluid={true}>
      <HeaderMain title='Ürünler' className='mb-5 mt-4' />
      <Row>
        <Col lg={3}>
          <ProductsLeftNav />
        </Col>
        <Col lg={9}>
          <ProjectsSmHeader
            subTitle={
              props.match.params.type === "list"
                ? "Ürün Listesi"
                : "Ürün Grid Liste"
            }
            linkList='/dashboard/products/list'
            linkGrid='/dashboard/products/grid'
          />

          {props.match.params.type === "list" ? (
            <ProductsList />
          ) : (
            <ProductsGrid />
          )}
        </Col>
      </Row>
    </Container>
  </>
);
Products.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Products;
