import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router";

// ----------- Page Imports ---------------
import Login from "./Login";
import Error404 from "./Error404";

import NavbarOnly from "./Layouts/NavbarOnly";
import SidebarWithNavbar from "./Layouts/SidebarWithNavbar";

// ----------- Layout Imports ---------------
import { DefaultNavbar } from "./../layout/components/DefaultNavbar";
import { DefaultSidebar } from "./../layout/components/DefaultSidebar";

import { SidebarANavbar } from "./../layout/components/SidebarANavbar";
import { SidebarASidebar } from "./../layout/components/SidebarASidebar";

import { PageLoader } from "../components";

import { AuthContext } from "../context/AuthContext";

// ----------- Async Page Imports ---------------
const Products = React.lazy(() => import("./Products/Products"));
const ProductDetails = React.lazy(() => import('./Products/ProductDetails'));

const UnauthenticatedRoutes = () => (
  <Switch>
    <Redirect from='/' to='login' exact />
    <Route path='/login' component={Login} />
    <Route path='*' component={Error404} />
  </Switch>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => (auth.isAuthenticated() ? children : <Redirect to='/' />)}
    ></Route>
  );
};

const AdminRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() && auth.isAdmin() ? (
          children
        ) : (
          <Redirect to='/' />
        )
      }
    ></Route>
  );
};

export const RoutedContent = () => {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <Switch>
        {/* Products */}
        <AuthenticatedRoute path='/dashboard/products/:type'>
          <Products />
        </AuthenticatedRoute>
        <AuthenticatedRoute path='/dashboard/details/product/:productId'>
          <ProductDetails />
        </AuthenticatedRoute>

        {/* Orders */}
        <AuthenticatedRoute path='/dashboard/orders'>
          <Products />
        </AuthenticatedRoute>

        {/* Public Routes */}
        <UnauthenticatedRoutes />
      </Switch>
    </React.Suspense>
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
