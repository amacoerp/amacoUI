import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  IconButton,
  Icon,
  Select,
  MenuItem,
} from "@material-ui/core";
import { FieldArray } from "formik";
import { Autocomplete } from "@material-ui/lab";
import { calculateAmount, getCustomerList } from "./Rfqformservice";
import { getProductList, data } from "../../../../app/views/invoice/InvoiceService"
import { SettingsInputAntenna } from "@material-ui/icons";

const InvoiceItemTable = ({ values, handleChange, setFieldValue, CustomerList }) => {
  const [isAlive, setIsAlive] = useState(true);
  const [productList, setProductList] = useState([]);
  // const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    getProductList().then(({ data }) => {

      if (isAlive) setProductList(data.filter(obj => obj.div_id == localStorage.getItem('division')));


    });


    return () => setIsAlive(false);
  }, [isAlive]);


  return (
    <FieldArray name="rfq_details" >
      {(arrayHelpers) => (

        <div className="overflow-auto">
          <Table className="whitespace-pre min-w-750">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>S.NO.</TableCell>
                <TableCell colSpan={4}>ITEM DETAILS</TableCell>
                <TableCell colSpan={2}>QUANTITY </TableCell>
                <TableCell colSpan={2}>UOM</TableCell>
                <TableCell colSpan={4}>DESCRIPTION</TableCell>
                <TableCell colSpan={1} className="p-0" align="center">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {values?.rfq_details?.map((item, ind) => (

                <TableRow className="position-relative" key={ind}>
                  <TableCell className="pl-0" align="left">
                    {ind + 1}
                    {console.log(item)}

                  </TableCell>
                  <TableCell>
                    {/* {item?.name && (<Icon
                      variant="contained"
                      component="label"

                    >
                      file_upload
                      <input
                        type="file"
                        name={`rfq_details[${ind}].file`}
                        defaultValue={item?.file || ''}
                        onChange={(event, newValue) => {
                          handleChange({
                            target: {
                              //  files: `rfq_details[${ind}].file`,
                              ...item,
                              name: `rfq_details[${ind}].file`,
                              src: URL.createObjectURL(event.target.files[0]),
                              // name: `Add "rfq_details[${ind}]"`,
                              value: event.target.files[0],
                            },
                          });
                        }}
                      />
                    </Icon>)} */}
                    {item?.name == undefined ? '' : (item?.file == null || item?.file == undefined ? (<Icon
                      variant="contained"
                      component="label"

                    >
                      file_upload
                      <input
                        type="file"
                        name={`rfq_details[${ind}].file`}
                        defaultValue={item?.file || ''}
                        onChange={(event, newValue) => {
                          handleChange({
                            target: {
                              //  files: `rfq_details[${ind}].file`,
                              ...item,
                              name: `rfq_details[${ind}].file`,
                              src: URL.createObjectURL(event.target.files[0]),
                              // name: `Add "rfq_details[${ind}]"`,
                              value: event.target.files[0],
                            },
                          });
                        }}
                      />
                    </Icon>) : <span><Icon color="error"
                      onClick={(event, newValue) => {

                        handleChange({

                          target: {
                            //  files: `rfq_details[${ind}].file`,
                            ...item,
                            name: `rfq_details[${ind}].file`,
                            src: null,
                            // name: `Add "rfq_details[${ind}]"`,
                            value: null,

                          },
                        });

                      }}
                    >close</Icon><img className="w-48" src={URL.createObjectURL(item?.file)} alt="" ></img></span>)}
                    {/* {item?.file && (<span><Icon color="error"
                      onClick={(event, newValue) => {

                        handleChange({

                          target: {
                            //  files: `rfq_details[${ind}].file`,
                            ...item,
                            name: `rfq_details[${ind}].file`,
                            src: null,
                            // name: `Add "rfq_details[${ind}]"`,
                            value: null,

                          },
                        });

                      }}
                    >close</Icon><img className="w-48" src={URL.createObjectURL(item?.file)} alt="" ></img></span>)} */}
                  </TableCell>




                  <TableCell colSpan={3} className="pl-0" align="left">
                    <div className="flex rfq_details-center">

                      <Autocomplete

                        className="w-full"
                        size="small"
                        options={productList ? productList : []}
                        getOptionLabel={option => {
                          // e.g value selected with enter, right from the input
                          if (typeof option === "string") {
                            return option;
                          }
                          if (option.inputValue) {
                            return option.inputValue;
                          }
                          return option?.name ? option?.name : " ";
                        }}
                        freeSolo

                        // getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" required fullWidth />
                        )}
                        value={item?.name}
                        onInputChange={(event, newValue) => {

                          handleChange({
                            target: {
                              //  files: `rfq_details[${ind}].file`,
                              ...item,
                              name: `rfq_details[${ind}].name`,
                              'id': null,
                              // src : URL.createObjectURL(event.target.files[0]),
                              // name: `Add "rfq_details[${ind}]"`,
                              value: newValue,

                            }
                          })
                          console.log('dsd')
                          console.log(newValue)

                          let m = productList.filter(obj => obj.name == newValue).map((it) => {
                            return it.unit_of_measure
                          })
                          console.log(m[0])
                          handleChange({
                            target: {
                              //  files: `rfq_details[${ind}].file`,
                              ...item,
                              name: `rfq_details[${ind}].unit_of_measure`,
                              'id': null,
                              // src : URL.createObjectURL(event.target.files[0]),
                              // name: `Add "rfq_details[${ind}]"`,
                              value: m[0],

                            }
                          })

                        }}
                        onChange={(event, newValue) => {

                          handleChange({
                            target: {
                              name: `rfq_details[${ind}]`,
                              // name: `Add "rfq_details[${ind}]"`,
                              value: newValue,

                            },
                          });

                        }}

                      />
                    </div>
                  </TableCell>

                  <TableCell colSpan={2} className="pl-0" align="left">
                    <TextField
                      name={`rfq_details[${ind}].quantity`}
                      size="small"
                      variant="outlined"
                      type="number"
                      disabled={!item?.name}
                      fullWidth
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                      defaultValue={item?.quantity}
                      // defaultValue={item.quantity || ""}
                      onChange={handleChange}
                      required
                    />
                  </TableCell>
                  {console.log('dsds', item?.unit_of_measure)}
                  <TableCell colSpan={2} className="pl-0" align="left">
                    <TextField
                      name={`rfq_details[${ind}].unit_of_measure`}
                      size="small"
                      variant="outlined"
                      // type="text"
                      required
                      disabled={!item?.name}
                      fullWidth
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                      defaultValue={item?.unit_of_measure}
                      value={item?.unit_of_measure}
                      // defaultValue={item.quantity || ""}
                      onChange={handleChange}

                      required
                      select
                    >
                      {data.map((itemM, INdd) => (
                        <MenuItem value={itemM.value} key={INdd}>
                          {itemM.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell colSpan={5} className="pl-0" align="left">
                    <TextField
                      name={`rfq_details[${ind}].descriptionss`}
                      size="small"
                      variant="outlined"
                      type="textarea"
                      disabled={!item?.name}
                      fullWidth
                      inputProps={{ style: { textTransform: 'capitalize' } }}
                      // value={item.descriptionss?item.descriptionss :""}
                      value={item?.descriptionss}
                      onChange={handleChange}
                      multiline
                      required
                    />
                  </TableCell>


                  <TableCell colSpan={1} className="pl-0" align="center">
                    <IconButton
                      size="small"
                      // onClick={(e) => arrayHelpers.remove(values?.rfq_details.findIndex(e))}
                      // onClick={() => console.log(ind+","+values.rfq_details)}
                      onClick={() => arrayHelpers.remove(ind)}
                    >
                      <Icon color="error" fontSize="small">
                        delete
                      </Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            className="mt-4 py-2 ml-4"
            color="primary"
            variant="contained"
            size="small"
            onClick={() => arrayHelpers.push({})
            }
          >
            <Icon>add</Icon>Add New
          </Button>
        </div>
      )}

    </FieldArray>
  );
};

export default InvoiceItemTable;
