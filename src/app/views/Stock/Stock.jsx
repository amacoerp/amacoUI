import React, { useState, useEffect } from "react";
import { Divider, Tab, Tabs, Button } from "@material-ui/core";
import { Breadcrumb, ConfirmationDialog } from "matx";
import './sty.css';
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
            const arr = data.map((item) => {
                item['sum_purchase_qty'] = item.product_purchase?.reduce((obj, val) => obj + parseFloat(val?.quantity), 0)

                item['sum_sales_qty'] = item?.product_sales?.reduce((obj, val) => obj + parseFloat(val?.quantity), 0)
                item['initial_qty'] = console.log(parseFloat(item?.initial_quantity))
                item['sum_purchase_return_qty'] = item.purchase_sale__return?.filter(objs => objs.po_number != '').reduce((obj, val) => obj + parseFloat(val.quantity), 0)
                item['sum_sales_return_qty'] = item.purchase_sale__return?.filter(objs => objs.po_number == '').reduce((obj, val) => obj + parseFloat(val.quantity), 0)
                return item;
            })

            setDataList(arr)
            console.log(arr)
        });


        // setIsAlive(false)
    }, [isAlive])



    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <div className="viewer_actions px-0 flex justify-between">
                    <Breadcrumb
                        routeSegments={[
                            { name: "STOCK" },
                        ]}
                    />

                </div>
            </div>
            <Card className="mb-4" style={{ padding: '10px' }} elevation={0} borderRadius="borderRadius" >

                <div className="row " >
                    <div className="col slHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>S.NO.</div>
                    <div className="col catHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>CATEGORY</div>
                    <div className="col subHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>SUB CATEGORY</div>
                    <div className="col prodHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>PRODUCT</div>
                    <div className="col priceHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>PRICE</div>
                    <div className="col stockHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>STOCK</div>
                    <div className="col stockValue" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>STOCK VALUE</div>
                </div>
                <div className="">
                    {dataList?.map((item, i) => {
                        return <div className="row" key={i}>
                            <div className="col slno">
                                {++i}
                            </div>
                            <div className="col capitalize catCol">{item?.name}</div>
                            <div className="col">{item?.product_category?.map((subItem, si) => {
                                return <>
                                    <div className="row" key={si}>
                                        <div className="col capitalize subCol">{subItem?.name}</div>
                                        <div className="col">{subItem?.product?.map((prod, pi) => {
                                            const sum = ((parseInt(prod?.purchaseQuantity) + parseInt(prod?.salesReturnQuantity) + parseInt(prod?.initial_quantity)) + (parseInt(prod?.salesQuantity) - parseInt(prod?.purchaseReturnQuantity)));
                                            return <>
                                                <div className="row" key={pi}>
                                                    <div className="col prodCol">{prod.name}</div>
                                                    <div className="col priceHead">{parseFloat(prod?.latestPrice[0]?.purchase_price) ? parseFloat(prod?.latestPrice[0]?.purchase_price) : 0}</div>
                                                    <div className="col stockHead">{sum}</div>
                                                    <div className="col stockValue">{(sum * (parseFloat(prod?.latestPrice[0]?.purchase_price) ? parseFloat(prod?.latestPrice[0]?.purchase_price) : 0))}</div>
                                                </div>
                                            </>
                                        })}</div>
                                    </div>

                                </>
                            })}</div>
                        </div>

                    })}
                </div>
                {/* 
                <br />
                <br />
                <br />
                <br />
                <Table>
                    <TableHead style={{ backgroundColor: '#1d2257', display: 'table-row-group' }}>
                        <TableRow>
                            <TableCell className="pl-0" style={{ border: "1px solid #ccc", fontFamily: "Calibri", color: "#fff", fontWeight: '1000', fontSize: 16 }} align="center">S.No.</TableCell>
                            <TableCell className="px-0" style={{ border: "1px solid #ccc", fontFamily: "Calibri", color: "#fff", fontWeight: '1000', fontSize: 16 }} align="center">CATEGORY</TableCell>
                            <TableCell className="px-0" style={{ border: "1px solid #ccc", fontFamily: "Calibri", color: "#fff", fontWeight: '1000', fontSize: 16 }} align="center">SUB CATEGORY</TableCell>
                            <TableCell className="px-0" style={{ border: "1px solid #ccc", fontFamily: "Calibri", color: "#fff", fontWeight: '1000', fontSize: 16 }} align="center">PRODUCT</TableCell>
                            <TableCell className="px-0" style={{ border: "1px solid #ccc", fontFamily: "Calibri", color: "#fff", fontWeight: '1000', fontSize: 16 }} align="center">PRICE</TableCell>
                            <TableCell className="px-0" style={{ border: "1px solid #ccc", fontFamily: "Calibri", color: "#fff", fontWeight: '1000', fontSize: 16 }} align="center">STOCK</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataList?.map((item, i) => {
                            return <TableRow key={i}>
                                <TableCell align='center'>{++i}</TableCell>
                                <TableCell width="300" align='center'>{item?.name}</TableCell>
                                {item.product_category?.map((subItem, si) => {
                                    return <>
                                        <TableRow key={si}>
                                            <TableCell colSpan={15} align='center'>{subItem?.name}</TableCell>
                                            {subItem.product?.map((proItem, pi) => {
                                                const sum = ((parseInt(proItem?.purchaseQuantity) + parseInt(proItem?.salesReturnQuantity) + parseInt(proItem?.initial_quantity)) + (parseInt(proItem?.salesQuantity) - parseInt(proItem?.purchaseReturnQuantity)));
                                                return <>
                                                    <TableRow key={pi}>
                                                        <TableCell style={{}}>
                                                            {proItem?.name}
                                                        </TableCell >
                                                        <TableCell style={{}}>
                                                            {proItem?.latestPrice[0]?.purchase_price}
                                                        </TableCell>
                                                        <TableCell style={{}}>
                                                            {sum}
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            })}
                                        </TableRow>
                                    </>
                                })}

                            </TableRow>
                        })}

                    </TableBody>
                </Table> */}

            </Card>


        </div >
    );
};


export default StockViewer;
