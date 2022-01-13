import React from "react";
import { navigatePath } from "../invoice/InvoiceService";

const NewinvoiceRoutes = [
 
  
  {
    path: navigatePath+"/newinvoice/:id",
    component: React.lazy(() => import("./Newinvoiceview"))
  },
  

  {
    path: navigatePath+"/poinvview/:id",
    component: React.lazy(() => import("./poinvview"))
  },
  {
    path: navigatePath+"/poinvoice/:id",
    component: React.lazy(() => import("./poinvoice"))
  },
  {
    path: navigatePath+"/poupdateinvoice/:id",
    component: React.lazy(() => import("./poupdateinvoice"))
  },
  {
    path: navigatePath+"/purchaseedit/:id",
    component: React.lazy(() => import("./purchaseedit"))
  },
  {
    path: navigatePath+"/poinvoicegenerate/:id",
    component: React.lazy(() => import("./poinvoicegenerate"))
  },
  {
    path: navigatePath+"/purchaseinvoice/:id",
    component: React.lazy(() => import("./Purchaseinvoice"))
  },
  {
    path: navigatePath+"/purchaseinvoiceview/",
    component: React.lazy(() => import("./PurchaseInvoices.jsx"))
  },
  {
    path: navigatePath+"/piview/:id",
    component: React.lazy(() => import("./PurchaseInvoiceView.jsx"))
  },

  
  
];

export default NewinvoiceRoutes;
