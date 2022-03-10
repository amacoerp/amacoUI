import React, { useEffect, useState } from "react";
import { Grid, Card, Icon, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from 'moment';
import url from '../../invoice/InvoiceService';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  icon: {
    fontSize: "44px",
    opacity: 0.6,
    color: palette.primary.main,
  },
}));



const StatCards = () => {
  const [salesCount, setsalesCount] = useState('')
  const [acceptquoteCount, setacceptquoteCount] = useState('')
  const [requestedquoteCount, setrequestedquoteCount] = useState('')
  const [revenueCount, setrevenueCount] = useState('')
  let final = 0;
  let pendingCount = 0;
  const classes = useStyles();

  useEffect(() => {

    url.get("stateCard").then(({ data }) => {
      setsalesCount(data?.invoice?.filter(obj => obj.div_id == localStorage.getItem('division')).length)

      let res = data?.salesList?.filter((item) => item.state !== 'accept' && item.div_id == localStorage.getItem('division')).map((obj) => {
        return obj
      });
      pendingCount = res?.length;
      setacceptquoteCount(res.length)

      let final = data?.acceptedList?.filter(obj => obj.div_id == localStorage.getItem('division'))?.length;
      setrequestedquoteCount(final + pendingCount)



      var result = data?.salesTax?.filter(obj => (moment(obj.created_at).format('YYYY-MM-DD') > moment(firstDayOfMonth).format('YYYY-MM-DD')));

      var revenue = result?.filter(obj => obj.div_id == localStorage.getItem('division'))?.reduce((a, v) => a = a + parseFloat(v?.grand_total), 0);
      setrevenueCount(revenue)
      console.log(revenue)


    });

    var today = new Date();
    var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    var date = new Date(today.getFullYear(), today.getMonth() + 1, 0);



    // url.get("invoice").then(({ data }) => {
    //   setsalesCount(data.filter(obj => obj.div_id == localStorage.getItem('division')).length)
    // });
    // url.get("sales-list").then(({ data }) => {

    //   let res = data.filter((item) => item.state !== 'accept' && item.div_id == localStorage.getItem('division')).map((obj) => {
    //     return obj
    //   });

    //   pendingCount = res?.length;

    //   setacceptquoteCount(res.length)
    // });
    // url.get("quotations-accepted-list").then(({ data }) => {

    //   let final = data?.filter(obj => obj.div_id == localStorage.getItem('division'))?.length;
    //   setrequestedquoteCount(final + pendingCount)

    // });
   
    // url.get("salesTax").then(({ data }) => {

    //   var result = data.filter(obj => (moment(obj.created_at).format('YYYY-MM-DD') > moment(firstDayOfMonth).format('YYYY-MM-DD')));

    //   var revenue = result?.filter(obj => obj.div_id == localStorage.getItem('division'))?.reduce((a, v) => a = a + parseFloat(v?.grand_total), 0);
    //   setrevenueCount(revenue)

    // });


  }, [localStorage.getItem('division')])

  return (
    <Grid container spacing={3} className="mb-3">
      <Grid item xs={12} md={6}>
        <Card
          className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
          elevation={6}
        >
          <div className="flex items-center">
            <Icon className={classes.icon}>receipt</Icon>
            <div className="ml-3">
              <small className="text-muted">QUOTATION REQUEST</small>
              <h6 className="m-0 mt-1 text-primary font-medium">{requestedquoteCount}</h6>
            </div>
          </div>
          {/* <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip> */}
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          className="flex flex-wrap justify-between align-center p-sm-24 bg-paper"
          elevation={6}
        >
          <div className="flex items-center">
            <Icon className={classes.icon}>hourglass_empty</Icon>
            <div className="ml-3">
              <small className="text-muted line-height-1">
                PENDING QUOTATION
              </small>
              <h6 className="m-0 mt-1 text-primary font-medium">{acceptquoteCount}</h6>
            </div>
          </div>
          {/* <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip> */}
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
          elevation={6}
        >
          <div className="flex items-center">
            <Icon className={classes.icon}>dvr</Icon>
            <div className="ml-3">
              <small className="text-muted">TOTAL SALES</small>
              <h6 className="m-0 mt-1 text-primary font-medium">
                {salesCount}
              </h6>
            </div>
          </div>
          {/* <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip> */}
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
          elevation={6}
        >
          <div className="flex items-center">
            <Icon className={classes.icon}>monetization_on</Icon>
            <div className="ml-3">
              <small className="text-muted"> REVENUE</small>
              <h6 className="m-0 mt-1 text-primary font-medium">{revenueCount.toLocaleString(undefined, {
                minimumFractionDigits: 2
              })}</h6>
            </div>
          </div>
          {/* <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip> */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatCards;
