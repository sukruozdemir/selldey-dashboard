import React from "react";
import faker from "faker/locale/tr";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";

import { randomArray } from "./../../../utilities";

const prioStatus = [
  <React.Fragment key='1'>
    <i className='fa fa-circle text-yellow mr-2'></i>
    Yeni
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='2'>
    <i className='fa fa-circle text-green mr-2'></i>
    Onaylı
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='3'>
    <i className='fa fa-circle text-danger mr-2'></i>
    İptal
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='4'>
    <i className='fa fa-circle text-indigo mr-2'></i>
    Tedarik
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='5'>
    <i className='fa fa-circle text-info mr-2'></i>
    Paket
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='6'>
    <i className='fa fa-circle text-warning mr-2'></i>
    Ulaşılamadı
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='7'>
    <i className='fa fa-circle text-purple mr-2'></i>
    İleri T.
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='8'>
    <i className='fa fa-circle text-pink mr-2'></i>
    Kargo
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='9'>
    <i className='fa fa-circle text-red mr-2'></i>
    İade
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='10'>
    <i className='fa fa-circle text-success mr-2'></i>
    Teslim
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
  <React.Fragment key='11'>
    <i className='fa fa-circle text-dark mr-2'></i>
    Çöp
    <i className='fa fa-angle-down ml-2' />
  </React.Fragment>,
];

const TrTableOrdersList = (props) => (
  <React.Fragment>
    <tr>
      <td className='align-middle'>
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color='link'
            link
            size='sm'
            className='pl-0 mb-3 text-decoration-none'
          >
            {randomArray(prioStatus)}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Sipariş Durumu Seçin</DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-yellow mr-2'></i>
              Yeni
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-green mr-2'></i>
              Onaylı
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-danger mr-2'></i>
              İptal
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-indigo mr-2'></i>
              Tedarik
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-info mr-2'></i>
              Paket
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-warning mr-2'></i>
              Ulaşılamadı
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-purple mr-2'></i>
              İleri T.
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-pink mr-2'></i>
              Kargo
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-red mr-2'></i>
              İade
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-success mr-2'></i>
              Teslim
            </DropdownItem>
            <DropdownItem>
              <i className='fa fa-circle text-dark mr-2'></i>
              Çöp
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </td>
      <td className='align-middle'>
        {faker.date.future().toLocaleDateString("tr-TR")}{" "}
        {faker.date.future().toLocaleTimeString("tr-TR")}
      </td>
      <td className='align-middle'>
        {faker.name.firstName()} {faker.name.lastName()}
      </td>
      <td className='align-middle'>
        <Link className='mt-0 d-flex text-decoration-none' to='/'>
          {faker.commerce.product()}
        </Link>
        <a
          href={faker.internet.url()}
          className='mt-0 d-flex text-decoration-none text-muted'
        >
          {faker.internet.url()}
        </a>
      </td>
      <td className='align-middle text-right'>
        <UncontrolledButtonDropdown className='align-self-center ml-auto'>
          <DropdownToggle color='link' size='sm'>
            <i className='fa fa-gear' />
            <i className='fa fa-angle-down ml-2' />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link to={`/dashboard/orders/${faker.random.number()}`}>
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
      </td>
    </tr>
  </React.Fragment>
);

TrTableOrdersList.propTypes = {
  id: PropTypes.node,
};
TrTableOrdersList.defaultProps = {
  id: "1",
};

export { TrTableOrdersList };
