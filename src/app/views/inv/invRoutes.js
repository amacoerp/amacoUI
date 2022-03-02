import React from "react";

const invRoutes = [
  
  {
    path: "/invview/:id/:s",
    // exact: true,
    component: React.lazy(() => import("./invview"))
  },
  

];

export default invRoutes;
