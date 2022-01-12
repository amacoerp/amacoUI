import React from "react";
import { navigatePath } from "../invoice/InvoiceService";

const PermissionRoute = [

  {
    path: navigatePath+"/modules",
    component: React.lazy(() =>
      import("./MainPage")
    ),
  },

];

export default PermissionRoute;
