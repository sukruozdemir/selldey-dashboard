import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "./../../components";
import { HeaderMain } from "./../components/HeaderMain";

import OrdersList from "./OrdersList";
// import { ProjectsLeftNav } from "./../components/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "./../components/Projects/ProjectsSmHeader";

const Orders = (props) => (
  <React.Fragment>
    <Container fluid>
      <HeaderMain title='Siparişler' className='mb-5 mt-4' />
      <Row>
        <Col lg={12}>
          <ProjectsSmHeader
            subTitle='Bütün Siparişler'
            subTitleLink='/dashboard/orders/'
            title='Siparişler'
            linkList='/dashboard/orders'
          />

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
