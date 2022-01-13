import React from "react";
import { navigatePath } from "../invoice/InvoiceService";

const salesRoutes = [
    {
        path: navigatePath+"/sales/rfq-form/rfqview",
        component: React.lazy(() => import("./rfq-form/rfqview")),
    },
    {
        path: navigatePath+"/sales/rfq-form/analysisform",
        component: React.lazy(() => import("./rfq-form/analysisform")),
    },
    {
        path: navigatePath+"/sales/rfq-form/rfqanalysis",
        component: React.lazy(() => import("./rfq-form/rfqanalysis"))
    },
    {
        path: navigatePath+"/sales/rfq-form/rfqform",
        component: React.lazy(() => import("./rfq-form/Rfqform")),
    },
    {
        path: navigatePath+"/sales/Viewanalysis",
        component: React.lazy(() => import("./Viewanalysis")),
    },
    {
        path: navigatePath+"/sales/rfq-form/rfqview",
        component: React.lazy(() => import("./rfq-form/rfqview")),
    },
    {
        path: navigatePath+"/sales/quoate-form",
        component: React.lazy(() => import("./quoate-form/Quoateform")),
    },
    {
        path: navigatePath+"/quoateview/:t",
        component: React.lazy(() => import("./quoate-form/Tab")),
    },
    {
        path: navigatePath+"/Newinvoiceview",
        component: React.lazy(() => import("./Newinvoiceview")),
    },
    {
        path: navigatePath+"/rfqproductview",
        component: React.lazy(() => import("./rfq-form/rfqproductview")),
    },

    {
        path: navigatePath+"/sales/invoice",
        component: React.lazy(() => import("./Invoice")),
    },
    {
        path: navigatePath+"/sales/quoatation",
        component: React.lazy(() => import("./Quoatation")),
    },
    {
        path: navigatePath+"/sales/salesreturn",
        component: React.lazy(() => import("./Salesreturn")),
    },
    {
        path: navigatePath+"/inv",
        component: React.lazy(() => import("./inv")),
    },
    {
        path: navigatePath+"/poinv",
        component: React.lazy(() => import("./poinv")),
    },
    {
        path: navigatePath+"/updatesidebar",
        component: React.lazy(() => import("./updatesidebar")),
    
    },
    {
        path: navigatePath+"/dnoteview",
        component: React.lazy(() => import("./dnoteview")),
    
    },
    {
        path: navigatePath+"/salesreport",
        component: React.lazy(() => import("./salesreport")),
    
    },
    {
        path: navigatePath+"/sales/salesreturn",
        component: React.lazy(() => import("./Salesreturn")),
    },

    {
        path: navigatePath+"/purchasereturn",
        component: React.lazy(() => import("./purchasereturn/PurchaseReturn")),
    },
    {
        path: navigatePath+"/salesreturn",
        component: React.lazy(() => import("./salesreturn/SalesReturn")),
    },
 {
    path: navigatePath+"/prinvoice/:id",
    component: React.lazy(() => import("./purchasereturn/PurchaseRInvoiceViewer.jsx"))
    },
    
    {
    path: navigatePath+"/srinvoice/:id",
    component: React.lazy(() => import("./salesreturn/SalesRInvoiceViewer"))
    },
    
    {
        path: navigatePath+"/genpurchasereturn",
        component: React.lazy(() => import("./purchasereturn/GeneratePurchaseReturn")),
    },
    {
        path: navigatePath+"/gensalesreturn",
        component: React.lazy(() => import("./salesreturn/GenerateSalesReturn")),
    },
    


];

export default salesRoutes;
