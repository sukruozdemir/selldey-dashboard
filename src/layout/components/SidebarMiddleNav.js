import React from "react";

import { SidebarMenu } from "./../../components";

export const SidebarMiddleNav = () => (
  <SidebarMenu>
    <SidebarMenu.Item
      icon={<i className='fa fa-fw fa-home'></i>}
      title='Dashboards'
    >
      <SidebarMenu.Item title='Analitik' to='/dashboards/analytics' exact />
    </SidebarMenu.Item>

    <SidebarMenu.Item
      title='Siparişler'
      icon={<i className='fa fa-fw fa-shopping-bag'></i>}
    >
      <SidebarMenu.Item title='Sipariş Listesi' to='/dashboard/orders' />
    </SidebarMenu.Item>

    <SidebarMenu.Item
      title='Ürünler'
      icon={<i className='fa fa-fw fa-clone'></i>}
    >
      <SidebarMenu.Item title='Ürün Listesi' to='/dashboard/products/list' />
      <SidebarMenu.Item title='Ürün Grid Liste' to='/dashboard/products/grid' />
    </SidebarMenu.Item>
  </SidebarMenu>
);
