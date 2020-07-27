import React, { useContext } from "react";

import { HeaderMain } from "../../components/HeaderMain";
import { NewProductForm } from "../../components/Products/NewProductForm";
import { Container, Row, Col, Card, CardBody } from "../../../components";

import { FetchContext } from "../../../context/FetchContext";

function NewProduct() {
  const fetchContext = useContext(FetchContext);

  return (
    <Container>
      <HeaderMain title='Yeni Ürün Ekle' className='mb-5 mt-4' />
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <NewProductForm
                onSubmit={async (values) => {
                  try {
                    await fetchContext.authAxios.post("/products", values);
                    return {
                      status: true,
                    };
                  } catch (ex) {
                    return {
                      status: false,
                      error: ex,
                    };
                  }
                }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewProduct;
