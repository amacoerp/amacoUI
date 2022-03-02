import React from "react";
import { navigatePath } from "../invoice/InvoiceService";
const productRoutes = [
  {
    path: navigatePath + "/product/addproduct/:id",
    component: React.lazy(() => import("./Addproduct")),
  },
  {
    path: navigatePath + "/product/producthistory",
    component: React.lazy(() => import("./producthistory")),
  },
  // {
  //   path: navigatePath+"/demo",
  //   component: React.lazy(() => import("./demo")),
  // },
  {
    path: navigatePath + "/product/updateproduct/:id",
    component: React.lazy(() => import("./Updateproduct")),
  },
  {
    path: navigatePath + "/product/viewproduct/:id",
    component: React.lazy(() => import("./Viewproduct")),
  },
  {
    path: navigatePath + "/product/viewsubcategory",
    component: React.lazy(() => import("./Viewsubcategory")),
  },
  {
    path: navigatePath + "/product/viewcategory",
    component: React.lazy(() => import("./Viewcategory")),
  },
  {
    path: navigatePath + "/product/Addcategory",
    component: React.lazy(() => import("./Addcategory")),
  },

  {
    path: navigatePath + "/manufacture",
    component: React.lazy(() => import("./manufacture")),
  },
  {
    path: navigatePath + "/singleproduct/:id",
    component: React.lazy(() =>
      import("./product/product-viewer/CustomerViewer")
    ),
  },
  {
    path: navigatePath + "/product/other",
    component: React.lazy(() => import("./OtherProducts")),
  },
];

export default productRoutes;
