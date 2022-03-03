import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
// import chartsRoute from "./views/charts/ChartsRoute";

import invoiceRoutes from "./views/invoice/InvoioceRoutes";
import QuoteRoute from "./views/Quoteinvoice/QuoteRoute";
import NewinvoiceRoutes from "./views/Newinvoice/NewinvoviceRoutes"


import demoRoutes from "./views/demo/demoRoutes"
import formsRoutes from "./views/forms/FormsRoutes";
import partyRoutes from "./views/party/PartyRoutes";
import productRoutes from "./views/product/productRoutes";
import salesRoutes from "./views/sales/SalesRoutes";






import pagesRoutes from "./views/pages/pagesRoutes";
import invRoutes from "./views/inv/invRoutes";
import ExpenseRoutes from "./views/expense/ExpenseRoutes";
import userRoutes from "./views/user/userroutes";
import statementRoutes from "./views/statements/StatementRoute";
import TaxRoutes from "./views/Tax/TaxRoutes";
import PrintQuoteRoutes from "./views/PrintingDiv/Sales/salesRoutes";
import PrintPartyRoutes from "./views/PrintingDiv/Party/PartyRoutes";
import PrintProductRoutes from "./views/PrintingDiv/Product/ProductRoutes";
import PrintReportRoutes from "./views/PrintingDiv/Report/ReportRoutes";
import PrintPurRoutes from "./views/PrintingDiv/Purchase/PurRoutes";
import StockRoute from "./views/Stock/StockRoute";
import PermissionRoute from "./views/Permission/PermissionRoute";
import EmployeeRoute from "./views/Employees/EmployeeRoute";
import { navigatePath } from "./views/invoice/InvoiceService";
const redirectRoute = [
  {
    path: "/",
    exact: true,

    component: () => <Redirect to={navigatePath + "/dashboard/alternative"} />,
  },
];

// const errorRoute = [
//   {
//     component: () => <Redirect to="/session/404" />,
//   },
// ];

const routes = [
  ...dashboardRoutes,
  ...StockRoute,
  ...EmployeeRoute,
  ...statementRoutes,
  ...userRoutes,
  ...ExpenseRoutes,
  ...invRoutes,
  ...QuoteRoute,
  ...NewinvoiceRoutes,
  ...demoRoutes,
  ...partyRoutes,
  ...productRoutes,
  ...salesRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...invoiceRoutes,
  ...formsRoutes,
  ...pagesRoutes,
  ...redirectRoute,
  ...TaxRoutes,
  ...PrintQuoteRoutes,
  ...PrintPartyRoutes,
  ...PrintProductRoutes,
  ...PrintReportRoutes,
  ...PrintPurRoutes,
  ...PermissionRoute,

  // ...errorRoute,
];

export default routes;
