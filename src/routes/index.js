import React from "react";
import { Route, Switch, Redirect } from "react-router";

// ----------- Page Imports ---------------
// import Analytics from "./Dashboards/Analytics";

import Products from "./Products";
import Orders from "./Orders";
// import OrderDetails from "./OrderDetails";

import NavbarOnly from "./Layouts/NavbarOnly";
import SidebarWithNavbar from "./Layouts/SidebarWithNavbar";

// ----------- Layout Imports ---------------
import { DefaultNavbar } from "./../layout/components/DefaultNavbar";
import { DefaultSidebar } from "./../layout/components/DefaultSidebar";

import { SidebarANavbar } from "./../layout/components/SidebarANavbar";
import { SidebarASidebar } from "./../layout/components/SidebarASidebar";

import { PageLoader } from "../components";

// ----------- Async Page Imports ---------------

const OrderDetails = React.lazy(() => import("./OrderDetails"));

export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from='/' to='/dashboard/orders' exact />

      <Route component={Products} path='/dashboard/products/:type' />
      <Route component={Orders} path='/dashboard/orders' exact />
      {/* <Route component={OrderDetails} path='/dashboard/orders/:orderNo' /> */}
      <Route path='/dashboard/orders/:orderNo'>
        <React.Suspense fallback={<PageLoader />}>
          <OrderDetails />
        </React.Suspense>
      </Route>
    </Switch>
  );
};

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
  <Switch>
    {/* Other Navbars: */}
    <Route component={SidebarANavbar} path='/layouts/sidebar-a' />
    <Route component={NavbarOnly.Navbar} path='/layouts/navbar' />
    <Route
      component={SidebarWithNavbar.Navbar}
      path='/layouts/sidebar-with-navbar'
    />
    {/* Default Navbar: */}
    <Route component={DefaultNavbar} />
  </Switch>
);

export const RoutedSidebars = () => (
  <Switch>
    {/* Other Sidebars: */}
    <Route component={SidebarASidebar} path='/layouts/sidebar-a' />
    <Route
      component={SidebarWithNavbar.Sidebar}
      path='/layouts/sidebar-with-navbar'
    />
    {/* Default Sidebar: */}
    <Route component={DefaultSidebar} />
  </Switch>
);
