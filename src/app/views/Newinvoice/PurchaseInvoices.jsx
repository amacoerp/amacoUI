import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon, Tooltip } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url, { navigatePath } from "../invoice/InvoiceService";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    TableRow,
    Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        float: 'right',
        background: 'blue',
        color: 'white',

    },
    input: {
        display: "none"
    },
    columnStyleWithWidthSno: {
        top: "0px",
        left: "0px",
        zIndex: "50",
        position: "sticky",
        backgroundColor: "#fff",
        width: "50px",
        textAlign: "center"
    },
    columnStyleWithWidth: {
        top: "0px",
        left: "0px",
        zIndex: "100",
        position: "sticky",
        backgroundColor: "#fff",
        width: "300px",
        wordBreak: "break-word",
        hyphens: "auto",
        textAlign: "center",
        paddingRight: 30

    }

}));
const SimpleMuiTable = () => {
    const [isAlive, setIsAlive] = useState(true);
    const [userList, setUserList] = useState([]);
    const [podetails, setpodetails] = useState([]);
    const [poid, setpoid] = useState("");
    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
    const classes = useStyles();
    useEffect(() => {



        url.get("purchase-invoice").then(({ data }) => {
            // if (isAlive) setUserList(data);
            // var myJSON = JSON.stringify(data.id);

            if (isAlive) setUserList(data);

            if (data.length) {

                setpoid(data[0].id)
                console.log(data);
                setpodetails(data);
            }
        });
        return () => setIsAlive(false);
    }, [isAlive]);
    const [count, setCount] = useState(0);
    const history = useHistory();
    const handeViewClick = (invoiceId) => {

        history.push(`/rfqanalysis/${invoiceId}`);
    };

    function getrow(id) {
        url.get("rfq/" + id).then(({ data }) => {
            if (isAlive) setpodetails(data[0].podetails);
        });
        return () => setIsAlive(false);
    }
    function Increment(e) {
        alert('3')
    }
    function Decrement() {
        setCount(count - 1);
    }
    const [showInvoiceEditor, setShowInvoiceEditor] = useState(false);
    const [isNewInvoice, setIsNewInvoice] = useState(false);

    const [click, setClick] = useState([]);

    const addNumber = () => {
        setClick([
            ...click,
            {
                id: click.length,
                value: Math.random() * 10
            }
        ]);
    };
    const removeData = (id) => {
        // alert(id)
        // let url = `https://jsonplaceholder.typicode.com/users/${id}`
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'danger',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                url.delete(`quotation/${id}`)
                    .then(res => {
                        getrow()
                        Swal.fire(
                            'Deleted!',
                            'Your imaginary file has been deleted.',
                            'success'
                        )

                    })


                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
        // url.delete(`http://dataqueuesystems.com/amaco/amaco/public/api/products/${id}`)
        // .then(res => {


        // })
        // getrow()
        // url.delete(url).then(res => {
        //     const del = employees.filter(employee => id !== employee.id)
        //     setEmployees(del)
        //     
        // })
    }
    const columns = [
        {
            name: "index", // field name in the row object
            label: "S.NO.", // column title that will be shown in table
            options: {
                filter: true,
                customHeadRender: ({ index, ...column }) => {
                    return (
                        <TableCell key={index} style={{ width: 80 }}>
                            <span className="pl-2">S.NO.</span>
                        </TableCell>
                    )
                }
            },
        },
        {
            name: "id", // field name in the row object
            label: "PO NUMBER", // column title that will be shown in table
            options: {
                filter: true,
            },
        },
        {
            name: "id", // field name in the row object
            label: "INVOICE NUMBER", // column title that will be shown in table
            options: {
                filter: true,
            },
        },
        {
            name: "firm_name",
            label: "COMPANY NAME",
            options: {

                customHeadRender: ({ index, ...column }) => {
                    return (
                        <TableCell key={index} className={classes.columnStyleWithWidth} inputProps={{ style: { textTransform: 'capitalize' } }}>
                            <span>COMPANY NAME</span>
                        </TableCell>
                    )
                },
                setCellProps: () => ({
                    align: "center",
                    // width:600,
                    wordWrap: 'break'
                })
            },
        },
        {
            name: "firm_name",
            label: "ISSUE DATE",
            options: {

                customHeadRender: ({ index, ...column }) => {
                    return (
                        <TableCell key={index} className={classes.columnStyleWithWidth} inputProps={{ style: { textTransform: 'capitalize' } }}>
                            <span>ISSUE DATE</span>
                        </TableCell>
                    )
                },
                setCellProps: () => ({
                    align: "center",
                    // width:600,
                    wordWrap: 'break'
                })
            },
        },
        // {
        //   name: "issue_date",
        //   label: "ISSUE DATE",
        //   options: {
        //     filter: true,

        //   },
        // },
        {
            name: "id",
            label: "AMOUNT",
            options: {
                customHeadRender: ({ index, ...column }) => {
                    return (
                        <TableCell key={index} className="pr-2" style={{ textAlign: 'right' }}>
                            <span textAlign="right" >AMOUNT</span>
                        </TableCell>
                    )
                },

                setCellProps: () => ({
                    align: "right",
                    // paddingLeft:24
                })
            }
        },
        // {
        //   name: "status",
        //   label: "STATUS",
        //   options: {
        //     filter: true,
        //   },
        // },

        //   {
        //     name: "id",
        //     label: "Action",
        //     options: {
        //         filter: true,
        //         customBodyRender: (value, tableMeta, updateValue) => {
        //              
        //             return (
        //             <IconButton onClick={() => removeData(tableMeta.rowData[4])
        //             }
        //             >
        //                     <Icon>close</Icon>
        //             </IconButton>


        //             )

        //         },
        //     },
        // },
        {
            name: "id",
            label: "ACTION",
            options: {
                filter: true,
                customHeadRender: ({ index, ...column }) => {
                    return (
                        <TableCell key={index} style={{ textAlign: "right" }} className="pr-8">
                            <span style={{ marginLeft: 18 }}>ACTION</span>
                        </TableCell>
                    )
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    console.log(tableMeta.rowData)
                    return (
                        <div style={{ textAlign: "right" }} className="pr-8">
                            <Link to={navigatePath + "/piview/" + tableMeta.rowData[7]}>
                                <Tooltip title="view more">
                                    <Icon color="primary">remove_red_eye</Icon>
                                </Tooltip>
                            </Link>
                            {/* <Link to={"/sales/rfq-form/rfqanalysis?id=" + tableMeta.rowData[0]}>
            <IconButton>
              <Icon color="secondary">find_in_page</Icon>
            </IconButton>
          </Link> */}
                        </div>

                    )

                },
            },
        },
        {
            name: "",
            label: "Action",
            options: {
                filter: true,
                display: false
            },
        },
    ];



    return (
        <div>
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            // { name: "Add new", path: "/sales/rfq-form/Rfqform" },
                            { name: "PURCHASE INVOICE" },
                        ]}
                    />

                    <div className="text-right">
                        <Link to={"/purchaseinvoicegenarate"}>
                            <Button
                                className="py-2"
                                variant="outlined"
                                color="primary"
                            >
                                <Icon>add</Icon> GENERATE PURCHASE INVOICES
                            </Button>
                        </Link>
                    </div>
                </div>
                <MUIDataTable
                    title={"PURCHASE INVOICE"}
                    data={podetails.filter(obj => obj.div_id == localStorage.getItem('division')).map((item, index) => {
                        return [
                            ++index,
                            item?.po_number ? item?.po_number : "--",
                            item?.invoice_no ? item?.invoice_no : "--",

                            item?.party?.firm_name,

                            moment(item?.issue_date).format('DD MMM YYYY'),
                            parseFloat(item?.grand_total).toLocaleString(undefined, { minimumFractionDigits: 2 }),

                            item?.status,
                            item?.id
                            // moment(item.created_at).format('DD-MM-YYYY'),
                            // (parseFloat(item.net_amount)).toFixed(2),
                            // item.id
                        ]

                    })}
                    columns={columns}
                    options={{
                        // filterType: "textField",
                        // responsive: "simple",
                        // selectableRows: "none", // set checkbox for each row
                        // search: false, // set search option
                        // filter: false, // set data filter option
                        // download: false, // set download option
                        // print: false, // set print option
                        // pagination: true, //set pagination option
                        // viewColumns: false, // set column option
                        // elevation: 0,
                        rowsPerPageOptions: [10, 20, 40, 80, 100],
                        selectableRows: "none",
                        filterType: "dropdown",
                        // responsive: "scrollMaxHeight",
                        rowsPerPage: 10,

                    }}
                />
            </div>
        </div>
    );
}


export default SimpleMuiTable;
