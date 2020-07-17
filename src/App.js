import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "./layout/default";
import { RoutedContent } from "./routes";

const basePath = process.env.BASE_PATH || "/";

function App() {
  return (
    <Router basename={basePath}>
      <AppLayout>
        <RoutedContent />
      </AppLayout>
    </Router>
  );
}

export default App;
