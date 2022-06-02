import { useLocation } from "react-router-dom";

import { Breadcrumbs, Link } from "@mui/material";
import { useEffect, useState } from "react";

function BreadCrumbsComponent() {
  const location = useLocation();

  const [pathArray, setPathArray] = useState([]);

  useEffect(() => {
    setPathArray(location.pathname.split("/").slice(1));
  }, [location.pathname]);

  const breadcrumbNameMap = {
    "/cartoons": "Cartoons",
    "/cartoons/create-cartoon": "Create Cartoon",
    "/cartoons/edit-cartoon": "Edit Cartoon",
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        HomePage
      </Link>
      {pathArray.map((path, i) => {
        const to = `/${pathArray.slice(0, i + 1).join("/")}`;
        return (
          <Link key={i} underline="hover" color="inherit" href={`${to}`}>
            {breadcrumbNameMap[to]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadCrumbsComponent;
