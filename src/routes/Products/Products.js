import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, PageLoader } from "./../../components";
import { HeaderMain } from "../components/HeaderMain";

import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";

import { ProductsLeftNav } from "./../components/Products/ProductsLeftNav";
import { ProjectsSmHeader } from "./../components/Projects/ProjectsSmHeader";

import useProducts from "../../hooks/useProducts";

const Products = (props) => {
  const { data } = useProducts();

  return (
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

            {data ? (
              props.match.params.type === "list" ? (
                <ProductsList data={data.results} />
              ) : (
                <ProductsGrid />
              )
            ) : (
              <PageLoader />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

Products.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Products;
