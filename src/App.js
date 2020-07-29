import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {ToastContainer} from "react-toastify"

import { AuthProvider } from "./context/AuthContext";
import { FetchProvider } from "./context/FetchContext";

import AppLayout from "./layout/default";
import { RoutedContent } from "./routes";

const basePath = process.env.BASE_PATH || "/";

function App() {
  return (
    <Router basename={basePath}>
      <AuthProvider>
        <FetchProvider>
          <AppLayout>
            <RoutedContent />

            <ToastContainer
              position='bottom-center'
              autoClose={50000}
              draggable={false}
              hideProgressBar={true}
            />
          </AppLayout>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
