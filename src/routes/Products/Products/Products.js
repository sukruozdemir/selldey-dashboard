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
import useQuery from "../../../hooks/useQuery";

const Products = () => {
  const fetchContext = useContext(FetchContext);
  const history = useHistory();
  const match = useRouteMatch();
  const query = useQuery();

  // Go to page1
  const goToPage1 = () => {
    match.params.type === "list"
      ? history.push("/dashboard/products/list?page=1")
      : history.push("/dashboard/products/grid?page=1");
  };

  // Get "page" query param
  const page = query.get("page");

  // If "page" query params can't found go to page1
  !page && goToPage1();

  // Pagination page change handler
  const handlePageChange = (pageIndex) => {
    match.params.type === "list"
      ? history.push(`/dashboard/products/list?page=${pageIndex.selected + 1}`)
      : history.push(`/dashboard/products/grid?page=${pageIndex.selected + 1}`);
  };

  // Fetch products
  const { data } = useProducts(fetchContext.authAxios, {
    limit: match.params.type === "list" ? "10" : "9",
    page: page,
  });

  // Check page is bigger than data total pages?
  data && data.totalPages && Number(page) > data.totalPages && goToPage1();

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
              linkList={`/dashboard/products/list?page=${page}`}
              linkGrid={`/dashboard/products/grid?page=${page}`}
              onNewButtonClick={() => {
                history.push("/dashboard/new/product");
              }}
            />

            {data ? (
              match.params.type === "list" ? (
                <ProductsList
                  data={data}
                  page={page}
                  handlePageChange={handlePageChange}
                />
              ) : (
                <ProductsGrid
                  data={data}
                  page={page}
                  handlePageChange={handlePageChange}
                />
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
