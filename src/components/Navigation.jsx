import React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";

import PersistentDrawerLeft from "./Drawer";

import Breadcrumbs from "./Breadcrumbs";

// import ListItemText from '@mui/material/ListItemText';

const pages = [
  { path: "/", title: "Homepage", breadcrumb: "HomePage" },
  { path: "/cartoons", title: "Cartoons", breadcrumb: "Cartoons" },
  {
    path: "/cartoons/create-cartoon",
    title: "Create Cartoon",
    breadcrumb: "Create Cartoons",
  },
];

function Navigation() {
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    navigate(path);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <CssBaseline />
            <PersistentDrawerLeft></PersistentDrawerLeft>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cartoons
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => {
                    handleRouteChange(page.path);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{ marginTop: 10 }}
          role="presentation"
          onClick={handleRouteChange}
        >
          <Breadcrumbs />
        </Box>
      </Box>
    </>
  );
}
export { pages };
export default Navigation;
