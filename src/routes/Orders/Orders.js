import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "./../../components";

import { HeaderMain } from "./../components/HeaderMain";

import OrdersList from "./OrdersList";

// import { ProjectsLeftNav } from "../../components/Projects/ProjectsLeftNav";
import { OrdersSmHeader } from "./../components/Orders/OrdersSmHeader";

const Orders = (props) => (
  <React.Fragment>
    <Container fluid={true}>
      <HeaderMain title='Siparişler' className='mb-5 mt-4' />
      <Row>
        <Col lg={12}>
          <OrdersSmHeader subTitle='Siparişler' />

          <OrdersList />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);
Orders.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Orders;
