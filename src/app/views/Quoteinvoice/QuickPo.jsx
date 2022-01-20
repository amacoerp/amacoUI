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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import Annexure from "./Annexure";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useCallback } from "react";
import url, { divisionId, getCustomerList, getVendorList, data, currency, navigatePath, GDIV } from "../invoice/InvoiceService";
import Swal from "sweetalert2";
import { ConfirmationDialog } from "matx";
import FormDialog from "../product/productprice";
import MemberEditorDialog from "../product/productprice";
import moment from "moment";
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { TextField } from "@material-ui/core";
import useAuth from "app/hooks/useAuth";



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
const QuickPo = ({ isNewInvoice, toggleInvoiceEditor }) => {

  const [isAlive, setIsAlive] = useState(true);
  const [state, setState] = useState(initialValues);
  const [party_id, setparty_id] = useState('');
  const [discounts, setdiscounts] = useState('0');
  const [proList, setproList] = useState([]);
  const [validity, setvalidity] = useState('3 Days')
  const [payment_terms, setpayment_terms] = useState('100% Advance')
  const [freight, setfreight] = useState('Air Freight')
  const [warranty, setwarranty] = useState('NA')
  const [delivery_time, setdelivery_time] = useState('Within 2-3 Days from the Date of PO')
  const [inco_terms, setinco_terms] = useState('DDP-Delivery Duty Paid To Customer Office')
  const [discount, setdiscount] = useState('0')
  const [contactid, setcontactid] = useState('')
  const [dstatus, setdstatus] = useState(false);
  const [productid, setproductid] = useState('1');
  const [indexset, setindex] = useState(0);
  const [productname, setproductname] = useState('');
  const [partyids, setpartyids] = useState();
  const [productprice, setproductprice] = useState([])
  const [contacts, setcontacts] = useState([])
  const [PriceList, setPriceList] = useState([]);
  const [DataList, setDataList] = useState("ghhhhh");
  const [currency_type, setcurrency_type] = useState('SAR');
  const [charge, setcharge] = useState(0.00);
  const [total, settotal] = useState(0.00);
  const [catid, setcatid] = useState();
  const [Quote_date, setQuote_date] = useState(moment(new Date()).format('DD MMM YYYY'))

  const history = useHistory();
  const { id } = useParams();
  const { user } = useAuth();
  const classes = useStyles();
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [shouldOpenEditorDialogAnnexure, setShouldOpenEditorDialogAnnexure] = useState(false);
  const [values, setvalues] = useState({
    vendorList: [],
    contacts: [],
    supplier_id: " ",


  })
  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);

  const generateRandomId = useCallback(() => {
    let tempId = Math.random().toString();
    let id = tempId.substr(2, tempId.length - 1);
    setState((state) => ({ ...state, id }));
  }, []);



  const addItemToInvoiceList = () => {
    let tempItemList = [...state.item];

    tempItemList.push({
      product_id: "",
      src: '',
      description: "",
      descriptions: "",
      quantity: 0,
      product: "---",
      product_price_list: [
        {
          price: ""
        }
      ],
      product: [
        {
          description: ""
        }
      ],
      purchase_price: 0.00,
      margin: 0,
      sell_price: parseFloat(0.00).toLocaleString(undefined, {
        minimumFractionDigits: 2
      }),
      remark: "",
      total_amount: parseFloat(0.00).toLocaleString(undefined, {
        minimumFractionDigits: 2
      })

    });
    setState({
      ...state,
      item: tempItemList,
    });
  };

  const setremark = (event, index) => {
    event.persist()
    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {
      let sum = 0;

      if (index === i) {
        element[event.target.name] = event.target.value;



      }
      return element;

    });

    setState({
      ...state,
      item: tempItemList,
    });


  }

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);
    // if (params.inputValue !== "") {
    filtered.push({
      inputValue: params.inputValue,
      name: `Add "${params.inputValue}"`
    });
    // }
    return filtered;
  };
  const charges = (e) => {
    vat = e.target.value
    GTotal = 50 + vat
  }

  const handleChanges = (event, newValue, index) => {

    // {item?.product[0]?.product_price.filter(x=>x.party.id===party_id).map((item, id) => (
    const price = PriceList?.filter(el => el.product_id === newValue?.id && el.party_id == party_id);

    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {
      let sum = 0;


      if (index === i) {


        element['product_name'] = newValue?.id ? newValue?.name : newValue
        element['product'] = newValue?.id ? newValue?.name : newValue
        element['productId'] = newValue?.id ? newValue?.id : null
        // element.product_id=newValue?.id?newValue?.id:null
        element['product_price_list'] = price ? price : null
        element['arabic_description'] = null



      }
      return element;

    });

    setState({
      ...state,
      item: tempItemList,
    });


  };
  const handleIvoiceListChange = (event, index, newValue) => {
    // event.persist()
    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {
      let sum = 0;

      if (index === i) {


        element['total_amount'] = ((newValue?.price ? newValue?.price : newValue) * element.quantity).toFixed(2);
        element['purchase_price'] = newValue?.price ? newValue?.price : newValue;
        // element[event.target.name] = event.target.value;
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
      text: 'You want to Delete this Quotation Details!',
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
  const po_description = (event, index) => {
    //  event.persist()
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

  const po_uom = (event, index) => {
    //  event.persist()
    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {
      let sum = 0;

      if (index === i) {




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
    arr.rfq_id = id
    arr.po_number = id
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
    arr.transport = 0.00
    arr.other = 0.00
    arr.div_id = GDIV
    arr.user_id = user.id
    const json = Object.assign({}, arr);
    console.log(arr)

    url.post('purchase-quotation', json)
      .then(function (response) {


        Swal.fire({
          title: 'Success',
          type: 'success',
          icon: 'success',
          text: 'Data saved successfully.',
        })
          .then((result) => {

            history.push(navigatePath + "/Newinvoiceview")
          })

      })
      .catch(function (error) {

      })

  };
  function cancelform() {
    history.push(navigatePath + "/Newinvoiceview")
  }

  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
    setIsAlive(true)


  };

  function handleChange(newValue) {
    setDataList(newValue);
  }
  const handleDialogCloseAnnexure = () => {
    console.log(DataList)
    setShouldOpenEditorDialogAnnexure(false);



  };

  useEffect(() => {

    url.get("products").then(({ data }) => {
      setproList(data)

    });
    getVendorList().then(({ data }) => {

      setvalues({
        ...values,
        vendorList: data,
        status: false
      })

    });
    url.get("product-price").then(({ data }) => {
      setPriceList(data)




    });

    return setIsAlive(false)
  }, [id, isNewInvoice, isAlive, generateRandomId]);


  const setMargin = (id, index, name) => {

    setproductid(id)
    setproductname(name)
    setindex(index)
    setShouldOpenEditorDialog(true);

  }
  const setcontact = (event) => {


    url.get("parties/" + event.target.value).then(({ data }) => {
      console.log(data[0].contacts)

      setcontacts(data[0].contacts)
      setparty_id(event.target.value)

      setvalues({ ...values, status: true });


    });
  }

  let subTotalCost = 0;
  let GTotal = 0;
  let dis_per = 0;
  let {

    item: invoiceItemList = [],
    quote: quoteList = [],
    status,
    vat,
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

            <div className="viewer__order-info px-4 mb-6 flex justify-between">
              <div >
                {/* <h5 className="font-normal capitalize">
              <strong>Customer: </strong>{" "}
              <span>
                {id}
              </span>
            </h5> */}
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

                <TextField

                  label="Customer Name"
                  style={{ minWidth: 200, maxWidth: '250px' }}
                  name="party_id"
                  size="small"
                  variant="outlined"
                  className="pl-2"
                  value={party_id}
                  // onChange={handleChange}
                  onChange={(event) => setcontact(event)}
                  required
                  select
                >
                  <MenuItem onClick={() => {
                    history.push(navigatePath + "/party/addparty");
                  }}>

                    <Icon>add</Icon>New
                    {/* </Button> */}
                  </MenuItem>
                  {values?.vendorList.filter(obj => obj?.party_division[0]?.div_id === divisionId).map((item) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.firm_name}
                    </MenuItem>
                  ))}
                </TextField>





                {values.status &&
                  <TextField

                    label="Contact Person"
                    className="ml-2"
                    style={{ minWidth: 200, maxWidth: '250px' }}
                    name="contact_id"
                    size="small"
                    variant="outlined"
                    select
                    value={values.contact_id}
                    onChange={(e) => setcontactid(e.target.value)}

                  >
                    <MenuItem value=" "> <em>None</em></MenuItem>
                    {contacts?.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.fname}
                      </MenuItem>
                    ))}

                  </TextField>
                }
              </div>


              <div>


                <div className="text-right pt-4">
                  {/* <h5 className="font-normal">
                <strong>Quote Date: </strong>
              </h5> */}
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="m-2"
                      margin="none"
                      label="Date"
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


                </div>

              </div>




            </div>

            <Divider />

            <Table className="mb-4">
              <TableHead>
                <TableRow className="bg-default">
                  <TableCell className="pl-2" style={{ width: 100 }} align="left">S.NO.</TableCell>
                  <TableCell className="px-0" style={{ width: '250px' }}>ITEM</TableCell>
                  <TableCell className="px-0" style={{ width: '250px' }}>OUR DESCRIPTION</TableCell>
                  <TableCell className="px-0" style={{ width: '100px' }}>QTY</TableCell>
                  <TableCell className="px-0" style={{ width: '130px' }}>UOM</TableCell>
                  <TableCell className="px-0" style={{ width: '150px' }}>PRICE</TableCell>
                  <TableCell className="px-0" style={{ width: '150px' }}>TOTAL</TableCell>

                  <TableCell className="pr-2" style={{ textAlign: "right" }}>ACTION</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {invoiceItemList?.map((item, index) => {
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


                      <TableCell className="pl-2 capitalize" align="left" style={{ width: 100 }}>
                        {index + 1}

                      </TableCell>



                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '250px' }}>
                        <Autocomplete
                          className="w-full"
                          size="small"
                          options={proList ? proList : []}
                          name="product_id"
                          multiLine
                          value={item?.product_id ? item?.product_id : " "}
                          // filterOptions={filterOptions}
                          renderOption={option => option.name}

                          getOptionLabel={option => {
                            // e.g value selected with enter, right from the input
                            if (typeof option === "string") {
                              return option;
                            }
                            if (option.inputValue) {
                              return option?.inputValue;
                            }
                            return option?.name ? option?.name : " ";
                          }}
                          freeSolo
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" name="product_id" fullWidth />
                          )}
                          // onChange={handleChanges}
                          onChange={(event, newValue) => handleChanges(event, newValue, index)}
                          onInputChange={(event, newValue) => handleChanges(event, newValue, index)}


                        />
                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '350px' }}>
                        <TextField
                          label="Our description"
                          type="text"
                          required
                          variant="outlined"
                          size="small"
                          name="description"
                          multiline
                          fullWidth
                          onChange={(event) => po_description(event, index)}
                          value={item.description ? item.description : ""}

                        />
                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '80px' }}>
                        <TextValidator
                          label="Qty"
                          onChange={(event) => calcualteprice(event, index)}
                          type="number"
                          variant="outlined"
                          size="small"
                          fullWidth
                          inputProps={{ min: 0, style: { textAlign: 'center' } }}
                          name="quantity"
                          value={item.quantity ? item.quantity : ""}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="left" style={{ width: '80px' }}>
                        <TextField
                          label="UOM"

                          type="text"
                          variant="outlined"
                          size="small"
                          name="unit_of_measure"
                          required
                          style={{ width: '100%', float: 'left' }}
                          fullWidth
                          value={item.unit_of_measure ? item.unit_of_measure : null}
                          onChange={(event) => po_uom(event, index)}
                          select


                        >
                          {data.map((item, ind) => (
                            <MenuItem value={item.value} key={item}>
                              {item.label}
                            </MenuItem>
                          ))}
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

                        <Autocomplete

                          className="w-full"
                          size="small"
                          options={item?.product_price_list}
                          name="purchase_price"
                          value={item?.purchase_price}
                          // filterOptions={filterPrice}
                          renderOption={option => option.price}
                          getOptionLabel={option => {
                            // e.g value selected with enter, right from the input
                            if (typeof option === "string") {
                              return option;
                            }
                            if (option.inputValue) {
                              return option.inputValue;
                            }
                            return option.price;
                          }}
                          freeSolo
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" name="purchase_price" required fullWidth />
                          )}
                          // onKeyUp={(event,newValue) => calcualtep(event, index,newValue,'purchase_price')}
                          onInputChange={(event, newValue) => handleIvoiceListChange(event, index, newValue)}
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
                          label="Total"
                          variant="outlined"
                          fullWidth
                          size="small"
                          readOnly={true}
                          currencySymbol={currency_type}
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
            <div className="flex justify-end px-4 mb-4">
              <Button className="mt-4 py-2"
                color="primary"
                variant="contained"
                size="small" onClick={addItemToInvoiceList}><Icon>add</Icon>Add Item</Button>
            </div>

            <h6 className="pl-4"><strong>Terms</strong></h6>
            <div className="px-4 flex justify-between">
              <div className="flex">

                <div className="pr-12">



                  <p className="mb-8">Quotation Validity:</p>
                  <p className="mb-8">payment Terms:</p>
                  <p className="mb-8">Freight type:</p>
                  <p className="mb-8">Delivery Time:</p>
                  <p className="mb-8">Inco-Term:</p>
                </div>
                <div>
                  <TextValidator
                    label="Quotation Validity"
                    className="mb-4"
                    type="text"
                    variant="outlined"
                    size="small"
                    style={{ width: 500 }}
                    onChange={e => setvalidity(e.target.value)
                    }
                    value={validity}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextValidator
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
                    <p className="mb-8">Total Amount ({currency_type}) :</p>
                    {/* <p className="mb-8">Discount:</p> */}
                    <p className="mb-8">Freight Charges ({currency_type})</p>
                    {/* <p className="mb-5">currency:</p> */}
                    <strong>
                      <p className="mb-8">Net Total ({currency_type})</p>
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
                      <CurrencyTextField
                        className="w-full mb-4"
                        label="Grand Total"
                        variant="outlined"
                        fullWidth
                        readonly
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
      {shouldOpenEditorDialogAnnexure && (
        <Annexure
          handleClose={handleDialogClose}
          onChange={handleChange}
          value={DataList}
          open={shouldOpenEditorDialogAnnexure}
          handleDialogClose={handleDialogCloseAnnexure}
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

export default QuickPo;
