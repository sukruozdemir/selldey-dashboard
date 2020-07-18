import React from "react";
import faker from "faker/locale/tr";
import PropTypes from "prop-types";

import {
  Badge,
  Media,
  Avatar,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";

import { randomAvatar } from "./../../../utilities";

const TrTableProductsList = (props) => {
  return (
    <React.Fragment>
      <tr className='py-3'>
        <td>
          <Media>
            <Media left className='d-flex align-self-center mr-3'>
              <Avatar.Image
                size='lg'
                src={randomAvatar()}
                className='align-self-center'
              />
            </Media>
            <Media body>
              <a className='mt-0 d-flex text-decoration-none' href='#!'>
                {faker.commerce.productName()}
              </a>
              <span>{faker.internet.url()}</span>
            </Media>
          </Media>
        </td>
        <td className='align-middle'>{faker.commerce.price()} ₺</td>
        <td className='align-middle'>
          <h5>
            <Badge color='red'>Pasif</Badge>
          </h5>
        </td>
        <td className='align-middle text-right'>
          <UncontrolledButtonDropdown>
            <DropdownToggle color='link' className='pr-0'>
              <i className='fa fa-gear'></i>
              <i className='fa fa-angle-down ml-2' />
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
        </td>
      </tr>
    </React.Fragment>
  );
};

TrTableProductsList.propTypes = {
  id: PropTypes.node,
};
TrTableProductsList.defaultProps = {
  id: "1",
};

export { TrTableProductsList };
