import React from "react";

import { Nav, NavItem, NavLink, Badge } from "./../../../components";

const ProductsLeftNav = () => (
  <React.Fragment>
    {/* START Left Nav  */}
    <div className='mb-4'>
      <Nav pills vertical>
        <NavItem>
          <NavLink href='#' active>
            Bütün Ürünler
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Favoriler</NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
    {/* START Left Nav  */}
    <div className='mb-4'>
      <div className='small mb-3'>Etiketler</div>
      <Nav pills vertical>
        <NavItem>
          <NavLink href='#' className='d-flex'>
            <i className='fa fa-fw fa-circle text-success align-self-center mr-2'></i>
            Aktif
            <Badge color='secondary' pill className='ml-auto align-self-center'>
              67
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#' className='d-flex'>
            <i className='fa fa-fw fa-circle text-danger align-self-center mr-2'></i>
            Pasif
            <Badge color='secondary' pill className='ml-auto align-self-center'>
              1
            </Badge>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
  </React.Fragment>
);

export { ProductsLeftNav };
