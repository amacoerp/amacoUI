import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon, Tooltip } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url from "../../invoice/InvoiceService";
import moment from "moment";
import clsx from "clsx";
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
const dummydata=[
  {
    "S.No":"","Date":"6 jun 2021","job order no":"-","company name":"-",
    "matrial name":"-",
    "Description":'-',
    "status":"",
    "size":"-",
    "MachineReading":'6479',
    "qty":"-"
},
  {
    "S.No":1,"Date":"6 jun 2021","job order no":"AMCP-JO-21-03001","company name":"Al-Ajmaeen Chemicals Products Factory",
    "matrial name":"PP-SG",
    "Description":'Sweet cupcake (Qatif)',
    "status":"New",
    "size":"60x110",
    "MachineReading":'6781',
    "qty":302
},
{
    "S.No":2,"Date":"6 jun 2021","job order no":"AMCP-JO-21-03002","company name":"Jade Saudi",
    "matrial name":"PP-Matt",
    "Description":'Adco Dish Wash 500 ml(Rose)',
    "status":"Finish",
    "size":"100x75",
    "qty":141,
    "MachineReading":'6922',

},
{
    "S.No":3,"Date":"6 jun 2021","job order no":"AMCP-JO-21-03002","company name":"Qatrat Hobar",
    "matrial name":"PP-Matt",
    "Description":'Adco Dish Wash 500 ml(Lemon)',
    "status":"Cancel",
    "size":"52x136",
    "qty":908,
    "MachineReading":'7830',
}
]

const Completed = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [qdetails, setqdetails] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);

  const columnStyleWithWidth1 = {
    top: "0px",
    left: "0px",
    zIndex: "100",
    position: "sticky",
    backgroundColor: "#fff",
    width: "600px",
    wordBreak: "break-all",
    
  }
  const columnStyleWithWidth = {
    top: "0px",
    left: "0px",
    zIndex: "100",
    position: "sticky",
    backgroundColor: "#fff",
    width: "120px",
    wordBreak: "break-word",
    
  }
  useEffect(() => {
    url.get("delivery-notes").then(({ data }) => {
      // if (isAlive) setUserList(data);
      // var myJSON = JSON.stringify(data.id);
      // if(data.length)
      // {
      //   setUserList(data);
     
     setqdetails(data);
      // }
    });
    return () => setIsAlive(false);
  }, []);
  const [count, setCount] = useState(0);
  const history = useHistory();
  const handeViewClick = (invoiceId) => {
    history.push(`/rfqanalysis/${invoiceId}`);
  };

  function getrow(id) {
    url.get("rfq/" + id).then(({ data }) => {
      if (isAlive) setqdetails(data[0].qdetails);
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
        url.delete(`products/${id}`)
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
    // })
  }
  const columns = [
    {
      name: "id", // field name in the row object
      label: "S.No.", 
     // column title that will be shown in table
      options: {
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{
              top: "0px",
              left: "0px",
              zIndex: "50",
              position: "sticky",
              backgroundColor: "#fff",
              width: "50px",
            }}>  
              <span style={{marginLeft:15}}>S.No.</span> 
            </TableCell>
          )
       },
        
      },
     
    },
    {
      name: "delivery_number", // field name in the row object
      label: "Date", // column title that will be shown in table
      options: {
        filter: true,
        wordBreak:'break-word',
        
        
      },
    },
    
    {
      name: "po_number",
      label: "Job Order No",
      options: {
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{
              top: "0px",
              left: "0px",
              zIndex: "50",
              position: "sticky",
              backgroundColor: "#fff",
              width: "200px",
            }}>  
              <span style={{marginLeft:15}}>Job Order No</span> 
            </TableCell>
          )
       },
      },
    },
    {
      name: "created_date",
      label: "Company Name",
      options: {
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{
              top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "200px",
  wordBreak: "break-word",
  wordWrap: "break-word",
  overflowWrap:"break-word",
  hyphens:"auto"
            }}>  
              <span style={{marginLeft:15}}>Company</span> 
            </TableCell>
          )
      },
    },
    
  },
  {
    name: "created_date",
    label: "Description",
    options:{
    customHeadRender: ({index, ...column}) =>{
      return (
        <TableCell key={index} style={{
          top: "0px",
left: "0px",
zIndex: "100",
position: "sticky",
backgroundColor: "#fff",
width: "300px",
wordBreak: "break-word",
wordWrap: "break-word",
overflowWrap:"break-word",
hyphens:"auto"
        }}>  
          <span style={{marginLeft:15}}>Description</span> 
        </TableCell>
      )
   },
  }
  },
    {
        name: "po_number",
        label: "Matrial",
        options: {
          filter: true,
        },
      },
      
      {
        name: "created_date",
        label: "Size(WxH)",
        options: {
          customHeadRender: ({index, ...column}) =>{
            return (
              <TableCell key={index} style={{
                top: "0px",
                left: "0px",
                zIndex: "50",
                position: "sticky",
                backgroundColor: "#fff",
                width: "100px",
              }}>  
                <span style={{marginLeft:15}}>Size(WxH)</span> 
              </TableCell>
            )
         },
        },
      },
      {
        name: "created_date",
        label: "Quantity",
        options: {
          filter: true,
        },
      },
      {
        name: "created_date",
        label: "MachineReading",
        options: {
          filter: true,
        },
      },
    
      
    
   
  ];



  return (
    <div>
      <div className="m-sm-30">
      
      <MUIDataTable
        title={"Job Order List"}
        
        data={dummydata.map((item, index) => {
       
            return [
              ++index,
              moment(item.created_at).format('DD MMM YYYY'),
              item["job order no"],
              item["company name"],
              item.Description,
              item["matrial name"],
              item.size,
              item.qty,
              item.MachineReading,
              item.status
              // item.party[index].firm_name,
              // item.requested_date,
              // item.require_date,
            ]
          
        })}
        
        columns={columns}
        options={{
         
          rowsPerPageOptions: [10, 20, 40, 80, 100],
          selectableRows: "none",
          filterType: "dropdown",
          responsive: "scrollMaxHeight",
          rowsPerPage: 10,
          
          // expandableRows: true,
          // expandableRowsOnClick: true,
          renderExpandableRow: (rowData, rowMeta) => {
            
            return (
              <tr>
                <td colSpan={6}>
                  <Table style={{ minWidth: "650",border:"1px solid black" }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>product Name</TableCell>
                        <TableCell>description</TableCell>
                        <TableCell>Quantity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {userList.map((item, index) => {
                        if(rowData[0]===item.id)
                      {
                      {item.qdetails.map((row,index) => {
                      
                       return(<TableRow key={row.product[0].id}>

                          <TableCell>{row.description}</TableCell>
                          <TableCell>{row.product[0].name}</TableCell>
                          <TableCell>{row.product[0].id}</TableCell>
                        </TableRow>
                       )
                      })}
                      } */}
                      {userList.map((item, index) => {
                        
                        {item.qdetails.map(row => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                          </TableRow>
                        ))}
                      
                      })}
                      
                    {/* })} */}
                   
                    </TableBody>
                  </Table>
                </td>
              </tr>
            )
          }
        }}
      />
    </div>
    </div>
  );
}


export default Completed;
