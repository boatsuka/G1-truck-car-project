import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import Search from "./pages/search";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Box sx={{ display: "flex" }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
            <Toolbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Router>
    </React.Fragment>
  );
}

export default App;
