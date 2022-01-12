import React from "react";
import { navigatePath } from "../invoice/InvoiceService";

const QuoteRoutes = [
 
  
  {
    path: navigatePath+"/quote/:id/:s",
    component: React.lazy(() => import("./Quotedetails"))
  },
  {
    path: navigatePath+"/quickPo/",
    component: React.lazy(() => import("./QuickPo"))
  },
  {
    path: navigatePath+"/quoteedit/:id",
    component: React.lazy(() => import("./Quoteedit"))
  },
  {
    path: navigatePath+"/revisequote/:id",
    component: React.lazy(() => import("./Revisequote"))
  },
  {
    path: navigatePath+"/dnote/:id",
    component: React.lazy(() => import("./dnote"))
  },
  {
    path: navigatePath+"/invoice_dnote/:id",
    component: React.lazy(() => import("./Invoice_dnote"))
  },
  {
    path: navigatePath+"/quoteanalysis/",
    component: React.lazy(() => import("./Quoteanalyse"))
  },
  {
    path: navigatePath+"/purchaseanalysis/:id",
    component: React.lazy(() => import("./purchaseanalysis"))
  },
  {
    path: navigatePath+"/Newquoteanalysis/",
    component: React.lazy(() => import("./NewQuoteanalysis"))
  },
  {
    path: navigatePath+"/QuickQuote/",
    component: React.lazy(() => import("../sales/quoate-form/QuickQuote"))
  },
  {
    path: navigatePath+"/Quoteinvoice/:id",
    component: React.lazy(() => import("./Quoteinvoice"))
  },
  {
    path: navigatePath+"/printdemo",
    component: React.lazy(() => import("./printdemo"))
  },
  {
    path: navigatePath+"/InvoiceCreate",
    component: React.lazy(() => import("./InvoiceCreate"))
  },
  {
    path: navigatePath+"/InvoiceEdit/:id",
    component: React.lazy(() => import("./InvoiceEdit"))
  },
  
];

export default QuoteRoutes;
