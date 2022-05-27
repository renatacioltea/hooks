import { useLocation } from 'react-router-dom';

import { Breadcrumbs, Link } from '@mui/material';
import { useEffect, useState } from 'react';

function BreadCrumbsComponent() {
  const location = useLocation();

  const [pathArray, setPathArray] = useState([]);

  useEffect(() => {
    setPathArray(location.pathname.split('/').slice(1));
  }, [location.pathname]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        HomePage
      </Link>
      {pathArray.map((path, i) => {
        return (
          <Link key={i} underline="hover" color="inherit" href={`/${path}`}>
            {path}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadCrumbsComponent;
