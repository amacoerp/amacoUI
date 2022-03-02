import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Card,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Icon,
  TextareaAutosize
} from "@material-ui/core";
import useDynamicRefs from 'use-dynamic-refs';

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useCallback } from "react";
import url, { data, currency, navigatePath } from "../invoice/InvoiceService";
import Swal from "sweetalert2";
import { ConfirmationDialog } from "matx";
import FormDialog from "../product/productprice";
import MemberEditorDialog from "../product/productprice";
import moment from "moment";
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { TextField } from "@material-ui/core";
import { element } from "prop-types";
import useAuth from '../../hooks/useAuth';



const useStyles = makeStyles(({ palette, ...theme }) => ({
  invoiceEditor: {
    "& h5": {
      fontSize: 15,
    },
  },
  root: {
    width: "100px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
const filter = createFilterOptions();
const InvoiceEditor = ({ isNewInvoice, toggleInvoiceEditor }) => {

  const [isAlive, setIsAlive] = useState(true);
  const [state, setState] = useState(initialValues);
  const [rdate, setrdate] = useState([]);
  const [ddate, setddate] = useState([]);
  const [cname, setcname] = useState('abcd');
  const [party_id, setparty_id] = useState('');
  const [discounts, setdiscounts] = useState('0');
  const [proList, setproList] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [validity, setvalidity] = useState('3 Days')
  const [payment_terms, setpayment_terms] = useState('100% Advance')
  const [warranty, setwarranty] = useState('NA')
  const [delivery_time, setdelivery_time] = useState('Within 2-3 Days from the Date of PO')
  const [inco_terms, setinco_terms] = useState('DDP-Delivery Duty Paid To Customer Office')
  const [discount, setdiscount] = useState('0')
  const [contactid, setcontactid] = useState('')
  const [dstatus, setdstatus] = useState(false);
  const [price, setprice] = useState(0);
  const [pprice, setpprice] = useState(0);
  const [marginprice, setmarginprice] = useState(0);
  const [productid, setproductid] = useState('1');
  const [indexset, setindex] = useState(0);
  const [productname, setproductname] = useState('');
  const [partyids, setpartyids] = useState();
  const [charge, setcharge] = useState(0);
  const [total, settotal] = useState(0);
  const [currency_type, setcurrency_type] = useState('SAR');
  const [freight, setfreight] = useState('Air Freight');
  const [productprice, setproductprice] = useState([])
  const [catid, setcatid] = useState();
  const [Quote_date, setQuote_date] = useState(moment(new Date()).format('DD MMM YYYY'))

  const routerHistory = useHistory();
  const { id } = useParams();
  const { user } = useAuth();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);

  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  const [getRef, setRef] = useDynamicRefs();

  let inputRef = [];
  let priceRef = [];

  const generateRandomId = useCallback(() => {
    let tempId = Math.random().toString();
    let id = tempId.substr(2, tempId.length - 1);
    setState((state) => ({ ...state, id }));
  }, []);

  const handleChange = (event, fieldName) => {
    event.persist();



    let tempItemList = [...state.item];
    setdstatus(true)
    setdiscount(event.target.value)
    setdiscounts(event.target.value)




  };



  const setName = (event, index) => {
    event.persist()

    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {
      let sum = 0;

      if (index == i) {
        element[event.target.name] = event.target.value;



      }
      return element;

    });

    setState({
      ...state,
      item: tempItemList,
    });


  }

  const handleIvoiceListChange = (event, index, newValue) => {
    event.persist()
    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {

      let sum = 0;

      if (index === i) {


        element['total_amount'] = ((newValue.price ? newValue.price : newValue) * element.quantity).toFixed(2);
        element['purchase_price'] = newValue.price ? newValue.price : newValue;
        // element[event.target.name] = event.target.value;
        // element['unit_of_measure']=element?.product[0]?.unit_of_measure
        element.margin = "";
        element.sell_price = "";
        element['remark'] = "";



      }
      return element;

    });

    setState({
      ...state,
      item: tempItemList,
    });



  };



  const deleteItemFromInvoiceList = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Delete this Purchase Order Details!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        let tempItemList = [...state.item];
        tempItemList.splice(index, 1);

        setState({
          ...state,
          item: tempItemList,
        });
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Quotation Details is safe :)',
          'error'
        )
      }
    })
  };
  const filterPrice = (options, params) => {
    // console.log(params.inputValue)

    // const filtered = filter(options, params);

    // // if (params.inputValue == "") {
    //   filtered.push({
    //     inputValue: params.inputValue,
    //     price: params.inputValue,
    //     amount: params.inputValue
    //   });
    // }
    // return filtered;
  };

  const calcualteprice = (event, index) => {
    event.persist()
    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {
      let sum = 0;

      if (index === i) {



        element['total_amount'] = ((event.target.value) * element.purchase_price).toFixed(2);
        element[event.target.name] = event.target.value;
        element['remark'] = "";




      }

      return element;

    });


    setState({
      ...state,
      item: tempItemList,
    });

  }


  const setproductids = (id, index) => {
    setcatid(id)
    setpartyids(party_id)
    setShouldOpenEditorDialog(true)
  }


  const handleSubmit = () => {

    setState({ ...state, loading: true });

    let tempState = { ...state };
    let arr = []
    delete tempState.loading;
    let tempItemList = [...state.item];



    arr.quotation_details = tempItemList
    arr.discount_in_p = 0
    arr.total_value = parseFloat(subTotalCost).toFixed(2)
    arr.net_amount = GTotal
    arr.freight = freight
    arr.vat_in_value = parseFloat(charge).toFixed(2)
    arr.party_id = party_id
    arr.warranty = warranty
    arr.validity = validity
    arr.delivery_time = delivery_time
    arr.inco_terms = inco_terms
    arr.payment_terms = payment_terms
    arr.contact_id = contactid
    arr.transaction_type = "purchase"
    arr.status = "New"
    arr.ps_date = Quote_date
    arr.currency_type = currency_type
    arr.rfq_id = id
    arr.transport = 0.00
    arr.other = 0.00
    arr.div_id = localStorage.getItem('division')
    arr.user_id = user.id
    const json = Object.assign({}, arr);
    url.post('purchase-quotation', json)
      .then(function (response) {


        Swal.fire({
          title: 'Success',
          type: 'success',
          icon: 'success',
          text: 'Data saved successfully.',
        })
          .then((result) => {
            // console.log(response)
            routerHistory.push("../Newinvoiceview")
          })

      })
      .catch(function (error) {
        Swal.fire({
          title: "Error",
          type: "error",
          icon: "warning",
          text: "Something Went Wrong.",
        }).then((result) => {
          setState({ ...state, loading: false });
        });
      })

  };
  function cancelform() {
    routerHistory.push(navigatePath + "/sales/rfq-form/rfqview")
  }


  const controlKeyPress = (e, id, nextid, prev) => {
    if (e?.keyCode == 39) {
      if (nextid?.includes('purchase_price')) {
        // if (false) {
        priceRef[parseInt(nextid)].focus();
      } else if (nextid == null) {
        // if (e?.keyCode == 13) {

        // }
      } else {
        getRef(nextid).current.focus();
      }
    } else if (e?.keyCode == 38) {
      const a = id.split(parseInt(id));
      let i = parseInt(id)
      if (--i >= 0) {
        const r = i + a[1];
        if (r?.includes('purchase_price')) {
          // if (false) {
          priceRef[parseInt(r)].focus();
          // } else if (r.includes('product_id')) {
        } else if (false) {
          inputRef[parseInt(r)].focus();
        } else {
          getRef(r).current.focus();
        }

      }

    } else if (e?.keyCode == 40) {
      const a = id.split(parseInt(id));
      let i = parseInt(id)
      // if (++i) {
      const r = ++i + a[1];
      try {
        if (r?.includes('purchase_price')) {
          // if (false) {
          priceRef[parseInt(r)].focus();
          // } else if (r.includes('product_id')) {
        } else if (false) {
          inputRef[parseInt(r)].focus();

          // inputRef.focus();
        } else {
          getRef(r).current.focus();
        }
      } catch (error) {
        console.error('eror')
        // addItemToInvoiceList();
      }

      // }

    } else if (e?.keyCode == 37) {
      if (prev == null) {

      } else {
        // if (prev.includes('product_id')) {
        if (false) {
          inputRef[parseInt(prev)].focus();

          // inputRef.focus();
        } else if (prev?.includes('purchase_price')) {
          // } else if (false) {
          priceRef[parseInt(prev)].focus();
        } else {
          getRef(prev).current.focus();
        }
      }
    }
  }

  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
    setIsAlive(true)


  };

  useEffect(() => {

    url.get("products").then(({ data }) => {
      setproList(data)

    });
    url.get("rfq/" + id).then(({ data }) => {

      setcname(data[0]?.party[0]?.firm_name)
      setcontactid(data[0]?.contact?.id)
      setrdate(moment(data[0]?.created_at).format('DD MMM YYYY'))
      setddate(moment(data[0]?.require_date).format('DD MMM YYYY'))
      setparty_id(data[0]?.party_id)

      setState({
        ...state,
        item: data[0].rfq_details,
      });
    });
    return setIsAlive(false)
  }, [id, isNewInvoice, isAlive, generateRandomId]);


  const setMargin = (id, index, name) => {

    setproductid(id)
    setproductname(name)
    setindex(index)
    setShouldOpenEditorDialog(true);

  }

  let subTotalCost = 0;
  let GTotal = 0;
  let dis_per = 0;
  let {

    item: invoiceItemList = [],
    quote: quoteList = [],
    status,
    vat = 0,
    loading,

  } = state;

  return (

    <div className="m-sm-30">


      <Card elevation={3}>
        <div className={clsx("invoice-viewer py-4", classes.invoiceEditor)}>
          <ValidatorForm onSubmit={handleSubmit} onError={(errors) => null}>
            <div className="viewer_actions px-4 flex justify-between">
              <div className="mb-6">
                <h4 align="left"> CREATE PURCHASE ORDER</h4>
              </div>
              <div className="mb-6">

                <Button
                  className="mr-4 py-2"
                  variant="outlined"
                  color="secondary"
                  onClick={cancelform}
                >
                  <Icon>cancel</Icon> CANCEL
                </Button>


                <Button
                  type="submit"
                  className="py-2"
                  variant="outlined"
                  color="primary"
                  disabled={loading}
                >
                  <Icon>save</Icon> SAVE & PRINT PURCHASEORDER
                </Button>
              </div>
            </div>

            <div className="viewer__order-info px-4 mb-4 flex justify-between">
              <div>
                {/* <h5 className="font-normal capitalize">
              <strong>RFQ ID: </strong>{" "}
              <span>
                {id}
              </span>
            </h5> */}

                <h5 className="font-normal capitalize">
                  <strong>Vendor Name: </strong>{" "}
                  <span>
                    {cname}
                  </span>
                </h5>
                <TextField

                  label="Currency Type"
                  style={{ minWidth: 200, maxWidth: '250px' }}
                  name="party_id"
                  size="small"
                  variant="outlined"

                  value={currency_type}
                  // onChange={handleChange}
                  onChange={(event) => setcurrency_type(event.target.value)}
                  required
                  select
                >

                  {currency.map((item) => (
                    <MenuItem value={item.value} key={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>



              </div>
              <div>


                <div className="text-right">
                  {/* <h5 className="font-normal">
                <strong>RFQ Date: </strong>
                <span>
                  {rdate}
                  </span>
              </h5>
              <h5 className="font-normal">
                <strong>Bid Closing Date: </strong>
                <span>
                  {ddate}
                  </span>
              </h5> */}
                </div>

              </div>


              <div className="flex">
                <h5 className="font-normal">
                  <strong>Purchase Order Date: </strong>


                  <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <KeyboardDatePicker
                      className="ml-2"
                      margin="none"
                      label="Purchase Order Date"
                      format="dd MMMM yyyy"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      selected={Quote_date}
                      value={Quote_date}
                      onChange={(date) => {
                        setQuote_date(moment(date).format('DD MMM YYYY'))
                        // return date
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </h5>
              </div>

            </div>

            <Divider />

            <Table className="mb-4">
              <TableHead>
                <TableRow className="bg-default">
                  <TableCell className="pl-2" style={{ width: 50 }} align="center">S.NO.</TableCell>
                  <TableCell className="px-0" style={{ width: '300px' }}>ITEM</TableCell>
                  <TableCell className="px-0" style={{ width: '300px' }}>OUR DESCRIPTION</TableCell>
                  <TableCell className="px-0" style={{ width: '80px' }}>QTY</TableCell>
                  <TableCell className="px-0" style={{ width: '80px' }}>UOM</TableCell>
                  <TableCell className="px-0" style={{ width: '150px' }}>PRICE</TableCell>
                  <TableCell className="px-0" style={{ width: '150px' }}>TOTAL</TableCell>
                  {/* <TableCell className="px-0"style={{width:'180px'}}>REMARK</TableCell> */}
                  <TableCell className="pr-2" style={{ textAlign: "right" }}>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {invoiceItemList.map((item, index) => {

                  if (!dstatus) {
                    subTotalCost += parseFloat(item.total_amount)
                    vat = ((subTotalCost * 15) / 100).toFixed(2)
                    // GTotal=(subTotalCost+(subTotalCost * 15) / 100).toFixed(2)
                    GTotal = subTotalCost + charge
                  }
                  else {

                    subTotalCost += parseFloat(item.total_amount)
                    dis_per = parseFloat(discounts * subTotalCost / 100).toFixed(2)
                    vat = (((subTotalCost - parseFloat(discounts * subTotalCost / 100)) * 15) / 100).toFixed(2)
                    // GTotal=((subTotalCost-parseFloat(discounts * subTotalCost/100))+ parseFloat(vat)).toFixed(2);
                    GTotal = subTotalCost + charge
                  }


                  return (
                    <TableRow key={index}>


                      <TableCell className="pl-2 capitalize" align="center" style={{ width: 50 }}>
                        {index + 1}

                      </TableCell>



                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '300px' }}>
                        <TextValidator
                          label="description"
                          type="text"
                          name="description"
                          fullWidth
                          variant="outlined"

                          size="small"
                          value={item ? item.description : null}
                          validators={["required"]}
                          inputProps={{
                            ref: setRef(index + 'description')
                          }}
                          onKeyDown={(e) => { controlKeyPress(e, index + 'description', index + 'descriptionss', null) }}

                          multiline
                          errorMessages={["this field is required"]}
                        />
                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '350px' }}>
                        <TextValidator
                          label="Our description"
                          type="text"

                          variant="outlined"
                          size="small"
                          name="descriptionss"
                          multiline
                          fullWidth
                          inputProps={{
                            ref: setRef(index + 'descriptionss')
                          }}
                          onKeyDown={(e) => { controlKeyPress(e, index + 'descriptionss', index + 'quantity', index + 'description') }}

                          value={item?.product ? item?.product[0]?.description : null}
                          onChange={(event) => setName(event, index)}

                        />
                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '80px' }}>
                        <TextValidator
                          label="Quantity"
                          onChange={(event) => calcualteprice(event, index)}
                          type="text"
                          variant="outlined"
                          size="small"
                          fullWidth

                          onKeyDown={(e) => { controlKeyPress(e, index + 'quantity', index + 'unit_of_measure', index + 'descriptionss',) }}

                          inputProps={{
                            min: 0, style: { textAlign: 'center' },
                            ref: setRef(index + 'quantity')
                          }}
                          name="quantity"
                          value={item.quantity ? item.quantity : ""}
                          validators={["isNumber"]}
                          errorMessages={["Invalid Number"]}
                        />
                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '80px' }}>
                        <TextField
                          label="UOM"
                          // inputProps={
                          //   { readOnly: true, }
                          // }
                          type="text"
                          variant="outlined"
                          size="small"
                          name="unit_of_measure"
                          style={{ width: '100%', float: 'left' }}
                          fullWidth
                          inputProps={{
                            ref: setRef(index + 'unit_of_measure'),
                            readOnly: true
                          }}


                          onKeyDown={(e) => { controlKeyPress(e, index + 'unit_of_measure', index + 'purchase_price', index + 'quantity') }}

                          value={item.unit_of_measure ? item.unit_of_measure : " "}
                          onChange={(event) => setName(event, index)}

                        // select

                        >
                          {/* {data.map((item, ind) => (
                <MenuItem value={item.value} key={item}>
                  {item.label}
                </MenuItem>
              ))} */}

                        </TextField>

                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '200px' }}>
                        {/* <TextField
                      label="Unit Price"
                      variant="outlined"
                      onChange={(event) => handleIvoiceListChange(event, index)}
                      type="text"
                      name="purchase_price"
                      inputProps={{min: 0, style: { textAlign: 'right' }}}
                      size="small"
                      
                      fullWidth
                      value={item?.purchase_price? item?.purchase_price:""}
                      select
                      required
                      
                      
                    >
                     {!item.product[0].product_price.filter(x=>x.party.id===party_id).length?<MenuItem onClick={()=>setproductids(item.product_id,index)}><Icon>add</Icon>Add New</MenuItem>:''}
                       {item?.product[0]?.product_price.filter(x=>x.party.id===party_id).map((item, id) => (
                          
                          <MenuItem value={item.price} key={item.id}>
                            {item.price}
                          </MenuItem>
                        ))} 
                    </TextField> */}
                        <CurrencyTextField

                          // onKeyDown={(e) => { controlKeyPress(e, index + 'purchase_price', index + 'total_amount', index + 'unit_of_measure') }}

                          className="w-full"
                          size="small"
                          // options={(item.product) ? (item?.product[0]?.product_price ? item?.product[0]?.product_price : []).filter(x => x.party.id === party_id) : []}
                          name="purchase_price"
                          label="Price"
                          variant="outlined"
                          value={item?.purchase_price}
                          currencySymbol=" "
                          // filterOptions={filterPrice}
                          // renderOption={option => option.price}
                          // getOptionLabel={option => {
                          //   // e.g value selected with enter, right from the input
                          //   if (typeof option === "string") {
                          //     return option;
                          //   }
                          //   if (option.inputValue) {
                          //     return option.inputValue;
                          //   }
                          //   return option.price;
                          // }}
                          // freeSolo
                          // // inputProps={{
                          // //   ref: setRef(index + 'purchase_price')
                          // // }}
                          // renderInput={(params) => (
                          //   <TextField inputRef={input => {
                          //     priceRef[index] = input;
                          //   }} {...params} variant="outlined" name="purchase_price" required fullWidth />
                          // )}
                          // onKeyUp={(event,newValue) => calcualtep(event, index,newValue,'purchase_price')}
                          // onInputChange={(event, newValue) => handleIvoiceListChange(event, index, newValue)}
                          onChange={(event, newValue) => handleIvoiceListChange(event, index, newValue)}

                        />


                      </TableCell>





                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '250px' }}>
                        {/* <TextValidator
                      label="QTotal"
                      
                      type="text"
                      variant="outlined"
                      size="small"
                      inputProps={{min: 0, style: { textAlign: 'right' }}}
                      name="total_amount"
                     
                      value={item.total_amount ? item.total_amount: ""}
                      
                    /> */}
                        <CurrencyTextField
                          className="w-full"
                          readOnly
                          label="Total"
                          variant="outlined"
                          fullWidth
                          onKeyDown={(e) => { controlKeyPress(e, index + 'total_amount', null, index + 'purchase_price') }}
                          inputProps={{
                            ref: setRef(index + 'total_amount')
                          }}
                          size="small"
                          currencySymbol=''
                          name="total_amount"
                          value={item.total_amount ? item.total_amount : ""}
                        />
                      </TableCell>
                      {/* <TableCell className="pl-0 capitalize" align="left" style={{width:'80px'}}>
                    <TextField
                      label="Remark"
                      onChange={(event) => setremark(event, index)}
                      type="text"
                      variant="outlined"
                      size="small"
                      name="remark"
                      style={{width:'100%',float:'left'}}
                      fullWidth
                      value={item.remark?item.remark:null }
                      multiline
                      
              
                    />
  
                  </TableCell> */}
                      <TableCell className="pl-2 capitalize" align="left" style={{ textAlign: "right" }}>

                        <Icon color="error" fontSize="small" onClick={() => deleteItemFromInvoiceList(index)}>
                          delete
                        </Icon>

                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <h6 className="pl-4"><strong>Terms</strong></h6>
            <div className="px-4 flex justify-between">
              <div className="flex">

                <div className="pr-12">



                  {/* <p className="mb-8">Quotation Validity:</p> */}
                  <p className="mb-8" style={{ position: 'relative', top: '10px' }}>payment Terms:</p>
                  <p className="mb-8" style={{ position: 'relative', top: '10px' }}>Freight type:</p>
                  <p className="mb-8" style={{ position: 'relative', top: '10px' }}>Delivery Time:</p>
                  <p className="mb-8" style={{ position: 'relative', top: '10px' }}>Inco-Term:</p>
                </div>
                <div>
                  {/* <TextValidator
                label="Quotation Validity"
                className="mb-4"
                type="text"
                variant="outlined"
                size="small"
                style={{width:500}}
                onChange={e => setvalidity(e.target.value)
                }
                value={validity}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
                  <TextValidator
                    inputProps={
                      { readOnly: true, }
                    }
                    label="payment Terms"
                    className="mb-4"
                    onChange={e => setpayment_terms(e.target.value)
                    }
                    type="text"
                    style={{ width: 500 }}
                    variant="outlined"
                    size="small"
                    name="net_amount"
                    value={payment_terms}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  {/* <TextValidator
                label="Waranty"
                onChange={e => setwarranty(e.target.value)
                }
                className="mb-4"
                type="text"
                variant="outlined"
                size="small"
                name="net_amount"
                style={{width:500}}
                value={warranty}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
                  <TextValidator
                    label="Freight"
                    onChange={e => setfreight(e.target.value)
                    }
                    className="mb-4"
                    type="text"
                    variant="outlined"
                    size="small"
                    name="net_amount"
                    style={{ width: 500 }}
                    value={freight}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextValidator
                    label="Delivery Time"
                    className="mb-4"
                    onChange={e => setdelivery_time(e.target.value)
                    }
                    type="text"
                    variant="outlined"
                    size="small"
                    style={{ width: 500 }}
                    name="net_amount"
                    value={delivery_time}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextValidator
                    label="Inco-Term"
                    onChange={e => setinco_terms(e.target.value)
                    }
                    type="text"
                    className="mb-4"
                    variant="outlined"
                    size="small"
                    name="net_amount"
                    style={{ width: 500 }}
                    value={inco_terms}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </div>

              </div>
              <div className="px-4 flex justify-end">
                <div className="flex " >
                  <div className="pr-12">
                    <p className="mb-8">Total Amount  ({currency_type}) :</p>
                    {/* <p className="mb-8">Discount:</p> */}
                    <p className="mb-8" style={{ position: 'relative', top: '-4px' }}>Freight Charges ({currency_type})</p>
                    {/* <p className="mb-5">currency:</p> */}
                    <strong>
                      <p className="mb-8" style={{ position: 'relative', top: '-4px' }}>Net Total ({currency_type})</p>
                    </strong>
                  </div>
                  <div>

                    <p className="mb-4" align="right">{subTotalCost ? subTotalCost.toLocaleString(undefined, {
                      minimumFractionDigits: 2
                    }) : '0.00'}</p>

                    {/* <TextValidator
                className="mb-4 "
                label="Vat"
                type="text"
                variant="outlined"
                size="small"
                name="vat"
                inputProps={{min: 0, style: { textAlign: 'right' }}}
                value={subTotalCost?vat:parseFloat(0.00).toLocaleString(undefined,{
                  minimumFractionDigits:2
                })}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
                    {/* <CurrencyTextField
                className="w-full mb-4"
                label="Vat"
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="vat"   
                value={subTotalCost?vat:parseFloat(0.00).toLocaleString(undefined,{
                  minimumFractionDigits:2
                })}
              /> */}
                    <CurrencyTextField
                      className="w-full mb-4"
                      label="Freight Charges"
                      variant="outlined"
                      fullWidth
                      size="small"
                      currencySymbol={currency_type}
                      name="vat"
                      onChange={(e, value) => { setcharge(value); settotal(value + subTotalCost); }

                      }
                      value={charge}
                    // value={subTotalCost?vat:parseFloat(0.00).toLocaleString(undefined,{
                    //   minimumFractionDigits:2
                    // })}
                    />
                    {/* <TextValidator
                label="Grand Total"
                onChange={handleChange}
                type="text"
                className="mb-4"
                variant="outlined"
                size="small"
                name="net_amount"
                inputProps={{min: 0, style: { textAlign: 'right' }}}
                value={subTotalCost?GTotal:0.00}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
                    <div>
                      {/* <CurrencyTextField
                className="w-full mb-4"
                label="Grand Total"
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="net_amount"   
                value={subTotalCost?GTotal:0.00}
              /> */}
                      <CurrencyTextField
                        className="w-full mb-4"
                        label="Grand Total"
                        readOnly
                        variant="outlined"
                        fullWidth
                        size="small"
                        currencySymbol={currency_type}
                        name="net_amount"
                        value={GTotal}
                      />
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </ValidatorForm>

        </div>
      </Card>

      {shouldOpenEditorDialog && (
        <MemberEditorDialog
          handleClose={handleDialogClose}
          contactid={status}
          open={shouldOpenEditorDialog}
          catid={catid}
          partyids={partyids}
          productprice={setproductprice}
        />
      )}
      {shouldOpenConfirmationDialog && (
        <ConfirmationDialog
          open={shouldOpenConfirmationDialog}
          onConfirmDialogClose={handleDialogClose}
          text="Are you sure to delete?"
        />
      )}
    </div>
  );
};



const initialValues = {
  id: "",
  orderNo: "",
  buyer: {
    name: "",
    address: "",
  },
  seller: {
    name: "",
    address: "",
  },
  item: [],
  status: "",
  date: new Date(),
  currency: "",
  loading: false,
};

export default InvoiceEditor;
