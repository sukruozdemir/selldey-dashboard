import React from "react";
import faker from "faker/locale/tr";
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

import { Profile } from "./../Profile";

const ProductsCardGrid = (props) => (
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
                  <i className='fa fa-fw fa-pencil mr-2'></i>
                  Düzenle
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
        <Profile
          title={faker.commerce.productName()}
          subTitle={faker.internet.url()}
          descrpition={`${faker.commerce.price()} ₺`}
          descriptionIcon='fa-money'
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
