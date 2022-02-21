import React, { useState, useEffect, useRef } from "react";
import { Breadcrumb, ConfirmationDialog } from "matx";
import { useReactToPrint } from 'react-to-print';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../../views/statements/Header';
import Footer from '../../views/statements/Footer';
import './sty.css';
import {
    IconButton, Button,
    Table, TextField, InputAdornment,
    TableHead, Divider,
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

const useStyles = makeStyles(({ palette, ...theme }) => ({


    "@global": {



        "@media print": {


            "body, html,div,h3,h4,h5,h6": {
                visibility: "hidden",
                size: "auto",

                content: 'none !important',
                "-webkit-print-color-adjust": "exact !important",
                // marginTop:'10px',
                counterIncrement: 'page',
                fontSize: '11pt'








            },

            "#table": {
                'font-family': "Calibri",
                'font-size': '11pt',
                'empty-cells': "hide"
            },
            /* You can add additional styles here which you need */
            "#abc": {
                height: '1px !important', /* overwrites any other rules */
                backgroundColor: '#FFFFFF',
            },
            "#editIcon": {
                display: 'none'
            },


            "#header": {
                // padding: "10px",

                /* These do the magic */
                position: "fixed",
                marginTop: '100px',
                left: 0,
                paddingTop: 130,
                justifySelf: "end"

            },
            ".empty-header": {
                height: "100px",
                marginTop: '10px',


            },
            ".empty-footer": {
                height: "100px",
                marginTop: '10px',



            },
            ".header": {
                position: "fixed",
                height: "100px",
                top: 0,


            },
            ".footer": {
                position: "fixed",
                height: "100px",
                bottom: 0,
                width: "100%",

            },



            "#footer": {

                backgroundColor: "#F8F8F8",
                borderTop: "1px solid #E7E7E7",
                textAlign: "center",

                bottom: "0",
                position: 'fixed',
                width: "100%",
                justifySelf: "end"
                // 'counter-increment': page,
                // eslint-disable-next-line no-undef

                // content: counter(pageBreakAfter),


            },

            // "#table": {
            //   // display: "-webkit-box",
            //   // display: "-ms-flexbox",
            //   // // display: "right",
            //   // width: "650px",
            //   // margin: "15px",
            //   // position: "absolute",
            //   fontSize:6



            //   // top: "38.9cm !important",
            //   // paddingRight: "24cm !important"
            // },
            //   "#footer": {
            //     display:"-webkit-box",
            // display: "-ms-flexbox",
            // display: "center",
            // width: "100%",
            // position: "absolute",

            // top: "38.9cm !important",
            // paddingRight: "12cm !important"
            //    },
            "#print-area": {
                // top: 10,
                left: 0,
                right: 0,

                // height: "100%",
                // marginTop: "10px",
                // marginBottom:'30px',
                boxDecorationBreak: 'clone',
                position: 'relative',



                "& *": {
                    visibility: "visible",
                },
            },


        },

    },

}))

const StockViewer = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
    const [shouldOpenViewDialog, setShouldOpenViewDialog] = useState(false);
    const [userList, setUserList] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [sl, setSl] = useState('')
    const [other, setOther] = useState([])
    const [userid, setuserid] = useState(null);
    const [did, setdlid] = useState('');
    const [uid, setUid] = useState('');
    const [isAlive, setIsAlive] = useState(true);
    const [allOther, setAllOther] = useState([])
    const [allDataList, setAllDataList] = useState([])
    const [msg, setMsg] = useState('')
    const componentRef = useRef();
    const [state, setstate] = useState([])



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

    const handlePrinting = useReactToPrint({
        content: () => componentRef.current,
        header: () => componentRef.current
    });


    useEffect(() => {

        url.get("stock").then(({ data }) => {
            setDataList(data.category)
            setOther(data.other)
            console.log(data)
            setAllOther(data.other)
            setAllDataList(data.category)
        });

        url.get('company').then(({ data }) => {
            setstate(data[0])
        })


        // setIsAlive(false)
    }, [isAlive])

    const handleInputChange = (event) => {

        setDataList(allDataList.filter(obj => obj.name.toLowerCase().includes(event.target.value.toLowerCase())))
        setOther(allOther.filter(obj => obj.name.toLowerCase().includes(event.target.value.toLowerCase())))
        if (!other.length && !dataList.length) {
            setMsg('Sorry, no matching records found')
        } else {
            setMsg('')
        }
    };

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
            <Card className="mb-4" style={{ padding: '20px' }} elevation={0} borderRadius="borderRadius" >
                {/* <Button
                    variant="outlined"
                    color="primary"
                    style={{ float: 'right' }}

                    className="mr-4 p-2"
                    onClick={(e) => { handlePrinting() }}>PRINT</Button> */}
                <TextField
                    className="mt-4"
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>search</Icon>
                            </InputAdornment>
                        ),
                    }}
                ></TextField>
                <br />
                <br />
                <br />

                <div ref={componentRef} style={{ position: 'relative', left: 20 }}>
                    {/* <div style={{ display: 'none' }} className="printHead"> */}
                    {/* <br /> */}
                    <table>

                        {/* <Header id='header'></Header> */}

                        <tbody>

                            <tr>

                                <td>
                                </td>
                            </tr>


                            {/* </div> */}

                            <div className='print-body'>

                                <div className="pl-2 pt-5 flex justify-center" style={{ borderTop: '1px solid #ccc', }}>

                                    <div className="flex">
                                        <div className="pl-0 px-0 mb-4 mr-24 justify-center">
                                            {/* <center><h3><strong> STOCK DETAILS</strong></h3></center> */}
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{flexWrap:'nowrap'}}>
                                    <div className="col slHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>S.NO.</div>
                                    <div className="col catHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>CATEGORY</div>
                                    <div className="col subHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>SUB CATEGORY</div>
                                    <div className="col prodHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>PRODUCT</div>
                                    <div className="col priceHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>PRICE</div>
                                    <div className="col stockHead" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>STOCK</div>
                                    <div className="col stockValue" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontWeight: '1000', backgroundColor: '#1d2257', color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }}>STOCK VALUE</div>
                                </div>
                                <div className="pbdody">
                                    {msg &&
                                        <div style={{ padding: '10px' }}>
                                            <center>{msg}</center></div>
                                    }
                                    {dataList?.map((item, i) => {

                                        return <div className="row" key={i} style={{flexWrap:'nowrap'}}>
                                            <div className="col slno">
                                                {++i}
                                            </div>
                                            <div className="col capitalize catCol">{item?.name}</div>
                                            {item?.product_category.length ? <div className="col">{item?.product_category?.map((subItem, si) => {
                                                return <>
                                                    <div className="row" key={si} style={{flexWrap:'nowrap'}}>
                                                        <div className="col capitalize subCol">{subItem?.name}</div>
                                                        {subItem?.product.length ? <div className="col">{subItem?.product?.map((prod, pi) => {
                                                            const sum = ((parseInt(prod?.purchaseQuantity) + parseInt(prod?.salesReturnQuantity) + parseInt(prod?.initial_quantity)) + (parseInt(prod?.salesQuantity) - parseInt(prod?.purchaseReturnQuantity)));
                                                            return <>
                                                                <div className="row" key={pi} style={{flexWrap:'nowrap'}}>
                                                                    <div className="col prodCol">{prod.name}</div>
                                                                    <div className="col priceCol">{parseFloat(prod?.latestPrice[0]?.purchase_price) ? parseFloat(prod?.latestPrice[0]?.purchase_price) : 0}</div>
                                                                    <div className="col stockCol">{sum}</div>
                                                                    <div className="col stockVCol">{(sum * (parseFloat(prod?.latestPrice[0]?.purchase_price) ? parseFloat(prod?.latestPrice[0]?.purchase_price) : 0))}</div>
                                                                </div>
                                                            </>
                                                        })}</div> :
                                                            <>
                                                                <div className="col prodCol">--</div>
                                                                <div className="col priceCol">--</div>
                                                                <div className="col stockCol">--</div>
                                                                <div className="col stockVCol">--</div>
                                                            </>
                                                        }

                                                    </div>

                                                </>
                                            })}</div> :
                                                <>
                                                    <div className="col subCol">--</div>
                                                    <div className="col prodCol">--</div>
                                                    <div className="col priceCol">--</div>
                                                    <div className="col stockCol">--</div>
                                                    <div className="col stockVCol">--</div>
                                                </>
                                            }

                                        </div>

                                    })}
                                    {other?.map((prod, i) => {
                                        const sum = ((parseInt(prod?.purchaseQuantity) + parseInt(prod?.salesReturnQuantity) + (prod?.initial_quantity == null ? 0 : parseInt(prod?.initial_quantity))) + (parseInt(prod?.salesQuantity) - parseInt(prod?.purchaseReturnQuantity)));

                                        return <>
                                            <div className="row" style={{flexWrap:'nowrap'}}>
                                                <div className="col slno">{(parseInt(dataList.length) + (++i))}</div>
                                                <div className="col catCol">--</div>
                                                <div className="col subCol">--</div>
                                                <div className="col prodCol">
                                                    {prod.name}
                                                </div>
                                                <div className="col priceCol">{parseFloat(prod?.latestPrice[0]?.purchase_price) ? parseFloat(prod?.latestPrice[0]?.purchase_price).toLocaleString(undefined, { minimumFractionDigits: 2 }) : 0}</div>
                                                <div className="col stockCol">{sum}</div>
                                                <div className="col stockVCol">{(sum * (parseFloat(prod?.latestPrice[0]?.purchase_price) ? parseFloat(prod?.latestPrice[0]?.purchase_price) : 0.00)).toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>

                                            </div>

                                        </>
                                    })}
                                </div>
                            </div>
                        </tbody>



                        <tfoot><div class="empty-footer"></div>
                        </tfoot>
                    </table>
                    <div style={{ display: 'none' }} class="footer">
                        <footer>
                            <div >
                                <div id="outer" class="outer" style={{ "position": "relative", width: '1050px', backgroundColor: '#c1c1c1', "transform": "skew(-20deg)", marginLeft: '40px', marginRight: '50px' }}>
                                    <p style={{ color: '#fff', paddingTop: 5, paddingBottom: 5, "transform": "skew(20deg)" }} align="center"> Tel.: {state.contact}| Fax: {state.fax} | P.O.Box {state.po_box} | Jubail 31951 | Kingdom of Saudi Arabia</p>
                                    <div id="spacer" style={{ width: "200px", height: "10px", marginRight: 0, }}></div>
                                    <div style={{ "position": "fixed", bottom: 0, width: "100%", height: 30, backgroundColor: "#1d2257", }}> <p style={{ textAlign: 'center', color: 'white', fontFamily: "Calibri", paddingTop: 5, paddingBottom: 10, "transform": "skew(20deg)" }}>E-mail: {state.email} | Website: {state.website}</p></div>
                                </div>
                            </div>
                        </footer>
                    </div>

                </div>

            </Card>


        </div >
    );
};


export default StockViewer;