import React, { useState, useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ConfirmationDialog } from "matx";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Breadcrumb } from "matx";
import MemberEditorDialog from "../product/Addcategory";
import { useHistory } from 'react-router';
import { navigatePath, data } from "../invoice/InvoiceService"
import MemberEditorDialog1 from "./manufacture";
import useAuth from '../../hooks/useAuth';
import {
  Icon,
  Grid,
  TextField,
  MenuItem,
  Button,
  Card
} from "@material-ui/core";
import "date-fns";
// import Axios from "axios";
import url from "../invoice/InvoiceService"




const SimpleForm = ({ open, handleClose }) => {
  // const [state, setState] = useState({
  //   date: new Date(),
  // });
  // const data = [
  //   {
  //     value: "TONNES",
  //     label: "TON-TONNES"
  //   },
  //   {
  //     value: "TUBES",
  //     label: "TUB-TUBES"
  //   },
  //   {
  //     value: "UNITS",
  //     label: "UNT-UNITS"
  //   },
  //   {
  //     value: "YARDS",
  //     label: "YDS-YARDS"
  //   },
  //   {
  //     value: "SETS",
  //     label: "SET-SETS"
  //   },
  //   {
  //     value: "SQUARE FEET",
  //     label: "SQF-SQUARE FEET"
  //   },
  //   {
  //     value: "SQUARE YARDS",
  //     label: "SQY-SQUARE YARDS"
  //   },
  //   {
  //     value: "THOUSANDS",
  //     label: "THD-THOUSANDS"
  //   },
  //   {
  //     value: "KILOLITER",
  //     label: "KLR-KILOLITER"
  //   },
  //   {
  //     value: "KILOGRAM",
  //     label: "KG-KILOGRAM"
  //   },
  //   {
  //     value: "KILOMETER",
  //     label: "KME-KILOMETER"
  //   },
  //   {
  //     value: "MILLILITER",
  //     label: "MLT-MILLILITER"
  //   },
  //   {
  //     value: "METERS",
  //     label: "MTR-METERS"
  //   },
  //   {
  //     value: "NUMBERS",
  //     label: "NOS-NUMBERS"
  //   },
  //   {
  //     value: "PACKS",
  //     label: "PAC-PACKS"
  //   },
  //   {
  //     value: "PIECES",
  //     label: "PCS-PIECES"
  //   },
  //   {
  //     value: "PAIRS",
  //     label: "PAIRS"
  //   },
  //   {
  //     value: "QUINTAL",
  //     label: "QTL-QUINTAL"
  //   },
  //   {
  //     value: "ROLLS",
  //     label: "ROLLS"
  //   },
  //   {
  //     value: "CENTIMETER",
  //     label: "CENTIMETER"
  //   },
  //   {
  //     value: "CARTONS",
  //     label: "CTN-CARTONS"
  //   },
  //   {
  //     value: "DOZEN",
  //     label: "DOZ-DOZEN"
  //   },
  //   {
  //     value: "DRUM",
  //     label: "DRM-DRUM"
  //   },
  //   {
  //     value: "GRAMS",
  //     label: "GRAMS"
  //   },
  //   {
  //     value: "GROSS",
  //     label: "GRS-GROSS"
  //   },

  // ];



  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  const [shouldOpenEditorDialog1, setShouldOpenEditorDialog1] = useState(false);
  const [
    shouldOpenConfirmationDialog1,
    setShouldOpenConfirmationDialog1,
  ] = useState(false);
  const handleDialogClose1 = () => {
    setShouldOpenEditorDialog1(false);
    getcategory()

  };
  const [selectedValue, setSelectedValue] = useState(1);
  // const [selectedValue1, setSelectedValue1] = useState('');
  const [product, setproduct] = useState('');//Product Name
  // const [name_in_ar, setname_in_ar] = useState('');
  const [description, setdescription] = useState('');//Product Description
  const [unit_of_measue, setunit_of_measue] = useState('');//Product Unit of measure
  // const [unit_Price, setunit_Price] = useState('');
  const [selectedOption1, setselectedOption1] = useState('');
  // const [real_price, setreal_price] = useState('');
  const [subcategory, setsubcategory] = useState('');//Product Sub category
  const [ptype, setptype] = useState('');//Product type
  const [hsn, sethsn] = useState('');//HSN Number
  const [iq, setiq] = useState(0);//Initial quantity
  const [mq, setmq] = useState(0);//Minimum quantity
  const [manid, setmanid] = useState('');//Manufacturer Id
  const [modelno, setmodelno] = useState('');//Model Number
  const [ooptions1, setooptions] = useState([]);
  const [vendors, setvendors] = useState([]);//Vendor Names
  const [manufacture, setmanufacture] = useState([]);//Manufacturer Names 
  const [customerList, setCustomerList] = useState([]);
  const { id } = useParams();//Product SubCategory Id
  const { user } = useAuth();//user info
  const [productcatid, setproductcatid] = useState(id);
  const [loading, setloading] = useState(false);//enable the save button if its false

//Product Types
  const product_type = [
    "Non Inventory",
    "Inventory",
    "Service"
  ];


  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);


  };

  const routerHistory = useHistory();

  useEffect(() => {

    url.get("mjrProductAdd/"+localStorage.getItem('division')+"/"+id).then(({ data })=>{
     
      setCustomerList(data?.vendor)
      setooptions(data?.product_in_category);
      setmanufacture(data?.manufacture);
      console.log(data)
      setsubcategory(data?.category[0]?.name);
    })
    // getVendorList().then(({ data }) => {

    //   setCustomerList(data)
    //   getcategory()

    // });

    // url.get("products-in-category").then(({ data }) => {
    //   setooptions(data);
    // })
    // getmanufacturer().then(({ data }) => {

    //   setmanufacture(data);



    // });
    // url.get("categories/" + id).then(({ data }) => {

    //   setsubcategory(data.name)



    // });


  }, []);

  const submitValue = () => {
    setloading(true)//Disable the save Button
    
    //Set the formData
    const frmdetails = {
      party_id: vendors,
      name: (product),
      description: description ? (description) : '',
      unit_price: 0,
      unit_of_measure: unit_of_measue,
      category_id: id,
      division_id: selectedValue,
      type: ptype,
      hsn_code: hsn,
      initial_quantity: iq,
      minimum_quantity: mq,
      manufacturer_id: manid,
      model_no: modelno,
      name_in_ar: product,
      div_id: localStorage.getItem('division'),
      user_id: user.id,

    }



    //API To save the products
    url.post('products', frmdetails)
      .then(function (response) {


        Swal.fire({
          title: 'Success',
          type: 'success',
          icon: 'success',
          text: 'Data saved successfully.',
        })
          .then((result) => {
            routerHistory.push(navigatePath + `/product/viewproduct/${id}`)
          })
      })
      .catch(function (error) {

      })
    resetform()//Reset the Form

    
  }

//Get the 
  function getcategory(e) {
    url.get("products-in-category").then(({ data }) => {
      setooptions(data);
    });
  }
//rest the state value to empty
  const resetform = () => {
    setunit_of_measue('');
    setiq('');
    setmq('');
    sethsn('');
    setproduct('');
    setselectedOption1('');
    setptype('');
    setdescription('');
    setmanid('');
    setmodelno('');


  };





  return (

    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[

            { name: "PRODUCT CATEGORY", path: navigatePath + `/product/viewsubcategory` },
            { name: "NEW PRODUCT" }
          ]}
        />
      </div>

      <Card className="p-4">
        <ValidatorForm onSubmit={submitValue} onError={() => null}>
          <Grid container spacing={6}>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <h6>PRODUCT DETAILS</h6>
              <TextValidator
                className="mb-4 w-full"
                label="Product Name"
                variant="outlined"
                size="small"
                value={product}
                inputProps={{ style: { textTransform: 'capitalize' } }}
                onChange={e => setproduct(e.target.value)}
                type="text"
                name="product"
                required

              />
             
              <TextValidator
                className="mb-4 w-full"
                label="Description"
                value={description}
                multiline
                inputProps={{ style: { textTransform: 'capitalize' } }}
                onChange={e => setdescription(e.target.value)}
                type="textarea"
                size="small"
                name="description"
                variant="outlined"
                validators={[
                  "required",
                ]}
                errorMessages={["this field is required"]}

              />
              <div className="flex mb-4">
                <TextField
                  className="mr-2"
                  label="Unit of Measure"
                  onChange={e => setunit_of_measue(e.target.value)}
                  type="text"
                  size="small"
                  value={unit_of_measue}
                  name="unit_of_measue"
                  variant="outlined"
                  validators={[
                    "required",
                  ]}
                  fullWidth
                  errorMessages={["this field is required"]}
                  select
               
                >
                  {data.map((item, ind) => (
                    <MenuItem value={item.value} key={item}>
                      {item.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className="ml-2"
                  label="Model Number"
                  variant="outlined"
                  value={modelno}
                  size="small"
                  validators={[
                    "required",
                  ]}
                  errorMessages={["this field is required"]}

                  onChange={e => setmodelno(e.target.value)}
                  fullWidth
                />
              </div>




            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="flex mb-4 mt-6">
                
                <TextField
                  className="mr-2"
                  label="Sub Category"
                  readOnly
                  variant="outlined"
                  value={subcategory}
                  size="small"
                  
                  fullWidth
                />
                <TextField
                  className="ml-2 "
                  label="Manufacturer"
                  variant="outlined"
                  onChange={e => setmanid(e.target.value)}
                  value={manid}
                  size="small"
                  validators={[
                    "required",
                  ]}
                  errorMessages={["this field is required"]}
                  select
                  fullWidth
                >
                  <MenuItem onClick={() => {
                    setShouldOpenEditorDialog1(true);
                  }}>

                    <Icon >add</Icon>New

                  </MenuItem>
                  {manufacture.filter(obj => obj.div_id == localStorage.getItem('division')).map((item, ind) => (
                    <MenuItem value={item.id} key={item}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="flex mb-4">
                <TextField
                  className="mr-2"
                  label="Product Type"
                  name="selectedvalue"
                  size="small"
                  fullWidth
                  variant="outlined"
                  select

                  value={ptype}
                  onChange={e => setptype(e.target.value)
                  }
                >
                  {product_type.map((item, ind) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className="ml-2"
                  label="HSN Number"
                  size="small"
                  variant="outlined"
                  value={hsn}
                  onChange={e => sethsn(e.target.value)}
                  type="text"
                  name="hsn"
                  validators={[
                    "required",
                  ]}
                  errorMessages={["this field is required"]}
                  fullWidth

             
                />
              </div>
              <div className="flex mb-4">
                <TextField
                  className="mr-2"
                  type="text"
                  size="small"

                  label="Initial Quantity"
                  variant="outlined"
                  onChange={e => setiq(e.target.value)}
                  value={iq}

                  name="unit_of_measue"
                  variant="outlined"
                  validators={[
                    "required",
                  ]}
                  fullWidth
                  errorMessages={["this field is required"]}

               
                >

                </TextField>
                <TextField
                  className="ml-2"

                  label="Minimum Quantity"

                  onChange={e => setmq(e.target.value)}

                  label="Minimum Quantity"
                  variant="outlined"
                  value={mq}
                  size="small"
                  validators={[
                    "required",
                  ]}
                  errorMessages={["this field is required"]}
                  fullWidth
                />
              </div>
              <div className="flex mb-4">





              </div>



            </Grid>
          </Grid>

          <Button className="mr-4 py-2" color="primary" variant="outlined" type="submit" disabled={loading}>
            <Icon>save</Icon>
            <span className="pl-2 capitalize">SAVE</span>
          </Button>

          <Button className="mr-4 py-2" color="secondary" variant="outlined" onClick={() => routerHistory.push(navigatePath + `/product/viewproduct/${id}`)}>
            <Icon>cancel</Icon>
            <span className="pl-2 capitalize">CANCEL</span>
          </Button>
          <Button color=".bg-green" className="mr-4 py-2" variant="outlined" type="submit" onClick={resetform}>
            <Icon>loop</Icon>
            <span className="pl-2 capitalize">RESET</span>
          </Button>
        </ValidatorForm>
      </Card>
      <card>
        {shouldOpenEditorDialog && (
          <MemberEditorDialog
            handleClose={handleDialogClose}
            open={shouldOpenEditorDialog}
          />

        )}
        {shouldOpenConfirmationDialog && (

          <ConfirmationDialog
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            text="Are you sure to delete?"
          />
        )}

      </card>
      <card>
        {shouldOpenEditorDialog1 && (
          <MemberEditorDialog1
            handleClose={handleDialogClose1}
            open={shouldOpenEditorDialog1}
            setid={setproductcatid}
            manufacture={setmanufacture}
          />

        )}
        {shouldOpenConfirmationDialog1 && (

          <ConfirmationDialog
            open={shouldOpenConfirmationDialog1}
            onConfirmDialogClose={handleDialogClose1}
            text="Are you sure to delete?"

          />
        )}

      </card>
    </div>


  );
};

export default SimpleForm;
