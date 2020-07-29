import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  ButtonGroup,
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "./../../../components";

import { ProductCardDetail } from "./ProductCardDetail";

const ProductsCardGrid = ({ id, title, description, site, price, active }) => (
  <React.Fragment>
    {/* START Card */}
    <Card>
      <CardBody>
        <div className='d-flex'>
          <ButtonGroup size='sm' className='ml-auto'>
            <UncontrolledButtonDropdown className='ml-auto'>
              <DropdownToggle color='link' size='sm' className='pt-0'>
                <i className='fa fa-fw fa-gear pr-0' />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to={`/dashboard/details/product/${id}`}>
                    <i className='fa fa-fw fa-folder-open mr-2'></i>
                    Görüntüle
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <i className='fa fa-fw fa-trash mr-2'></i>
                  Sil
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </ButtonGroup>
        </div>
        <ProductCardDetail
          productTitle={title}
          productSiteUrl={site}
          active={active}
        />
      </CardBody>
    </Card>
    {/* END Card */}
  </React.Fragment>
);
ProductsCardGrid.propTypes = {
  id: PropTypes.node,
};
ProductsCardGrid.defaultProps = {
  id: "1",
};

export { ProductsCardGrid };
