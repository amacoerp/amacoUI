import { authRoles } from "./auth/authRoles";
import "bootstrap/dist/css/bootstrap.min.css";
import { navigatePath } from "./views/invoice/InvoiceService";

export const navigationPrint = [
  {
    name: "dashboard",
    path: navigatePath + "/dashboard/alternative",
    // path: "/dashboard",
    icon: "dashboard",
  },
  {
    name: "party",
    path: navigatePath + "/party/viewparty",
    icon: "people",
  },
  {
    name: "product",
    path: navigatePath + "/product/viewsubcategory",
    icon: "queue",
  },

  {
    name: "Purchase",
    icon: "monetization_on",
    children: [
      {
        name: "RFQ",
        path: "/print_rfqview",
      },
      {
        name: "Purchase Order",
        path: "/print_po",
      },
      {
        name: "Purchase Invoice Entry",
        path: "/Newinvoiceview",
      },
    ],
  },
  {
    name: "SALES",
    icon: "trending_up",
    children: [
      {
        name: "QUOTATION",
        path: navigatePath + "/quoateview/0",
        // path: "/Newquoteanalysis",
        // icon:"folder",
      },
      {
        name: "DELIVERY NOTE",
        path: navigatePath + "/dnoteview",
        // path: "/Newquoteanalysis",
        // icon:"folder",
      },
      {
        name: "INVOICE",
        path: navigatePath + "/inv",
        // icon:"folder",
      },
      {
        name: "SALES RETURN",
        path: navigatePath + "/salesreturn",
        // icon: "folder",
      },
    ],
    // }
    // ]
  },
  // {
  //   name: "Sales",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Quotation",
  //       path: navigatePath + "/quoateview/0",
  //       // path: "/Newquoteanalysis",
  //       // icon:"folder",
  //     },
  //     {
  //       name: "Delivery Notes",
  //       path: "/print_deliverynote",
  //       // icon:"folder",
  //     },

  //     {
  //       name: "Pro forma Invoice",
  //       path: "/print_invoice",
  //       // icon:"folder",
  //     },
  //   ],
  //   // }
  //   // ]
  // },
  {
    name: "Production",
    icon: "attach_money",
    path: "/print_Joborder_tab",
  },
  {
    name: "Expenses",
    icon: "attach_money",
    path: "/print_expense",
  },
  // {
  //   name: "Production",
  //   icon: "developer_board",
  //   children: [

  //     {
  //       name: "Job List",
  //       icon: "account_balance_wallet",
  //       path: "/transaction",
  //     },
  //     {
  //       name: "Job Entry",
  //       icon: "book",
  //       path:'/'

  //     }

  //   ]

  // },

  {
    name: "Report",
    icon: "assignment",

    children: [
      {
        name: "Stock",
        path: "/print_quote_stock",
      },
      {
        name: "Job",
        path: "/print_job_report",
      },
    ],
  },
];
