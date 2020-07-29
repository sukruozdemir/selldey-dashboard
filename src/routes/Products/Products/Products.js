import React, { useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { Container, Row, Col, PageLoader } from "./../../../components";
import { HeaderMain } from "../../components/HeaderMain";

import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";

import { ProductsLeftNav } from "./../../components/Products/ProductsLeftNav";
import { ProjectsSmHeader } from "./../../components/Projects/ProjectsSmHeader";

import { FetchContext } from "../../../context/FetchContext";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  const fetchContext = useContext(FetchContext);
  const history = useHistory();
  const match = useRouteMatch();

  const { data } = useProducts(fetchContext.authAxios);

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
                match.params.type === "list"
                  ? "Ürün Listesi"
                  : "Ürün Grid Liste"
              }
              linkList='/dashboard/products/list'
              linkGrid='/dashboard/products/grid'
              onNewButtonClick={() => {
                history.push("/dashboard/new/product");
              }}
            />

            {data ? (
              match.params.type === "list" ? (
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

export default Products;
