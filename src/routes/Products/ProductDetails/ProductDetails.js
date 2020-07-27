import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { HeaderMain } from "../../components/HeaderMain";
import { ProductDetailsForm } from "../../components/Products/ProductDetailsForm";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  PageLoader,
} from "../../../components";

import { FetchContext } from "../../../context/FetchContext";
import useProduct from "../../../hooks/useProduct";

function ProductDetails() {
  const params = useParams();

  const fetchContext = useContext(FetchContext);
  const { data } = useProduct(fetchContext.authAxios, params.productId);

  return (
    <Container>
      {data ? (
        <>
          <HeaderMain
            title={`Ürün Detay - ${data.title}`}
            className='mb-5 mt-4'
          />
          <Row>
            <Col lg={12}>
              <h5 className='text-muted'>#{params.productId}</h5>
              <Card>
                <CardBody>
                  <ProductDetailsForm {...data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <PageLoader />
      )}
    </Container>
  );
}

export default ProductDetails;
