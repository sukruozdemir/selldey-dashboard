import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router";

// ----------- Page Imports ---------------
import Login from "./Login";
import Error404 from "./Error404";

// ----------- Async Page Imports ---------------

import NavbarOnly from "./Layouts/NavbarOnly";
import SidebarWithNavbar from "./Layouts/SidebarWithNavbar";

// ----------- Layout Imports ---------------
import { DefaultNavbar } from "./../layout/components/DefaultNavbar";
import { DefaultSidebar } from "./../layout/components/DefaultSidebar";

import { SidebarANavbar } from "./../layout/components/SidebarANavbar";
import { SidebarASidebar } from "./../layout/components/SidebarASidebar";

import { PageLoader } from "../components";

const UnauthenticatedRoutes = () => (
  <Switch>
    <Redirect from='/' to='login' exact />
    <Route path='/login' component={Login} />
    <Route path='*' component={Error404} />
  </Switch>
);

/* const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? (
          <AppShell>{children}</AppShell>
        ) : (
          <Redirect to='/' />
        )
      }
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
          <AppShell>{children}</AppShell>
        ) : (
          <Redirect to='/' />
        )
      }
    ></Route>
  );
}; */

export const RoutedContent = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <UnauthenticatedRoutes />
      </Switch>
    </Suspense>
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
