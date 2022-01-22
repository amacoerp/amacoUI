import React, { Fragment,useState,useEffect } from "react";
import { Grid, Card,Icon,TableCell } from "@material-ui/core";
import DoughnutChart from "../charts/echarts/Doughnut";
import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import TopSellingTable from "./shared/TopSellingTable";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";
import Campaigns from "./shared/Campaigns";
import { useTheme } from "@material-ui/styles";
import url,{getpaidDivision} from "../invoice/InvoiceService";
import MUIDataTable from "mui-datatables";
import DueInvoice from './DueInvoice';
import AccountStatement from './AccountStatement';
import ExpenseCategory from "./expenseCategory";
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { TreeItem } from "@material-ui/lab";


const months=[{

 name: "Jan",
  count:0
},
{
 name: "Feb",
 count:0
},
{
  name:"Mar",
  count:0
},
{
  name:"Apr",
  count:0
},
{
  name: "May",
  count:0
},
{
  name: "Jun",
  count:0
},
{
  name: "Jul",
  count:0
},{
  name: "Aug",
  count:0
},{
  name: "Sep",
  count:0
},{
  name: "Oct",
  count:0
},{
  name: "Nov",
  count:0
},{
  name: "Dec",
  count:0
},
 
 

]

const Analytics = () => {
  const theme = useTheme();
  const[paiddivision_account,setpaiddivision_account]=useState([]);
  const[tempList,settempList]=useState([]);
  const[linegraph,setlinegraph]=useState([]);
  const[accountStatement,setaccountStatement]=useState([]);
  const[data,setdata]=useState();
  const[maxVal,setmaxVal]=useState('');
  const[perList,setPerList]=useState('');
  const[date,setdate]=useState(moment(new Date()).format('YYYY'));
  const[responseData,setresponseData]=useState([]);

  var obj;
  var parentData;
  useEffect(() => {
    // console.log(compPer)
    // setPerList(compPer);
    getpaidDivision().then(({ data }) => {
    
      var arrVal = data.sort(function (obj1, obj2) {
        return obj1.type.localeCompare(obj2.type);
     });
    })
    //  setlinegraph(option)
     url.get('invoice').then(({ data }) => {
      // const myArr = Object.values(data[0].data).sort(
      //   (a, b) => new Date(a[0].date) - new Date(b[0].date)
      // );
       
   
              
             
      // var result =myArr.reduce((total,currentItem) =>  total = total + parseFloat(currentItem[0][0].grand_total) , 0 );
      setresponseData(data)
      var result=data.filter(obj=>moment(obj.created_at).format('YYYY')==moment(new Date()).format('YYYY')).map((item,i)=>{
        item['debit']= data.filter(x => moment(x.created_at).format('MM YYY')==moment(item.created_at).format('MM YYY')).reduce((result, item) => result + item.grand_total, 0);
        item['count']=data.filter(x => moment(x.created_at).format('MM YYY')==moment(item.created_at).format('MM YYY')).reduce((result, item) => result + parseFloat(item.grand_total), 0);
        item['month']=moment(item.created_at).format('MMM');
       
        return item
      })
     
      var Due=result.filter( (ele, ind) => ind === result.findIndex( elem => elem.invoice_no=== ele.invoice_no));
     
      var finalResult =months.filter(function (o1) {
        
        return Due.map(function (o2) {
            if(o1.name == o2.month)
            {
              o1['count']=o2.count
              // return o1;
             
             
            }
           
           
             // return the ones with equal id
       });
    });
  
    var finalArray = finalResult.map(function (obj) {
      return obj.count;
    });
    
    setdata(finalArray);
   
    setmaxVal(Math.max(...finalArray))
   
              // return the ones with equal id
      
       
    
      
      // setaccountStatement(Due)
      
     });
   
    //  return setdate(true);
    
    
     
  }, [ ])

  const handleChange=(i)=>{
    console.log(parseInt(i))
    // setPerList(compPer);
    // setdate(moment(i).format('YYYY'));
    getpaidDivision().then(({ data }) => {
    
      var arrVal = data.sort(function (obj1, obj2) {
        return obj1.type.localeCompare(obj2.type);
     });
    })
    //  setlinegraph(option)
     url.get('invoice').then(({ data }) => {
      
    
      const result=responseData.filter(obj=>moment(obj.created_at).format('YYYY')==parseInt(i)).map((item,i)=>{
        console.log(item.created_at)
        item['debit']= data.filter(x => moment(x.created_at).format('MM YYY')==moment(item.created_at).format('MM YYY')).reduce((result, item) => result + item.grand_total, 0);
        item['count']=data.filter(x => moment(x.created_at).format('MM YYY')==moment(item.created_at).format('MM YYY')).reduce((result, item) => result + parseFloat(item.grand_total), 0);
        item['month']=moment(item.created_at).format('MMM');
       
        return item
      })
     
      const Due=result.filter( (ele, ind) => ind === result.findIndex( elem => elem.invoice_no=== ele.invoice_no));
     console.log(Due)
      const finalResult =months.filter(function (o1) {
        
        return Due.map(function (o2) {
            if(o1.name == o2.month)
            {
             
              o1['count']=o2.count
            
             
             
            }
            else
            {
              o1['count']=0
            }
           
           
       });
    });
    
    var finalArray = finalResult.map(function (obj) {

      return obj.count;
    });
    
   
    setmaxVal(Math.max(...finalArray))
   if(result.length)
   {
    setdata(finalArray);
    // setmaxVal(Math.max(...finalArray))
   }
   else
   {
    //  setmaxVal([0,0,0,0,0,0,0,0,0,0,0,0])
     setdata([0,0,0,0,0,0,0,0,0,0,0,0]);
   }
   
              
      
     });
   
    
    
    
  }

  

  return (
    <Fragment>
         <div className="pb-24 pt-7 px-8 bg-primary pl-12">
              {/* {perList?.includes("Last 12 Months Sales") ? "" : <> */}
           
        
        <div className="card-title capitalize text-white mb-4 text-white-secondary justify-between">
          <div>
          Last 12 months sales
          </div>
          <div>
        
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="m-2"
                      margin="none"
                      label="Select Year"
                      format="yyyy"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      selected={date}
                      value={date}
                      views={["year"]}
                      onChange={(date) => {
                        
                        setdate(moment(date).format('YYYY'))
                        handleChange(moment(date).format('YYYY'))
                        // return date
                      }}
                    />
                  </MuiPickersUtilsProvider>
          </div>

        </div>
        <ModifiedAreaChart
          height="280px"
          className="pl-12"
          maxVal={maxVal}
          option={{
            series: [
              {
                data: data,
                type: "line",
              },
            ],
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
     
             
              {/* </>} */}
              </div>

      <div className="analytics m-sm-30 mt--18">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <StatCards />

            {/* Top Selling Products */}
            {/* <TopSellingTable /> */}

            <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
        {/* <span className="card-title">Account Statements</span> */}
       
      </div>
      <div className="overflow-auto">
        
        <AccountStatement />
      </div>
      </Card>

            {/* <StatCards2 /> */}

            {/* <h4 className="card-title text-muted mb-4">Ongoing Projects</h4>
            <RowCards /> */}
            <DueInvoice />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            {/* <Card className="px-6 py-4 mb-6">
              <div className="card-title">Traffic Sources</div>
              <div className="card-subtitle">Last 30 days</div>
              <DoughnutChart
                height="300px"
                color={[
                  theme.palette.primary.dark,
                  theme.palette.primary.main,
                  theme.palette.primary.light,
                ]}
              />
            </Card> */}
            <ExpenseCategory />

            {/* <UpgradeCard /> */}

            {/* <Campaigns /> */}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Analytics;
