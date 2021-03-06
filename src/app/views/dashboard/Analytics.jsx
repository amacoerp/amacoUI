import React, { Fragment, useState, useEffect } from "react";
import { Grid, Card, Icon, TableCell, MenuItem } from "@material-ui/core";
// import DoughnutChart from "../charts/echarts/Doughnut";
import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import "./s.css";
// import TopSellingTable from "./shared/TopSellingTable";
// import RowCards from "./shared/RowCards";
// import StatCards2 from "./shared/StatCards2";
// import UpgradeCard from "./shared/UpgradeCard";
// import Campaigns from "./shared/Campaigns";
import { useTheme } from "@material-ui/styles";
import url, { getpaidDivision } from "../invoice/InvoiceService";
import MUIDataTable from "mui-datatables";
import DueInvoice from "./DueInvoice";
import AccountStatement from "./AccountStatement";
import ExpenseCategory from "./expenseCategory";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useParams } from "react-router-dom";

// import { TreeItem } from "@material-ui/lab";
// import { TextField } from "@material-ui/core";

let months = [
  {
    name: "Jan",
    count: 0,
  },
  {
    name: "Feb",
    count: 0,
  },
  {
    name: "Mar",
    count: 0,
  },
  {
    name: "Apr",
    count: 0,
  },
  {
    name: "May",
    count: 0,
  },
  {
    name: "Jun",
    count: 0,
  },
  {
    name: "Jul",
    count: 0,
  },
  {
    name: "Aug",
    count: 0,
  },
  {
    name: "Sep",
    count: 0,
  },
  {
    name: "Oct",
    count: 0,
  },
  {
    name: "Nov",
    count: 0,
  },
  {
    name: "Dec",
    count: 0,
  },
];
const receipt_months = [
  {
    name: "Jan",
    count: 0,
  },
  {
    name: "Feb",
    count: 0,
  },
  {
    name: "Mar",
    count: 0,
  },
  {
    name: "Apr",
    count: 0,
  },
  {
    name: "May",
    count: 0,
  },
  {
    name: "Jun",
    count: 0,
  },
  {
    name: "Jul",
    count: 0,
  },
  {
    name: "Aug",
    count: 0,
  },
  {
    name: "Sep",
    count: 0,
  },
  {
    name: "Oct",
    count: 0,
  },
  {
    name: "Nov",
    count: 0,
  },
  {
    name: "Dec",
    count: 0,
  },
];

const Analytics = () => {
  
  const [invoiceData, setinvoiceData] = useState([]);
  const [maxVal, setmaxVal] = useState("");
  const [date, setdate] = useState(moment(new Date()).format("YYYY"));
  const [responseData, setresponseData] = useState([]);
  const [receiptData, setreceiptData] = useState([]);
  const [dataReceipt, setdataReceipt] = useState([]);
  const [stackData, setStackData] = useState([]);
  const [monthss, setmonthss] = useState(months);
  const { d }=useParams()
  // var obj;
  // var parentData;
  const styles = (theme) => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important",
    },
  });

  useEffect(() => {
    url.get("dashboard").then(({ data }) => {
    
      
      
  
      
        receiptFun(data?.receipt, date)
        invoiceFun(data?.invoice,date,months);
        setreceiptData(data?.receipt);
        setresponseData(data?.invoice)
       
     
     
   
      
      
     

     
    });
  // return localStorage.getItem('division')

    
  }, [localStorage.getItem('division')]);

  /*Function to calculate the monthly wise receipt amount */
  async function receiptFun(data, date) {
    setdataReceipt([])
    var receipt = await data.filter(
      (obj) => obj.division_id == localStorage.getItem("division")
    );//division wise filter the array object


    /*filter the array object by issue date and map the credit amount ,month*/
    var receiptResult = receipt
      .filter(
        (obj) =>
          moment(obj.paid_date).format("YYYY") == moment(date).format("YYYY")
      )
      .map((item, i) => {
        item["debit"] = receipt
          .filter(
            (x) =>
              moment(x.paid_date).format("MM YYY") ==
              moment(item.paid_date).format("MM YYY")
          )
          .reduce((result, item) => result + item.credit, 0);
        item["count"] = receipt
          .filter(
            (x) =>
              moment(x.paid_date).format("MM YYY") ==
              moment(item.paid_date).format("MM YYY")
          )
          .reduce((result, item) => result + parseFloat(item.credit), 0);
        item["month"] = moment(item.paid_date).format("MMM");
        return item;
      });

      /*filter the array based on voucher number */
    var receiptArr = receiptResult.filter(
      (ele, ind) =>
        ind ===
          receiptResult.findIndex((elem) => elem.voucher_no === ele.voucher_no)
    );
    
   
      /*monthly wise assign the mount */
    var receiptfinalResult = receipt_months.filter(function (o1) {
      return receiptArr.map(function (o2) {
        if (o1.name == o2.month) {
          o1["count"] = o2.count;
        }
      });
    });
     /*retrive only the count from the receiptFinalResult */
    var receiptfinalArray = receiptfinalResult.map(function (obj) {
      return obj?.count;
    });
    /*If data exists update the array value */
    if (receiptResult.length) {
      setdataReceipt(receiptfinalArray);
      
    } else {/*else data not exists update the array value to 0 */
      
      setdataReceipt([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }
  /*Function to calculate the monthly wise Invoice amount */
  async function  invoiceFun(data,i,m){
    
  
       
    
    var dataList =  data?.filter(
      (obj) => obj.div_id == localStorage.getItem("division")
    );//division wise filter the array object
   
    var result = dataList
      .filter(
        (obj) =>
          moment(obj.issue_date).format("YYYY") ==
          moment(i).format("YYYY")
      )//filter the array object year wise map the data filter the month and year wise and creat the new array element debit,count,month
      .map((item, i) => {
        item["debit"] = dataList
          .filter(
            (x) =>
              moment(x.issue_date).format("MM YYY") ==
              moment(item.issue_date).format("MM YYY")
          )
          .reduce((result, item) => result + item.grand_total, 0);
        item["count"] = dataList
          .filter(
            (x) =>
              moment(x.issue_date).format("MM YYY") ==
              moment(item.issue_date).format("MM YYY")
          )
          .reduce((result, item) => result + parseFloat(item.grand_total), 0);
        item["month"] = moment(item.issue_date).format("MMM");
        return item;
      });
    
      /*filter the array based on the invoice number */
      var Due = result.filter(
      (ele, ind) =>
        ind === result.findIndex((elem) => elem.invoice_no === ele.invoice_no)
    );
   
    /*return the month if the there is a sales in the month List */



    var finalResult = monthss.filter(el => {

      return Due.map(element => {
       
         if(el.name == element.month)
         {
            return el['count']=element.count
         }
         
      });
   });
   
  
  


    // const finalResult = await Due.filter(function (o1) {
    //    return months.find(function (o2) {
    //     console.log(o2.month)
    //     if (o1.name == o2.month) {
    //        return o1["count"] = o2.count;
         
    //     }
        
       
    //   });
    // });
    
   
  
    var finalArray = finalResult.map(function (obj) {
      return obj?.count ? obj?.count : 0;
    });

    if (result.length) {
   
      setinvoiceData(finalArray);
      setmaxVal(Math.max(...finalArray));
      
    } else {
      
      setinvoiceData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    setmonthss(months)
  }
  // const handleChange = (i) => {
    
    
    
  //   url.get("dashboard").then(({ data }) => {
  //     let dataList = data.invoice.filter(
  //       (obj) => obj.div_id == localStorage.getItem("division")
  //     );
  //     const result = responseData
  //       .filter((obj) => moment(obj.issue_date).format("YYYY") == parseInt(i))
  //       .map((item, i) => {
  //         item["debit"] = dataList
  //           .filter(
  //             (x) =>
  //               moment(x.issue_date).format("MM YYY") ==
  //               moment(item.issue_date).format("MM YYY")
  //           )
  //           .reduce((result, item) => result + item.grand_total, 0);
  //         item["count"] = dataList
  //           .filter(
  //             (x) =>
  //               moment(x.issue_date).format("MM YYY") ==
  //               moment(item.issue_date).format("MM YYY")
  //           )
  //           .reduce((result, item) => result + parseFloat(item.grand_total), 0);
  //         item["month"] = moment(item.issue_date).format("MMM");

  //         return item;
  //       });

  //     let Due = result.filter(
  //       (ele, ind) =>
  //         ind === localStorage.getItem("division") ||
  //         ind === result.findIndex((elem) => elem.invoice_no === ele.invoice_no)
  //     );
      
  //     const finalResult = months.filter(function (o1) {
  //       return Due.map(function (o2) {
  //         if (o1.name == o2.month) {
  //           o1["count"] = o2.count;
  //         } else {
  //           o1["count"] = 0;
  //         }
  //       });
  //     });

  //     var finalArray = finalResult.map(function (obj) {
  //       return obj.count;
  //     });

  //     setmaxVal(Math.max(...finalArray));
  //     if (result.length) {
  //       setinvoiceData(finalArray);
        
  //     } else {
        
  //       setinvoiceData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //     }
  //   });
  // };

  return (
    <Fragment>
      <div className="pb-24 pt-7 px-8 bg-primary pl-12">
        {/* {perList?.includes("Last 12 Months Sales") ? "" : <> */}

        <div className="card-title capitalize text-white mb-4 text-white-secondary justify-between">
          {/* <div class="changeDateColor">
            <TextField
              select
              style={{ float: "right", width: 250, }}
              InputLabelProps={{
                style: { color: 'white' },
              }}

              onChange={(e) => {
                setdate(e.target.value)
                handleChange(e.target.value)
                // return date
              }}
              value={date}
              label="Choose Year"
            >
              <MenuItem>Choose Year</MenuItem>
              {/* <MenuItem value="2019">2019</MenuItem> 
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2025">2025</MenuItem>
              <MenuItem value="2026">2026</MenuItem>
              <MenuItem value="2027">2027</MenuItem>
              <MenuItem value="2028">2028</MenuItem>
              <MenuItem value="2029">2029</MenuItem>
              <MenuItem value="2030">2030</MenuItem>
              <MenuItem value="2031">2031</MenuItem>
              <MenuItem value="2032">2032</MenuItem>
              <MenuItem value="2033">2033</MenuItem>
              <MenuItem value="2034">2034</MenuItem>
              <MenuItem value="2035">2035</MenuItem>

            </TextField>
          </div> */}
          <div className="changeDateColor">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className="m-2"
                // margin="none"
                label="Choose Year"
                format="yyyy"
                // inputVariant="outlined"
                type="text"
                size="small"
                selected={date}
                value={date}
                style={{ float: "right" }}
                views={["year"]}
                onChange={(date) => {
                  setdate(moment(date).format("YYYY"));
                  invoiceFun(responseData,date)
                  // handleChange(moment(date).format("YYYY"));
                  receiptFun(receiptData, date);
                  // setdataReceipt([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                  // receiptFun(receiptData,moment(date).format('YYYY'))
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div>LAST 12 MONTHS MONTHS SALES</div>
        </div>
        <div className="container">
          <ModifiedAreaChart
            height="280px"
            className="pl-12"
            maxVal={maxVal}
            option={{
              legend: {
                itemGap: 20,
                icon: "circle",
                textStyle: {
                  color: "#fff",
                  fontSize: 13,
                  fontFamily: "roboto",
                },
                
              },
              series: [
                {
                  data: invoiceData,
                  name:"INVOICE",
                  label:"invoice",
                  type: "line",
                  color: "#fff",
               
                  
                  
                },
                {
                  data: dataReceipt,
                  name:"RECEIPT",
                  label:"receipt",
                  type: "line",
                  color: "#7FFF00",
                },
              ],
              // dataset: {
                
              //   source: [
              //     ["Month", "App", "Lin"],
              //     ["Jan", 2200, 1200, 950, 800],
              //     ["Feb", 800, 500, 1500, 600],
              //     ["Mar", 700, 1350, 800, 700],
              //     ["Apr", 1500, 1250, 950, 900],
              //     ["May", 2450, 450, 950, 500],
              //     ["June", 1700, 1250, 1500, 800],
              //   ],
              // },
             
            
              
             

              xAxis: {
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },
            }}
          />
        </div>

        {/* </>} */}
      </div>

      <div className="analytics m-sm-30 mt--18">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <StatCards stackData={stackData} />

            {/* Top Selling Products */}
            {/* <TopSellingTable /> */}

            <Card elevation={3} className="pt-5 mb-6">
              <div className="flex justify-between items-center px-6 mb-3">
                {/* <span className="card-title">Account Statements</span> */}
              </div>
              <div className="overflow-auto">
                <DueInvoice />
              </div>
            </Card>

            {/* <StatCards2 /> */}

            {/* <h4 className="card-title text-muted mb-4">Ongoing Projects</h4>
            <RowCards /> */}
          </Grid>

          <Grid item  xs={6}>
            <AccountStatement />
          </Grid>

          <Grid item  xs={6}>
            <ExpenseCategory />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Analytics;
