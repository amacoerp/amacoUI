
import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import { Icon, Tooltip } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
// import MemberEditorDialog from "./Addcategory";
import url, { navigatePath, GDIV } from "../invoice/InvoiceService";
import {
  
  TableCell,
  Button,

} from "@material-ui/core";



const SimpleMuiTable = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      float: 'right',
      background: 'blue',
      color: 'white'
    },
    input: {
      display: "none"
    },
    columnStyleWithWidth: {
      top: "0px",
      left: "0px",
      zIndex: "100",
      position: "sticky",
      backgroundColor: "#fff",
      width: "300px",
      wordBreak: "break-word",
      wordWrap: "break-word",
      overflowWrap: "break-word",
      textAlign: "center"
    },
    columnStyleWithWidth1: {
      top: "0px",
      left: "0px",
      zIndex: "100",
      position: "sticky",
      backgroundColor: "#fff",
      width: "300px",
      wordBreak: "break-word",
      wordWrap: "break-word",
      overflowWrap: "break-word",
      textAlign: "center"
    }
  }));
  
  const classes = useStyles();
  const [isAlive, setIsAlive] = useState(true); 
  const [productList, setproductList] = useState([]);
 
  const { id } = useParams();//useParams hooks that let you access the parameters of the current route

  
 


  useEffect(() => {

    /*Category wise Product List Api*/
    url.get("categorized-products/" + id)
      .then(function (response) {
        const d = response.data
        setproductList(d)//set the products
        console.log('das',d)

      })
   



    return () => setIsAlive(false);//when the user leaves the page and the component will unmount.
  }, []);
  

 

 

  

  /*Table Columns */
  const columns = [
    {
      name: "id",
      label: "S.NO.",
      options: {
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={{ width: 100, textAlign: 'center' }}>
              <span textAlign="center" >S.NO.</span>
            </TableCell>
          )
        },

        setCellProps: () => ({
          align: "center",
          
        })
      }
    },
    {
      name: "name", // field name in the row object
      label: "Name",
      wordBreak: "break-word", // column title that will be shown in table
      options: {

        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={{ width: 200, wordBreak: "break-word", textAlign: "center" }}>
              <span >NAME</span>
            </TableCell>
          )
        },
        setCellProps: () => ({
          align: "center"
        })
      },
    },
    {
      name: "description",
      label: "Description",
      resizableColumns: true,
      options: {
       
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} className={classes.columnStyleWithWidth}>
              <span style={{ paddingLeft: 15 }}>DESCRIPTION</span>
            </TableCell>
          )
        },
        setCellProps: () => ({
          align: "center"
        })
      },
    },
    {
      name: "unit_of_measure",
      label: "Unit_of_measure",
      options: {
        filter: true,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={{

              width: "150px",
              textAlign: "center"
            }} >
              <span style={{ paddingLeft: 15 }}>UOM</span>
            </TableCell>
          )
        },
        setCellProps: () => ({
          align: "center"
        })
      },
    },

    {
      name: "category_name",
      label: "Category",
      options: {

        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} className={classes.columnStyleWithWidth1}>
              <span style={{ paddingLeft: 15 }}>CATEGORY</span>
            </TableCell>
          )
        },
        setCellProps: () => ({
          align: "center"
        })
      },
    },


    {
      name: "id",
      label: "ACTION",
      options: {

        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={{ textAlign: "right" }} className="pr-8">
              <span style={{ paddingLeft: 15 }}>ACTION</span>
            </TableCell>
          )
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              style={{
                textAlign: "right"
              }}
              className="pr-8"
            >
              
              <Link to={navigatePath + "/singleproduct/" + tableMeta.rowData[5]}>
                <Tooltip title="View Product">
                  <Icon color="primary" style={{
                    transform: "rotate(270deg)",
                    transition: "all 0.25s ease-in-out"
                  }}>arrow_drop_down_circle</Icon>
                </Tooltip>
              </Link>
            </div>

          )

        },
      },
    },
    
  ];



  return (
    <div>
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <div className="viewer_actions px-4 flex justify-between">
            <Breadcrumb
              routeSegments={[
                { name: "PRODUCT CATEGORY", path: navigatePath + "/product/viewsubcategory" },
                { name: "PRODUCTS" }
              ]}
            />


            <div className="text-right">
              <Link to={navigatePath + `/product/addproduct/${id}`} >

                <Button className="py-2"
                  color="primary"
                  variant="outlined">
                  <Icon>add</Icon>
                  ADD NEW
                </Button>
              </Link>
            </div>
          </div>
        </div>






        {/* {shouldOpenEditorDialog && (
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
        )} */}


        <MUIDataTable
          title={"PRODUCTS"}
          data={

            productList?.filter(Boolean)?.map((item, index) => {

              return [

                ++index,
                item?.name?.toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' '),
                item?.description?.toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' '),
                item?.unit_of_measure,
                item?.category_name,
                item?.id,
              ]

            })

          }
          columns={columns}
          options={{
            filterType: "textField",
            responsive: "simple",
            selectableRows: "none",

           
            elevation: 0,
            rowsPerPageOptions: [10, 20, 40, 80, 100],
          }}
        />
      </div>

    </div>

  );
}


export default SimpleMuiTable;
