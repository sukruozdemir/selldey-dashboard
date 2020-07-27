import React from "react";
import { Route, Switch, Redirect } from "react-router";

// ----------- Page Imports ---------------
// import Analytics from "./Dashboards/Analytics";

// import NewProduct from "./Products/NewProduct";
import Products from "./Products/Products";
// import Orders from "./Orders/Orders";
// import OrderDetails from "./Orders/OrderDetails";
// import NewOrder from "./Orders/NewOrder";

import NavbarOnly from "./Layouts/NavbarOnly";
import SidebarWithNavbar from "./Layouts/SidebarWithNavbar";

// ----------- Layout Imports ---------------
import { DefaultNavbar } from "./../layout/components/DefaultNavbar";
import { DefaultSidebar } from "./../layout/components/DefaultSidebar";

import { SidebarANavbar } from "./../layout/components/SidebarANavbar";
import { SidebarASidebar } from "./../layout/components/SidebarASidebar";

import { PageLoader } from "../components";

// ----------- Async Page Imports ---------------

// const OrderDetails = React.lazy(() => import("./OrderDetails"));
// const ProductDetails = React.lazy(() => import("./ProductDetails"));

const NewOrder = React.lazy(() => import("./Orders/NewOrder"));
const NewProduct = React.lazy(() => import("./Products/NewProduct"));
const Orders = React.lazy(() => import("./Orders/Orders"));
// const Products = React.lazy(() => import("./Products/Products"));
const ProductDetails = React.lazy(() => import("./Products/ProductDetails"));

export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from='/' to='/dashboard/orders' exact />

      <Route path='/dashboard/new/order'>
        <React.Suspense fallback={<PageLoader />}>
          <NewOrder />
        </React.Suspense>
      </Route>

      <Route path='/dashboard/new/product'>
        <React.Suspense fallback={<PageLoader />}>
          <NewProduct />
        </React.Suspense>
      </Route>

      <Route path='/dashboard/orders'>
        <React.Suspense fallback={<PageLoader />}>
          <Orders />
        </React.Suspense>
      </Route>

      <Route path='/dashboard/details/product/:productId'>
        <React.Suspense fallback={<PageLoader />}>
          <ProductDetails />
        </React.Suspense>
      </Route>

      <Route component={Products} path='/dashboard/products/:type' />

      {/*       <Route path='/dashboard/products/:type'>
        <React.Suspense fallback={<PageLoader />}>
          <Products />
        </React.Suspense>
      </Route> */}

      {/*       <Route component={Products} path='/dashboard/products/:type' />
      <Route component={NewProduct} path='/dashboard/new/product' />

      <Route path='/dashboard/details/product/:productId'>
        <React.Suspense fallback={<PageLoader />}>
          <ProductDetails />
        </React.Suspense>
      </Route>

      <Route component={Orders} path='/dashboard/orders' exact />
      <Route path='/dashboard/orders/:orderNo'>
        <React.Suspense fallback={<PageLoader />}>
          <OrderDetails />
        </React.Suspense>
      </Route> */}
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
