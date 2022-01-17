import {
  Icon,
  TableCell,
  TextField,
  Grow,
  IconButton,
  Tooltip
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import url, { GDIV, navigatePath } from "../../../invoice/InvoiceService";

import moment from "moment";
import Swal from "sweetalert2";
import history from "history.js";
const columnStyleWithWidth = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "80px",
  wordBreak: "break-all",
}
const round={
  width: "1em",
  height: "1em",
  "border-radius": "50%",
  background: "#ffaf38",
  color:'#fff'
}


const ExpensePending = () => {
  const [expenseList, setexpenseList] = useState([]);
  const formData=new FormData();
  const [isAlive,setisAlive] = useState(false);
  const [selectableRowsHideCheckboxes,setselectableRowsHideCheckboxes]=React.useState(false)
  const [rowsSelected,setrowsSelected]=React.useState([]);
  const DeleteRow=(data)=>{
    // console.log(data)
    var res=expenseList.filter((o1,ind) => data.data.some((o2,i) => ind == o2.index))
    var results=res.map((item)=>{
      return [item['id']];
     })
     var merged = [].concat.apply([], results);
    Swal.fire({
      text: 'Are you sure you want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      customClass: {
        zIndex: 1000
      },
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        formData.append('data',JSON.stringify(merged))
        formData.append('status','delete')
        url.post(`Expense_delete_verify`,formData).then((response) => {
          Swal.fire(
            'Deleted!',
            'Expense Details has been deleted.',
            'success'
          )
         setisAlive(false)
         
        
        

    })
  
          
          
       
      
    }
    else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        customClass:{
          zIndex: 1000
        },
         title:'Cancelled',
         icon:'error'
        
      })
    }
  })
 
  }
  const VerifyRow=(data,status)=>{
    
    var res=expenseList.filter((o1,ind) => data.data.some((o2,i) => ind == o2.index))
    Swal.fire({
      text: 'Are you sure you want to Verify?',
      icon: 'warning',
      showCancelButton: true,
      customClass: {
        zIndex: 1000
      },
      confirmButtonText: 'Yes, Verify it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        formData.append('data',JSON.stringify(res))
        formData.append('status','verify')
        url.post(`Expense_delete_verify`,formData).then((response) => {
          Swal.fire(
            'Verified!',
            'Expense Details has been Verified.',
            'success'
          )
          setisAlive(false)
    })
  }
})
}
  
const options = {
    textLabels: {
      body: {
        noMatch: '',
      }
    },
    filter: true,
    selectableRows: 'multiple',
    selectableRowsOnClick: true,
    selectableRowsHideCheckboxes: selectableRowsHideCheckboxes,
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 10,
    rowsSelected: rowsSelected,
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <div>
      <Tooltip title={"Delete"} cursor='pointer' className="mr-6">
      <Icon onClick={()=>DeleteRow(selectedRows)}  color="error">delete</Icon>
      </Tooltip>
      <Tooltip title={"Verify"}>
      <Icon className="mr-6" style={{color:'#28a745',cursor:'pointer'}} onClick={()=>VerifyRow(selectedRows)}>check_circle</Icon>
      </Tooltip>
      </div>

    ),
    // onRowSelectionChange: (rowsSelectedData, allRows, rowsSelected) => {
    //   console.log(rowsSelectedData, allRows, rowsSelected);
    //   this.setState({ rowsSelected: rowsSelected });
    // },
  //   onRowsDelete: (rowsDeleted, newData) => {
  //    console.log(newData)
  //     const Arr=newData.map((item,i)=>{
  //       return {
  //         id: item[5],
         
  //       };
  //     });
  //     console.log(Arr);
  //     let res=expenseList.filter(o1 => Arr.some((o2,i) => o1.id !== o2.id))
  //     console.log(res, "were deleted!");
  //     if(res)
  //     {
  //     formData.append('data',JSON.stringify(res))
  //     }
  //     else
  //     {
  //       formData.append('data',JSON.stringify(expenseList))
  //     }
     
  //       // window.alert('Can\'t delete this!');
       
     
  //     // Swal.fire({
  //     //   text: 'Are you sure you want to delete?',
  //     //   icon: 'warning',
  //     //   showCancelButton: true,
  //     //   customClass: {
  //     //     zIndex: 1000
  //     //   },
  //     //   confirmButtonText: 'Yes, delete it!',
  //     //   cancelButtonText: 'No, keep it',
  //     // }).then((result) => {
  //     //   if (result.value) {
          
         
  //           // window.alert(result.value);
  //           // return false
          
  //         url.post(`deleteExpense`,formData).then((response) => {
  //             console.log(response)
             
  //             // Swal.fire(
  //             //   'Deleted!',
  //             //   'Expense Details has been deleted.',
  //             //   'success'
  //             // )
    
  //           })
  //   //     } else if (result.dismiss === Swal.DismissReason.cancel) {
          
  //   //       Swal.fire({
  //   //         customClass:{
  //   //           zIndex: 1000
  //   //         },
  //   //          title:'Cancelled'
            
  //   //       })
      
  
  //   // }
  
      
  //   // })
  
    
  // }
}
  useEffect(() => {
    url.get("expense").then(({ data }) => {
      
       setexpenseList(data);
       
    });
    return setisAlive(true)

 
}, [isAlive]);
const handleDeleteRows = (event, rowData) => {
  // console.log(rowData)
};
const setstatus=(id)=>{
  Swal.fire({
    text: 'Are you sure you want to Verify?',
    icon: 'warning',
    showCancelButton: true,
    customClass: {
      zIndex: 1000
    },
    confirmButtonText: 'Yes, Verify it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.value) {
      const status={
        status:'verified',
        id:id
      }
      url.put(`expense/${id}`,status).then(({ data }) => {
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Updated successfully.',
        });
        
    
      setisAlive(false)
      
     
    })
  }
  else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire({
      customClass:{
        zIndex: 1000,
       
      },
       text:'Cancelled',
       icon:'error',
       
      
      
    })
  }
})
  
}
const removeData = (id) => {
  Swal.fire({
    text: 'Are you sure you want to delete?',
    icon: 'warning',
    showCancelButton: true,
    customClass: {
      zIndex: 1000
    },
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.value) {
      url.delete(`expense/${id}`)
        .then(res => {
          url.get("expense").then(({ data }) => {
            
             setexpenseList(data);
             
          });
          Swal.fire(
            'Deleted!',
            'Expense Details has been deleted.',
            'success'
          )

        })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      setisAlive(false)
      Swal.fire({
        customClass:{
          zIndex: 1000
        },
         text:'Cancelled',
         icon:'error'
        
      })
    }
  })

}
const columns = [
  
  {
    name: "id", // field name in the row object
    label: "VOUCHER NO", // column title that will be shown in table
    options: {
     
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center"}}>  
            <span style={{marginLeft:18,textAlign:"center"}}>VOUCHER NO</span> 
          </TableCell>
        )
     },
     setCellProps:()=>({
      align:'center'

    })
    }
    
  },
  {
    name: "name",
    label: "DATE",
    options: {
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center"}} >  
            <span >DATE</span> 
          </TableCell>
        )
     },
     setCellProps:()=>({
      align:'center'

    })
    }
  },
  
  // {
  //   name: "paid_date",
  //   label: "ACCOUNT",
  //   options : {
  //     filter: true,
  //   }
  // },
  // {
  //   name: "amount",
  //   label: "REFERRENCE BILL NUMBER",
  //   options: {
  //     filter: true,
  //   },
  // },
  {
    name: "amount",
    label: "PAID TO",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center"}} >  
            <span >EXPENSE DIVISION</span> 
          </TableCell>
        )
     },
     setCellProps:()=>({
      align:'center'

    })
    },
  },
  {
    name: "amount",
    label: "EXPENSE CATEGORY",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center"}} >  
            <span >CATEGORY</span> 
          </TableCell>
        )
     },
     setCellProps:()=>({
      align:'center'

    })
      
    },
  },
  {
    name: "amount",
    label: "EXPENSE CATEGORY",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center"}} >  
            <span >USER</span> 
          </TableCell>
        )
     },
     setCellProps:()=>({
      align:'center'

    })
      
    },
  },
  // {
  //   name: "amount",
  //   label: "PAID FROM",
  //   options: {
  //     filter: true,
  //     customHeadRender: ({index, ...column}) =>{
  //       return (
  //         <TableCell key={index} style={{textAlign:"center"}} >  
  //           <span >PAID FROM</span> 
  //         </TableCell>
  //       )
  //    },
  //    setCellProps:()=>({
  //     align:'center'

  //   })
  //   },
  // },
  {
    name: "amount",
    label: "AMOUNT",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"right"}} className="pr-2" >  
            <span >AMOUNT</span> 
          </TableCell>
        )
     },
     setCellProps:()=>({
      align:'right'

    })
    },
  },
  // {
  //   name: "amount",
  //   label: "TAX AMOUNT",
  //   options: {
  //     filter: true,
  //   },
  // },
  {
    name: "",
    label: " ",
    options: {
      filter: true,
      display:false
    },
  },
  {
    name: "id",
    label: "ACTION",
    options: {
      filter: true,
      selectableRows: true,
      selectableRowsOnClick: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center"}} >  
            <span >ACTION</span> 
          </TableCell>
        )
     },
      customBodyRender: (value, tableMeta, updateValue) => {
        
        return (
          <div style={{textAlign:"center"}} >
          <Tooltip title="Verify">
            <Icon style={{color:'#28a745',cursor:'pointer'}}  onClick={e => setstatus(tableMeta.rowData[6])} >check_circle</Icon>
          </Tooltip>
          {/* </Link> */}
          <Tooltip title="delete">
               <Icon color="error" onClick={() => removeData(tableMeta.rowData[6])} style={{cursor:'pointer'}}>cancel</Icon>
            </Tooltip>
            <Tooltip title="Edit">
                 <Icon color="secondary" className="ml-4 mr-4 " onClick={() =>history.push(navigatePath+`/editexpense/${tableMeta.rowData[6]}/`+tableMeta.rowData[7])
         }   >edit</Icon>
        </Tooltip>
            <Tooltip title="view more">
                 <Icon color="primary" onClick={() =>history.push(navigatePath+`/expensedetails/${tableMeta.rowData[6]}`)
         } style={{cursor:'pointer'}}>play_circle_filled</Icon>
        </Tooltip>
         
        </div>

        )

      },
    },
  },
 
];
  return (
    <div>
      <MUIDataTable
        title={"PENDING EXPENSES LIST"}
        data={expenseList.filter(obj=>obj.div_id==localStorage.getItem('division')).map((item, index) => {
             
          return [
           
            item?.voucher_no,
            moment(item.paid_date).format('DD  MMM, YYYY '),
            
            item?.paid_towards,
            item?.name,
            item?.paid_to,
            // item?.paid_from,
            // item.referrence_bill_no,

            // item.paid_to,
            parseFloat(item.amount).toLocaleString(undefined, {minimumFractionDigits:2}),
            // item.tax!==null?Math.floor(parseFloat(item.tax)).toLocaleString(undefined, {minimumFractionDigits:2}):('0.00'),
            item.id,
            item?.account_category_id
          ]
        
      })} 
         columns={columns}   
        //  options={{
           
        //     rowsPerPageOptions: [10, 20, 40, 80, 100],
        //     selectableRows: "none",
        // }} 
        options={options}
        
       
             
              
      />
    </div>
  );
};


export default ExpensePending;
