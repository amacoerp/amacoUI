import React, { useState, useEffect, useRef } from "react";
import { borders } from '@material-ui/system';
import converter from 'number-to-words';
import Arabic from '../../../lang/ar.json';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useReactToPrint } from 'react-to-print';
// import { IntlProvider } from "react-intl-number-format"
import { FormattedMessage } from 'react-intl';
import moment from "moment";
import history from "history.js";
// import translate from 'google-translate-api';
import { Translator, Translate } from 'react-auto-translate';
import { toArabic } from 'arabic-digits';
import Header from '../../views/statements/Header';
import Footer from '../../views/statements/Footer';
import {
    Icon,
    Divider,
    Grid,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    Card,
    Button
} from "@material-ui/core";
import ViewDialog from "./ViewDialog";

import { Link, useParams } from "react-router-dom";
import { ApiKey, getInvoiceById, navigatePath } from "../invoice/InvoiceService";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import axios from "axios";
import { cond, result } from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import url from "../invoice/InvoiceService";
import { basePath } from "../invoice/InvoiceService";
import logo from './../invoice/amaco-logo.png';
import NLogo from './am.png';

import logos from './../invoice/vision2030.png';
import { numberToWords } from 'number-to-words';


import Swal from "sweetalert2";
import useSettings from '../../hooks/useSettings';
import { setCORS } from "google-translate-api-browser";
import { ToWords } from 'to-words';
import translate from 'translate-google-api';
import Axios from 'axios';
import QRCode from "qrcode.react";



// import translate from 'google-translate-api'
// const translate = require('google-translate-api');
const locale = navigator.language;
// const translate = require('google-translate-api');
const config = {
    headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "method": "GET"
    },
};
// const translate = require('google-translate-open-api').default;








// import Image from 'react-image-resizer';


const useStyles = makeStyles(({ palette, ...theme }) => ({

    "@global": {



        "@media print": {


            "body, html": {
                visibility: "hidden",
                size: "auto",

                content: 'none !important',
                "-webkit-print-color-adjust": "exact !important",

                marginTop: '10px'





            },


            "#header": {
                // padding: "10px",

                /* These do the magic */
                position: "fixed",
                //top: '1em',
                left: 0,
                // paddingBottom:130
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
            },
            "#noprint": {
                visibility: 'hidden'
            },
            "#table": {
                display: "-webkit-box",
                display: "-ms-flexbox",
                // display: "right",
                width: "650px",
                margin: "15px",
                position: "absolute",



                // top: "38.9cm !important",
                // paddingRight: "24cm !important"
            },
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
    invoiceViewer: {


    },
}));


const InvoiceViewer = ({ toggleInvoiceEditor }) => {
    const [state, setState] = useState({});
    const [rfq, setrfq] = useState([]);
    const [rdate, setrdate] = useState([]);
    const [ddate, setddate] = useState([]);
    const [cname, setcname] = useState([]);
    const [cname_ar, setcname_ar] = useState([]);
    const [company, setcompany] = useState("");
    const [city, setcity] = useState("");
    const [city_ar, setcity_ar] = useState();
    const [street, setstreet] = useState("");
    const [street_ar, setstreet_ar] = useState("");
    const [pono, setpo] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [vatno, setvatno] = useState("");
    const [vatno_ar, setvatno_ar] = useState("");
    const [podetails, setpodetails] = useState([]);
    const [quoteno, setquoteno] = useState("");
    const [vat_in_value, setvat_in_value] = useState("");
    const [total_value, settotal_value] = useState("");
    const [net_amount, setnet_amount] = useState(0);
    const [firm_name_in_ar, setfirm_name_in_ar] = useState("");
    const [invoiceno, setinvoiceno] = useState("");
    const [issue_date, setissue_date] = useState("");
    const [dis_per, setdis_per] = useState(0);
    const [res, setres] = useState("");
    const [ress, setress] = useState("");
    const { id } = useParams();
    const classes = useStyles();
    const { settings, updateSettings } = useSettings();
    const [arcompany, setarcompany] = useState("");
    const [araddress, setaraddress] = useState("");
    const [quoteid, setquoteid] = useState("");
    const [companyaddress, setcompanyaddress] = useState("");
    const componentRef = useRef();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [shouldOpenViewDialog, setShouldOpenViewDialog] = useState(false);
    const [file, setFile] = useState('');
    const [fileType, setFileType] = useState('');
    const [currency_type, setcurrency_type] = useState('SAR');
    const fType = ["jpg", "png", "peg"];

    const [qrValue, setQrValue] = useState("");



    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    const handlePrinting = useReactToPrint({
        content: () => componentRef.current,
        header: () => componentRef.current


    });



    function handleClose() {
        setAnchorEl(null);
    }
    const ans = new Intl.NumberFormat('en-IN', {
        notation: "compact",
        compactDisplay: "short",
        style: 'currency',
        currency: 'INR'
    }).format(1000).replace("T", "K")

    const toWords = new ToWords({
        localeCode: 'en-IN',
        converterOptions: {
            currency: true,
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
        }
    });
    let fval;
    const myFunction = async () => {
        const result = await translate(`I'm fine.`, {
            tld: "cn",
            to: "ar",
            proxy: {
                host: '127.0.0.1',
                port: 9000,
                auth: {
                    username: 'mikeymike',
                    password: 'rapunz3l'
                }
            }
        });


    }


    useEffect(() => {
        console.log(basePath);
        myFunction()
        document.title = "VAT Invoice - Amaco"
        url.get("purchase-invoice/" + id).then(({ data }) => {
            // console.log('a', );
            document.title = `AMACO INVOICE - ${data[0]?.party?.firm_name} - ${data[0]?.invoice_no}`
            if (data) {

                setFile(data[0].file);
                if (data[0].file) {
                    var type = data[0].file.slice(-3);
                    type = type.toLowerCase();

                    setFileType(type);
                }

                setquoteid(data[0].quotation_id ? data[0].quotation_id : id)
                setdis_per(data[0].discount_in_percentage)
                setpodetails(data[0].purchase_invoice_detail)
                setcompany(data[0].party?.firm_name)
                setcname_ar(data[0].party?.firm_name_in_ar)
                setcity(data[0].party?.city)
                setstreet(data[0].party?.street)
                setzipcode(data[0].party?.zip_code)
                setpo(data[0].quotation ? data[0].quotation.po_number : data[0].po_number)
                setvatno(data[0].party?.vat_no)
                setvatno_ar(toArabic(data[0].party?.vat_no))
                setinvoiceno(data[0].invoice_no)
                setissue_date(data[0].issue_date)
                setvat_in_value(data[0].vat_in_value)
                setnet_amount(data[0].grand_total)
                settotal_value(data[0].total_value)
                setfirm_name_in_ar(data[0].party?.firm_name_in_ar)
                setcurrency_type(data[0].currency_type)
                let words = toWords.convert(parseFloat(data[0].grand_total));
                let riyal = words.replace("Rupees", "Riyals");
                let halala = riyal.replace("Paise", "Halala")
                let words1 = numberToWords.toWords(data[0].grand_total);
                let decimal = parseFloat(parseFloat(data[0].grand_total).toFixed(2).split('.')[1]);
               
                if (parseFloat(data[0].grand_total) % 1 === 0) {
                    halala = riyal.replace("Paise", "Halala");
                }
                else {
                    halala = riyal.replace("Paise", "Halalas");
                }

                setQrValue(data[0].party?.firm_name + "                                                         " + data[0].party?.firm_name_in_ar + "                                              VAT NUMBER :" + data[0].party?.vat_no + "                                              " + "DATE : " + data[0].issue_date + "                                              INVOICE NUMBER : " + data[0].invoice_no + "                                              VAT AMOUNT : " + data[0].vat_in_value + " SAR" + "                                              GRAND TOTAL :" + data[0].grand_total + " SAR");

                if (data[0].currency_type == "SAR") {
                    console.log(data[0].currency_type)
                    setress(words1.split(",").join(" ") + " Riyals " + ((parseFloat(data[0].grand_total.split('.')[1]) !== NaN) ? (parseFloat(data[0].grand_total.split('.')[1]) == 0.00 ? "." : (decimal ? " & " + (numberToWords?.toWords(decimal)) + " Halalas." : "")) : " "));
                  }
                  if (data[0].currency_type == "AED") {
                    setress(words1.split(",").join(" ") + " Dirham " + ((parseFloat(data[0].grand_total.split('.')[1]) !== NaN) ? (parseFloat(data[0].grand_total.split('.')[1]) == 0.00 ? "." : (decimal ? " & " + (numberToWords?.toWords(decimal)) + " fils." : "")) : " "));
                  }
                  if (data[0].currency_type == "USD") {
                    setress(words1.split(",").join(" ") + " Dollars" + ((parseFloat(data[0].grand_total.split('.')[1]) !== NaN) ? (parseFloat(data[0].grand_total.split('.')[1]) == 0.00 ? "." : (decimal ? " & " + (numberToWords?.toWords(decimal)) + " Cents." : "")) : " "))
                  }
                // setress(halala);
                setstreet_ar(data[0]?.party?.street_ar)
                setcity_ar(data[0]?.party?.city_ar);
                const arr = data[0]?.party?.street + data[0]?.party?.city + data[0]?.party?.zip_code;
                // console.log(arr)
                //         Axios.post(`https://translation.googleapis.com/language/translate/v2?key=${ApiKey}&q=${data[0].party?.street}&target=ar`, {
                //       method: 'POST',
                //       headers: { 
                //         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                // "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
                // "Access-Control-Max-Age": 86400
                //       },
                //     })
                //       .then(({ data }) => {
                //           setstreet(data.data.translations[0].translatedText);
                //           // console.log(data.data.translations[0].translatedText);

                //       })
            }
            //     Axios.post(`https://translation.googleapis.com/language/translate/v2?key=${ApiKey}&q=${data[0].party?.city}&target=ar`, {
            //       method: 'POST',
            //       headers: { 
            //         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            // "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
            // "Access-Control-Max-Age": 86400
            //       },
            //     })
            // .then(({ data }) => {
            //     setcity(data.data.translations[0].translatedText);
            //     // console.log(data.data.translations[0].translatedText);

            // })




        })

    }, [id]);
    const updateSidebarMode = (sidebarSettings) => {
        if (sidebarSettings.mode == "close") {
            let activeLayoutSettingsName = settings.activeLayout + "Settings";
            let activeLayoutSettings = settings[activeLayoutSettingsName];
            updateSettings({
                ...settings,
                [activeLayoutSettingsName]: {
                    ...activeLayoutSettings,
                    leftSidebar: {
                        ...activeLayoutSettings.leftSidebar,
                        ...sidebarSettings,
                    },
                },
            });
        }
        else {

            history.push(navigatePath + "/purchaseinvoiceview")
            // let activeLayoutSettingsName = settings.activeLayout + "Settings";
            // let activeLayoutSettings = settings[activeLayoutSettingsName];
            // updateSettings({
            //   ...settings,
            //   [activeLayoutSettingsName]: {
            //     ...activeLayoutSettings,
            //     leftSidebar: {
            //       ...activeLayoutSettings.leftSidebar,
            //       ...sidebarSettings,
            //     },
            //   },
            // });

        }

    }

    const counter = (i) => {
        ++i;
    }
    const dnotegenrate = (sidebarSettings) => {


        history.push(`/dnote/${quoteid}`)

    }
    const invoicegenrate = (sidebarSettings) => {
        // alert(id)
        const postatus = {
            status: "po"
        }
        // let url = `https://jsonplaceholder.typicode.com/users/${id}`
        // Swal.fire({
        //   title: 'Are you sure?',
        //   text: 'You want to convert this quotation into Purchase Order !',
        //   icon: 'danger',
        //   showCancelButton: true,
        //   confirmButtonText: 'Yes,!',
        //   icon: 'warning',
        //   cancelButtonText: 'No, keep it'
        // }).then((result) => {
        //   if (result.value) {

        //     url.put(url + '/' + id, postatus)
        //       .then(res => {

        //  let activeLayoutSettingsName = settings.activeLayout + "Settings";
        //         let activeLayoutSettings = settings[activeLayoutSettingsName];
        //         updateSettings({
        //           ...settings,
        //           [activeLayoutSettingsName]: {
        //             ...activeLayoutSettings,
        //             leftSidebar: {
        //               ...activeLayoutSettings.leftSidebar,
        //               ...sidebarSettings,
        //             },
        //           },
        //         });
        url.put('invoice/' + id)
            .then(res => {

                window.location.href = `../invview/${id}`
                //   Swal.fire(
                //     'PO!',
                //     ' has been generated.',
                //     'success'
                //   )

            })



        // } else if (result.dismiss === Swal.DismissReason.cancel) {
        //   Swal.fire(
        //     'Cancelled',
        //     '........:)',
        //     'error'
        //   )
        // }
        // })

    }


    const deleteinvoice = () => {
        handleClose()
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Invoice!',
            icon: 'danger',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            icon: 'warning',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                url.delete(`purchase-invoice/${id}`)
                    .then(res => {
                        console.log(res);


                        Swal.fire(
                            'Deleted!',
                            'Invoice has been deleted.',
                            'success'
                        )


                        history.push("/purchaseinvoiceview")

                    })



            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your Invoice is safe :)',
                    'error'
                )
            }
        })
    }


    const handleDialogClose = () => {
        setShouldOpenViewDialog(false);

    };


    const handlePrint = () => window.print();
    window.onafterprint = function () {
        window.close()
        window.location.href = ``
    };

    let subTotalCost = 0;
    let {
        orderNo,
        buyer,
        seller,
        item: invoiceItemList = [],
        status,
        vat,
        date,
    } = state;

    return (
        <Card elevation={6} className="m-sm-30">
            <div className={clsx("invoice-viewer py-4", classes.invoiceViewer)}>
                <div className="viewer_actions px-4 mb-5 flex items-center justify-between">
                    <Link onClick={() => updateSidebarMode({ mode: "on" })}>
                        <IconButton>
                            <Icon>arrow_back</Icon>
                        </IconButton>
                    </Link>
                    <div>
                        {/* <Button
            className="mr-4 py-2"
            color="primary"
            variant="outlined"
            onClick={() => invoicegenrate({ mode: "on" })}
          >
            Delivery Note
          </Button> */}
                        {/* <Button
            className="mr-4 py-2"
            style={{ color: 'red' }}
            variant="outlined"
            onClick={() => deleteinvoice()}
          >
            Delete Invoice
          </Button>
          <Button
            onClick={handlePrint}
            className="py-2"
            color="secondary"
            variant="outlined"
          >
            Print Invoice
          </Button> */}
                        <Button
                            variant="outlined"
                            color="primary"
                            className="mr-4 py-2"
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            ACTION<Icon>expand_more</Icon>
                        </Button>
                        <Menu

                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {/* <MenuItem  onClick={() => invoicegenrate({ mode: "on" })}>
                    Generate Purchase Order
                      </MenuItem> */}

                            <MenuItem onClick={() => deleteinvoice()}>
                                DELETE INVOICE
                            </MenuItem>
                            <MenuItem onClick={() => handlePrinting()}>
                                PRINT INVOICE
                            </MenuItem>
                            <MenuItem onClick={() => history.push(`/piedit/${id}`)}>
                                EDIT INVOICE
                            </MenuItem>


                        </Menu>
                        {fType.includes(fileType) ?
                            <Button
                                className="mr-4 py-2"
                                color="primary"
                                variant="outlined"
                                onClick={e => setShouldOpenViewDialog(true)}
                            >
                                VIEW INVOICE
                            </Button>
                            : <Link
                                to={{ pathname: basePath + file }}
                                target="_blank" >
                                <Button
                                    className="mr-4 py-2"
                                    color="primary"
                                    variant="outlined"
                                >
                                    VIEW INVOICE
                                </Button>
                            </Link>}





                    </div>
                </div>

                <div id="print-area" ref={componentRef} style={{ fontFamily: "Calibri", fontSize: 16 }}>
                    {/* <header id="header"> */}
                    <table >
                        {/* <thead style={{display:"table-header-group"}} >
            <tr>
              
              <td>
              <div class="empty-header">

<div className="px-2 flex justify-between">
  <div className="flex">
    <div className="pr-12">
      <img src={logo} alt="this is car image" style={{ marginLeft: '15px', width: 237 }} />

    </div>
    
    <div className="viewer__order-info px-4 mb-4 flex justify-between">
    </div>
  </div>
  <div className="flex">
  <div>
    <h2 style={{color:'#1d2257',textAlign:'right'}}>
     
    شركة أماكو العربية للمقاولات</h2>

      <h3 style={{color:'#1d2257',textAlign:'right',fontSize:20}}>
        AMACO ARABIA CONTRACTING COMPANY
        
      </h3>
      <h5 style={{color:'#555',textAlign:'right',fontSize:17}} className="font-normal b-4 capitalize">
       C.R No. 2055003404 | VAT No. 310398615200003


      </h5>
      
    </div>
  </div>
</div>



</div>
</td>
</tr>
</thead> */}
                        <Header></Header>

                        <hr></hr>
                        <tbody style={{ marginBottom: '50px' }}>
                            <tr>
                                <td>
                                    <div className="px-2 pt-5 flex justify-between">
                                        <div className="flex">
                                            <div className="pl-2 px-4 mb-4">
                                                <h3 style={{ fontSize: 20 }}><strong>PURCHASE INVOICE</strong></h3>
                                                {vat}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="pr-2 px-4 mb-4">
                                                <h4>

                                                    <strong>فاتورة ضريبة القيمة المضافة</strong>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>







                                    <div className="px-2 flex justify-between">
                                        <div className="px-2 flex justify-end">
                                            <div className="flex " >
                                                <div className="pr-12">


                                                    <div className="pl-2 pb-4">
                                                        <span style={{ fontWeight: 1000 }}>ISSUE DATE</span><br></br>
                                                        {moment(issue_date).format('DD MMM YYYY')}

                                                    </div>


                                                    <div className="pl-2 pb-4">
                                                        <span style={{ fontWeight: 1000 }}>COMPANY NAME & ADDRESS</span><br></br>
                                                        <span>{company}</span><br></br>
                                                        <span>{street ? street + (city ? "," + city + (zipcode ? "," + (zipcode) : " ") : (zipcode ? "," + (zipcode) : " ")) : (city ? city + (zipcode ? " ," + (zipcode) : " ") : (zipcode ? zipcode : " "))}</span>


                                                    </div>




                                                </div>

                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 flex justify-center">
                                            <div className="flex " >

                                                <div className="pr-12">


                                                    <div className="pb-4" >
                                                        <span style={{ fontWeight: 1000 }}>INVOICE NUMBER</span>
                                                        <br></br>
                                                        {invoiceno}


                                                    </div>



                                                    {/* <div className="justify-center" style={{visibility:'hidden'}}>
           
            <span style={{fontWeight:1000}}></span>
              <div></div>
              <div></div>
          
            </div> */}


                                                    <div className="">
                                                        <span style={{ fontWeight: 1000 }}>VAT NUMBER</span>
                                                        <br></br>
                                                        {vatno ? vatno : '--'}

                                                    </div>


                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 flex justify-center">
                                            <div className="flex " >
                                                <div className="pr-12">
                                                    <div className="pb-3" align="right">
                                                        <span style={{ fontWeight: 1000, fontSize: 18 }}>
                                                            رقم الفاتورة
                                                        </span><br></br>
                                                        {invoiceno}


                                                    </div>

                                                    <div className="justify-center" style={{ visibility: 'hidden' }}>

                                                        {/* <span style={{fontWeight:1000}}></span>
              <div></div>
              <div></div> */}



                                                        {/* <div>
              
            </div> */}

                                                    </div>
                                                    <div className="" align="right">
                                                        <span style={{ fontWeight: 1000, fontSize: 18 }} >
                                                            رقم ضريبة القيمة المضافة
                                                        </span><br></br>
                                                        {vatno ? toArabic(vatno) : "--"}

                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-0 mr-2 flex justify-end">
                                            <div className="flex " >
                                                <div className="pr-2">
                                                    <div className="mr-0 pr-0 pb-3" align="right">
                                                        <span align="right" style={{ fontWeight: 1000, fontSize: 18 }} >
                                                            تاريخ الاصدار
                                                        </span><br></br>

                                                        {moment(issue_date).format('DD MMM YYYY')}

                                                    </div>
                                                    <div className="mr-0 pr-0 pb-3" align="right">
                                                        <span style={{ fontWeight: 1000, fontSize: 18 }}>
                                                            {/* <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="companyname"

                  />
                </IntlProvider> */}
                                                            اسم الشركة وعنوانها

                                                        </span><br></br>
                                                        <span>{cname_ar}</span><br></br>
                                                        {/* <span>{companyaddress}</span> */}
                                                        <span>
                                                            {/* {street_ar && street_ar + '-'}{city_ar && city_ar + ','} {toArabic(zipcode) == undefined || toArabic(zipcode) == 'undefined' ? '--' : toArabic(zipcode)} */}

                                                        {street_ar? street_ar+ (city_ar ? "," + city_ar + (zipcode ? "," + (toArabic(zipcode)) : " ") : (zipcode ? "," + (toArabic(zipcode)) : " ")) : (city_ar ? city_ar + (zipcode ? " ," + (toArabic(zipcode)) : "") : (zipcode ? toArabic(zipcode) : ""))}

                                                        
                                                        </span>



                                                    </div>
                                                    <div className="mr-0 pr-0" align="right">
                                                        <span align="right" style={{ fontWeight: 1000, fontSize: 18 }}>
                                                            رقم أمر الشراء
                                                        </span><br></br>
                                                        {pono}


                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>







                                    {/* <div className="viewer__billing-info px-4 py-5 flex justify-between">
          <div>
            <span className="mb-2">Bill From</span>
            <p className="mb-4">{seller ? seller.name : null}</p>
            <p className="mb-0 whitespace-pre-wrap">
              {seller ? seller.address : null}
            </p>
          </div>
          <div className="text-right w-full">
            <span className="mb-2">Bill To</span>
            <p className="mb-4">{buyer ? buyer.name : null}</p>
            <p className="mb-0 whitespace-pre-wrap">
              {buyer ? buyer.address : null}
            </p>
          </div>
          <div />
        </div> */}

                                    <Card className="mb-4" elevation={0} borderRadius="borderRadius">
                                        <div className="viewer__order-info px-4 pt-4 mb-4 flex justify-between">
                                            <Table style={{ border: "1px solid #ccc" }}>
                                                <TableHead style={{ backgroundColor: '#1d2257', display: 'table-row-group' }}>
                                                    <TableRow style={{ border: "1px solid #ccc" }}>
                                                        <TableCell className="pl-0" colspan={1} style={{ border: "1px solid #ccc", width: "50px", fontFamily: "Calibri", color: '#fff', fontWeight: 1000, fontSize: 16 }} align="center"><span style={{ fontSize: 16 }}>رقم</span><br></br> S.No.</TableCell>
                                                        <TableCell className="px-0" colspan={3} style={{ border: "1px solid #ccc", width: "px", fontFamily: "Calibri", color: '#fff', fontWeight: 1000, fontSize: 16 }} align="center"><span style={{ fontSize: 16 }}>وصف</span><br></br> DESCRIPTION</TableCell>

                                                        <TableCell className="px-0" style={{ border: "1px solid #ccc", width: "90px", fontFamily: "Calibri", color: '#fff', fontWeight: 1000, fontSize: 16, wordBreak: 'break-word' }} align="center"><span style={{ fontSize: 16 }}>وحدة</span><br></br>UOM</TableCell>
                                                        <TableCell className="px-0" colspan={2} style={{ border: "1px solid #ccc", width: "90px", fontFamily: "Calibri", color: '#fff', fontWeight: 1000, fontSize: 16 }} align="center"><span style={{ fontSize: 16 }}>كمية</span><br></br>QTY</TableCell>
                                                        <TableCell className="px-0" style={{ border: "1px solid #ccc", fontFamily: "Calibri", width: "130px", color: '#fff', fontWeight: 1000, fontSize: 16 }} align="center"><span style={{ fontSize: 16 }}>سعر الوحدة</span><br></br> UNIT PRICE</TableCell>
                                                        <TableCell className="px-0" style={{ border: "1px solid #ccc", wordBreak: 'break-word', width: "130px", fontFamily: "Calibri", color: '#fff', fontWeight: 1000, fontSize: 16 }} align="center"><span style={{ fontSize: 16 }}>المجموع الفرعي</span><br></br> SUB TOTAL</TableCell>
                                                        <TableCell className="px-0" style={{ border: "1px solid #ccc", wordBreak: 'break-word', width: "130px", fontFamily: "Calibri", color: '#fff', fontWeight: 1000, fontSize: 16 }} align="center"><span style={{ fontSize: 16 }}>القيمة الضريبية</span><br></br>VAT AMOUNT </TableCell>
                                                        <TableCell className="px-0" style={{ border: "1px solid #ccc", wordBreak: 'break-word', width: "130px", fontFamily: "Calibri", color: '#fff', fontWeight: 1000, fontSize: 16 }} align="center"><span style={{ fontSize: 16 }}>مجموع</span><br></br> GRAND TOTAL</TableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody >
                                                    {podetails.map((item, index) => {


                                                        return (

                                                            <TableRow key={index} style={{ border: "1px solid #ccc", fontSize: 18 }}>
                                                                <TableCell className="pr-0" align="center" colspan={1} style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }}>
                                                                    {index + 1}
                                                                </TableCell>


                                                                <TableCell className="pl-2 capitalize" align="left" colspan={3} style={{ border: "1px solid #ccc", wordBreak: "break-word", fontFamily: "Calibri", fontSize: 16 }}>
                                                                    <div>
                                                                        <span style={{ textAlign: "center" }}>
                                                                            <center>{item?.description}</center>
                                                                        </span>
                                                                    </div>
                                                                    <span style={{ float: "right" }}>
                                                                        {item.arabic_description ? item.arabic_description : ''}
                                                                    </span>





                                                                </TableCell>


                                                                <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }}>
                                                                    {item.unit_of_measure}
                                                                </TableCell>
                                                                <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }} colspan={2} >
                                                                    {parseInt(item.quantity).toLocaleString()}

                                                                </TableCell>
                                                                <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }} >

                                                                    {parseFloat(item.purchase_price).toLocaleString(undefined, { minimumFractionDigits: 2 })}

                                                                </TableCell>
                                                                <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }} >

                                                                    {parseFloat(item.total_amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                                </TableCell>
                                                                <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }} >
                                                                    {/* {item.total_amount} */}
                                                                    {parseFloat((item.total_amount * 15) / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                                </TableCell>
                                                                <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }} >
                                                                    {(parseFloat(item.total_amount) + (item.total_amount * 15) / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                                </TableCell>


                                                            </TableRow>

                                                        );
                                                    })}

                                                    <TableRow style={{ border: "1px solid #ccc" }}>
                                                        <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc", fontFamily: "Calibri" }} rowspan={2} colspan={7}>
                                                            <div className="px-4 flex justify-between" style={{ fontFamily: "Calibri" }}>
                                                                <div className="flex">
                                                                    <div className="pr-12">
                                                                        <tr>
                                                                            <td>
                                                                                <h5 className="font-normal capitalize">
                                                                                    <strong>BANK DETAILS</strong>{" "}
                                                                                </h5>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style={{ height: 5, fontSize: 16, textAlign: 'left' }}>
                                                                            <td style={{ height: 'auto !important' }}><strong>Bank Name</strong></td>
                                                                            <td style={{ height: 'auto !important' }}>National Commercial Bank</td>
                                                                        </tr>
                                                                        <tr style={{ height: 5, fontSize: 16, textAlign: 'left' }}>
                                                                            <td style={{ height: 'auto !important' }}><strong>Account No</strong></td>
                                                                            <td style={{ height: 'auto !important' }}>6000000242200</td>
                                                                        </tr>
                                                                        <tr style={{ height: 5, fontSize: 16, textAlign: 'left' }}>
                                                                            <td style={{ height: 'auto !important' }}><strong>IBAN No</strong></td>
                                                                            <td style={{ height: 'auto !important' }}>SA3610000006000000242200</td>
                                                                        </tr>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </TableCell>
                                                        <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc", wordBreak: 'break-word', fontFamily: "Calibri", fontSize: 16 }} colSpan={2}>
                                                            االمجموع الفرعي
                                                            <br></br>
                                                            SUB TOTAL

                                                        </TableCell>

                                                        {/* <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",width:"130px",borderRight:"1px solid #fff"}}>
                SAR
                </TableCell> */}
                                                        <TableCell style={{ textAlign: "right", border: "1px solid #ccc", fontFamily: "Calibri", width: "130px", fontSize: 18 }} colspan={2}>
                                                            {parseFloat(total_value).toLocaleString(undefined, { minimumFractionDigits: 2 })}  {currency_type}


                                                        </TableCell>

                                                    </TableRow>
                                                    {/* <TableRow style={{ border: "1px solid #ccc" }}>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc" }}>
                   
                  <br></br>
                   Discount
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid #ccc" }}>
                    {vat_in_value}
                  </TableCell>
                </TableRow> */}
                                                    <TableRow style={{ border: "1px solid #ccc" }}>
                                                        <TableCell className="pr-0 pl-1 capitalize" align="center" style={{ border: "1px solid #ccc", wordBreak: 'break-word', fontFamily: "Calibri", fontSize: 16 }} colSpan={2}>
                                                            القيمة الضريبية
                                                            <br></br>
                                                            TOTAL VAT AMOUNT (15%)
                                                        </TableCell>

                                                        {/* <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",width:"130px",borderRight:"1px solid #fff"}}>
                SAR
                </TableCell> */}
                                                        <TableCell style={{ textAlign: "right", border: "1px solid #ccc", fontFamily: "Calibri", width: "130px", fontSize: 18 }} colspan={2}>
                                                            {parseFloat(vat_in_value).toLocaleString(undefined, { minimumFractionDigits: 2 })} {currency_type}


                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow style={{ border: "1px solid #ccc" }}>
                                                        <TableCell className="pl-0 capitalize" colspan={7} style={{ border: "1px solid #ccc", fontFamily: "Calibri", fontSize: 16 }}>
                                                            <div className="px-4 flex justify-between">
                                                                <div className="flex">
                                                                    <div className="pr-12" style={{ wordBreak: 'break-word' }}>

                                                                        <strong>TOTAL IN WORDS</strong><br></br>{ress}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc", fontFamily: "Calibri", wordBreak: "break-word", fontSize: 16 }} colSpan={2}>
                                                            المجموع الكلي <br></br>
                                                            GRAND TOTAL
                                                        </TableCell>

                                                        {/* <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",width:"130px",borderRight:"1px solid #fff"}}>
                SAR
                </TableCell> */}
                                                        <TableCell style={{ textAlign: "right", border: "1px solid #ccc", fontFamily: "Calibri", width: "130px", fontSize: 18 }} colspan={2}>
                                                            <strong>{parseFloat(net_amount).toLocaleString(undefined, { minimumFractionDigits: 2 })} {currency_type}</strong>


                                                        </TableCell>
                                                    </TableRow>

                                                </TableBody>
                                            </Table>
                                        </div>

                                        <br></br>
                                        <div className="viewer__order-info px-4 pl-24 pr-24 mb-4 flex justify-between">

                                            <div className="pl-24" style={{ fontWeight: 1000 }}>
                                                <h5 className="font-normal t-4 capitalize">
                                                    <IntlProvider locale={locale} messages={Arabic}>
                                                        <FormattedMessage
                                                            id="preparedby"

                                                        />
                                                    </IntlProvider>
                                                </h5>
                                                Prepared by
                                            </div>
                                            <div style={{ fontWeight: 1000 }} className="pl-2">
                                                <h5 className="font-normal t-4 capitalize">
                                                    <IntlProvider locale={locale} messages={Arabic}>
                                                        <FormattedMessage
                                                            id="approvedby"

                                                        />
                                                    </IntlProvider>
                                                </h5>
                                                Approved by
                                            </div>
                                            <div className="mr-0 pr-24" style={{ fontWeight: 1000 }}>
                                                <h5 className="font-normal t-4 capitalize">
                                                    <IntlProvider locale={locale} messages={Arabic}>
                                                        <FormattedMessage
                                                            id="receivedby"

                                                        />
                                                    </IntlProvider>
                                                </h5>
                                                Received by
                                            </div>
                                            {/* <div className="mr-28" style={{ fontWeight: 1000 }}>

                        <QRCode

                          level="L"
                          imageSettings={{
                            excavate: true,
                            margin: "50px",
                            height: "35",
                            width: "35",
                            src: NLogo
                          }}
                          size="160"
                          value={qrValue}
                        />
                      </div>
 */}
                                        </div>



                                    </Card>
                                    <div >

                                    </div>
                                </td>
                            </tr>

                        </tbody>
                        <tfoot><div class="empty-footer"></div></tfoot>

                    </table>
                    <div class="footer">
                        {/* <footer  style={{visibility: "hidden" }}>
          
         <div >
        <div id="outer" style={{"position": "relative", width:'1050px', backgroundColor:'#c1c1c1',"transform": "skew(-20deg)",marginLeft:'40px',marginRight:'50px'}}>
        <p style={{color:'#fff',paddingTop:5,paddingBottom:5,"transform": "skew(20deg)"}} align="center"> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 9290 | Jubail 31951 | Kingdom of Saudi Arabia</p>
        <div id="spacer" style={{width: "200px", height: "10px", marginRight:0,}}></div>
        <div style={{"position": "fixed", bottom: 0, width: "100%", height: 30, backgroundColor:"#1d2257",}}> <p   style={{textAlign: 'center',color:'white',fontFamily: "Calibri",paddingTop:5,paddingBottom:10,"transform": "skew(20deg)"}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</p></div>
    </div> 
           </div>
        
       
        
        
        </footer> */}
                        <Footer></Footer>
                    </div>







                </div>



            </div>
            {shouldOpenViewDialog && (
                <ViewDialog
                    handleClose={handleDialogClose}
                    open={shouldOpenViewDialog}
                    file={file}

                />
            )}
        </Card>


    );
};

export default InvoiceViewer;
