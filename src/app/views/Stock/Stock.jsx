import React, { useState, useEffect } from "react";
import { Divider, Tab, Tabs, Button } from "@material-ui/core";
import { Breadcrumb, ConfirmationDialog } from "matx";
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,

    Card,
} from "@material-ui/core";
import url from "../invoice/InvoiceService"


import MUIDataTable from "mui-datatables";

import { Link } from "react-router-dom";
// import MemberEditorDialog from "../../partycontact"
// import FormDialog from "../../partycontact"
// import SimpleMuiTable from "./userview";
// import MemberEditorDialog from "./Addform";
// import ViewDialog from "./ViewEmployee";
// import AcceptQuote from "./Acceptquote";
// import UserTrash from "./userTrash";

const StockViewer = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
    const [shouldOpenViewDialog, setShouldOpenViewDialog] = useState(false);
    const [userList, setUserList] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [userid, setuserid] = useState(null);
    const [did, setdlid] = useState('');
    const [uid, setUid] = useState('');
    const [isAlive, setIsAlive] = useState(true);

    const [
        shouldOpenConfirmationDialog,
        setShouldOpenConfirmationDialog,
    ] = useState(false);

    const handleDialogClose = () => {
        setShouldOpenEditorDialog(false);
        setShouldOpenConfirmationDialog(false);
        setShouldOpenViewDialog(false);

        setIsAlive(true);
    };



    const deleteUser = (id) => {
        setdlid(id);
        console.log(id);
        console.log(did);
        setShouldOpenConfirmationDialog(true);
    }

    const handleConfirmationResponse = () => {
        url.delete(`delete-emp/${did}`);
        console.log(did);
        handleDialogClose();

    };


    useEffect(() => {

        url.get("stock").then(({ data }) => {
           const arr= data.map((item)=>{
        item['sum_purchase_qty']=item.product_purchase?.reduce((obj,val)=>obj+parseFloat(val?.quantity),0)
       
        item['sum_sales_qty']= item?.product_sales?.reduce((obj,val)=>obj+parseFloat(val?.quantity),0)
        item['initial_qty'] =console.log(parseFloat(item?.initial_quantity))
         item['sum_purchase_return_qty']=item.purchase_sale__return.filter(objs=>objs.po_number!='').reduce((obj,val)=>obj+parseFloat(val.quantity),0)
        item['sum_sales_return_qty']=item.purchase_sale__return.filter(objs=>objs.po_number=='').reduce((obj,val)=>obj+parseFloat(val.quantity),0)
        return item;
            })
     
            setDataList(arr) 
            console.log(arr)
        });
         

        // setIsAlive(false)
    }, [isAlive])

    const columns = [

        {
            name: "no", // field name in the row object
            label: "#", // column title that will be shown in table
            options: {
                customBodyRender: (
                    value, tableMeta, updatedValue
                ) => {
                    return (
                        <>
                            {tableMeta.rowData[0]}
                        </>
                    );
                },
                filter: true,
            },
        },
        {
            name: "emp_id", // field name in the row object
            label: "PRODUCT NAME", // column title that will be shown in table
            options: {
                filter: true,
            },
        },
        {
            name: "NAME", // field name in the row object
            label: "PRICE", // column title that will be shown in table
            options: {
                filter: true,
            },
        },
        // {
        //     name: "cont", // field name in the row object
        //     label: "QUANTITY", // column title that will be shown in table
        //     options: {
        //         filter: true,
        //     },
        // },
        {
            name: "EMAIL", // field name in the row object
            label: "STOCK AVAILABLE", // column title that will be shown in table
            options: {
                filter: true,
            },
        },
        {
            name: "PRESENTADD", // field name in the row object
            label: "STOCK VALUE", // column title that will be shown in table
            options: {
                filter: true,
            },
        },


        {
            name: "action",
            label: "ACTION",
            options: {
                customBodyRender: (
                    value, tableMeta, updatedValue
                ) => {
                    return (
                        <>
                            <IconButton
                                onClick={() => {
                                    setUid(tableMeta.rowData[8]);
                                    setShouldOpenViewDialog(true);
                                }}
                                tooltip="Employee Details"
                            >
                                <Icon color="secondary">visibility</Icon>
                            </IconButton>
                            {/* <IconButton
                                onClick={() => {
                                    setUid(tableMeta.rowData[8]);
                                    setShouldOpenEditorDialog(true);
                                }}
                                tooltip="Update Employee Details"
                            >
                                <Icon color="primary">edit</Icon>
                            </IconButton> */}
                            <IconButton
                                tooltip="Delete Employee"
                                onClick={(e) => deleteUser(tableMeta.rowData[8])}
                            >
                                <Icon color="error">delete</Icon>
                            </IconButton>
                        </>
                    );
                },
                filter: true,
            },
        },
    ];


    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <div className="viewer_actions px-0 flex justify-between">
                    <Breadcrumb
                        routeSegments={[
                            // { name: "Add new", path: "/sales/rfq-form/Rfqform" },
                            { name: "STOCK" },
                        ]}
                    />

                </div>
            </div>

            <MUIDataTable

                title={""}
                data={
                    dataList.map((item, index) => {
                        return [
                            ++index,
                            item.name,
                            item.name,
                            // item.contact_number,
                            ((item.sum_purchase_qty)+(item.sum_sales_return_qty)+item.initial_quantity)-((item.sum_sales_qty)+item.sum_purchase_return_qty),
                            item.present_address,
                            item.designation,
                            item.grosssalary,
                            item.emp_id,
                        ]


                    })
                }
                columns={columns}
                options={{
                    filterType: "textField",
                    responsive: "simple",

                    selectableRows: "none", // set checkbox for each row
                    // search: false, // set search option
                    // filter: false, // set data filter option
                    // download: false, // set download option
                    // print: false, // set print option
                    // pagination: true, //set pagination option
                    // viewColumns: false, // set column option
                    elevation: 0,
                    rowsPerPageOptions: [10, 20, 40, 80, 100],
                }}
            />

            {/* {shouldOpenEditorDialog && (
                <MemberEditorDialog
                    handleClose={handleDialogClose}
                    open={shouldOpenEditorDialog}
                    userid={uid}
                    data={dataList}
                    userList={setUserList}
                />
            )} */}
            {/* 
            {shouldOpenViewDialog && (
                <ViewDialog
                    handleClose={handleDialogClose}
                    open={shouldOpenViewDialog}
                    userid={uid}
                    data={dataList}
                    userList={setUserList}
                />
            )}
            {shouldOpenConfirmationDialog && (
                <ConfirmationDialog
                    open={shouldOpenConfirmationDialog}
                    onConfirmDialogClose={handleDialogClose}
                    onYesClick={handleConfirmationResponse}
                    text="Are you sure to delete?"
                />
            )} */}

        </div>
    );
};


export default StockViewer;
