import React from "react";

import { HeaderMain } from "../../components/HeaderMain";
import { NewOrderForm } from "../../components/Orders/NewOrderForm";
import { Container, Row, Col, Card, CardBody } from "../../../components";

function NewOrder() {
  return (
    <Container>
      <HeaderMain title='Yeni Sipariş Ekle' className='mb-5 mt-4' />
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <NewOrderForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewOrder;
