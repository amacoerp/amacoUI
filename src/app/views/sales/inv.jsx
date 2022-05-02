import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon, Tooltip } from "@material-ui/core";
import { Link, useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url, { GDIV, navigatePath } from "../invoice/InvoiceService";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Tab, Tabs } from "@material-ui/core";
import SView from "./salesInv";
import STrash from "./salesinvtrash";
import { ValidatorForm } from "react-material-ui-form-validator";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  TableRow,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    float: "right",
    background: "blue",
    color: "white",
  },
  input: {
    display: "none",
  },
  columnStyleWithWidthSno: {
    top: "0px",
    left: "0px",
    zIndex: "50",
    position: "sticky",
    backgroundColor: "#fff",
    width: "50px",
    textAlign: "center",
  },
  columnStyleWithWidth: {
    top: "0px",
    left: "0px",
    zIndex: "100",
    position: "sticky",
    backgroundColor: "#fff",
    width: "420px",
    maxWidth: "420px",
    wordBreak: "break-word",
    hyphens: "auto",
    textAlign: "center",
    paddingRight: 30,
  },
}));
const SimpleMuiTable = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [podetails, setpodetails] = useState([]);
  const [poid, setpoid] = useState("");
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const classes = useStyles();
  const { t } = useParams();

  const colorset = (tabIndex) => {
    if (tabIndex == 0) return "dark";
    if (tabIndex == 1) return "dark";
    if (tabIndex == 2) return "#008000";
    if (tabIndex == 3) return "rgba(255,0,0,1)";
    if (tabIndex == 4) return "secondary";
    if (tabIndex == 5) return "primary";
  };

  const getBackgroundColor = (ind) => {
    if (ind == 0) {
      return "#00000014";
    } else if (ind == 1) {
      return "#00000014";
    } else if (ind == 2) {
      return "#00800029";
    } else if (ind == 3) {
      return "#ff00001c";
    } else if (ind == 4) {
      return "#ffaf3829";
    } else if (ind == 5) {
      return "#1976d21f";
    }
  };

  const tabList = ["SALES INVOICE", "TRASH"];
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    console.log("call ding dong");

    if (t) {
      setTabIndex(parseInt(t));
    }
    if (localStorage.getItem("page") !== "sinv") {
      localStorage.removeItem("search");
      localStorage.removeItem("page");
    }

    url.get("invoice").then(({ data }) => {
      // if (isAlive) setUserList(data);
      // var myJSON = JSON.stringify(data.id);
      if (isAlive)
        setUserList(
          data?.sort(function (a, b) {
            var dateA = new Date(a?.issue_date),
              dateB = new Date(b?.issue_date);
            return dateB - dateA;
          })
        );

      setAllData(
        data?.sort(function (a, b) {
          var dateA = new Date(a?.issue_date),
            dateB = new Date(b?.issue_date);
          return dateB - dateA;
        })
      );

      if (data.length) {
        // console.log(data)
        setpoid(data[0].id);
        setpodetails(
          data?.sort(function (a, b) {
            var dateA = new Date(a?.issue_date),
              dateB = new Date(b?.issue_date);
            return dateB - dateA;
          })
        );
      }
    });
    return () => setIsAlive(false);
  }, [isAlive]);
  const [count, setCount] = useState(0);
  const routerHistory = useHistory();
  const handeViewClick = (invoiceId) => {
    routerHistory.push(`/rfqanalysis/${invoiceId}`);
  };

  function getrow(id) {
    url.get("rfq/" + id).then(({ data }) => {
      if (isAlive) setpodetails(data[0].podetails);
    });
    return () => setIsAlive(false);
  }
  function Increment(e) {
    alert("3");
  }
  function Decrement() {
    setCount(count - 1);
  }
  const [showInvoiceEditor, setShowInvoiceEditor] = useState(false);
  const [isNewInvoice, setIsNewInvoice] = useState(false);

  const [click, setClick] = useState([]);

  const vatFiled = (id, vat) => {
    let v = 0;
    if (vat == 0) {
      v = 1;

      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to add this invoice to VAT",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.value) {
          url.post(`invoice-vat-file/${id}/${v}`).then(({ data }) => {
            if (data.length) {
              // console.log(data);
              setpoid(data[0].id);
              setUserList(
                data?.sort(function (a, b) {
                  var dateA = new Date(a?.issue_date),
                    dateB = new Date(b?.issue_date);
                  return dateB - dateA;
                })
              );
            }
            Swal.fire(
              "Success!",
              "Invoice Has been Added to VAT Filed.",
              "success"
            ).then(() => {
              setIsAlive(true);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "", "error");
        }
      });
    } else {
      v = 0;

      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to remove this invoice to VAT File",
        icon: "danger",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.value) {
          url.post(`invoice-vat-file/${id}/${v}`).then(({ data }) => {
            if (data.length) {
              console.log(data);
              setpoid(data[0].id);
              setUserList(
                data?.sort(function (a, b) {
                  var dateA = new Date(a?.issue_date),
                    dateB = new Date(b?.issue_date);
                  return dateB - dateA;
                })
              );
            }
            Swal.fire(
              "Success!",
              "Invoice Has been Removed from VAT File.",
              "success"
            ).then(() => {
              setIsAlive(true);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "", "error");
        }
      });
    }
  };
  const invoiceStatus = (id, st) => {
    let v = 'Not Printed';
    
    if (st == 'Not Printed') {
      v = 'Printed';

      Swal.fire({
        title: "Are you sure?",
        text: "Is this Invoice is Printed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.value) {
          url.post(`invoice-Status/${id}/${v}`).then(({ data }) => {
            if (data.length) {
              // console.log(data);
              setpoid(data[0].id);
              setUserList(
                data?.sort(function (a, b) {
                  var dateA = new Date(a?.issue_date),
                    dateB = new Date(b?.issue_date);
                  return dateB - dateA;
                })
              );
            }
            Swal.fire(
              "Success!",
              "",
              "success"
            ).then(() => {
              setIsAlive(true);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "", "error");
        }
      });
    } else {
      v = 'Not Printed';

      Swal.fire({
        title: "Are you sure?",
        text: "Is This Invoice is Not Printed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.value) {
          url.post(`invoice-Status/${id}/${v}`).then(({ data }) => {
            if (data.length) {
              console.log(data);
              setpoid(data[0].id);
              setUserList(
                data?.sort(function (a, b) {
                  var dateA = new Date(a?.issue_date),
                    dateB = new Date(b?.issue_date);
                  return dateB - dateA;
                })
              );
            }
            Swal.fire(
              "Success!",
              "",
              "success"
            ).then(() => {
              setIsAlive(true);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "", "error");
        }
      });
    }
  };

  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10,
      },
    ]);
  };
  const removeData = (id) => {
    // alert(id)
    // let url = `https://jsonplaceholder.typicode.com/users/${id}`
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "danger",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        url.delete(`quotation/${id}`).then((res) => {
          getrow();
          Swal.fire(
            "Deleted!",
            "Your imaginary file has been deleted.",
            "success"
          );
        });

        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
    // url.delete(`http://dataqueuesystems.com/amaco/amaco/public/api/products/${id}`)
    // .then(res => {

    // })
    // getrow()
    // url.delete(url).then(res => {
    //     const del = employees.filter(employee => id !== employee.id)
    //     setEmployees(del)
    //
    // })
  };
  const columns = [
    {
      name: "index", // field name in the row object
      label: "S.NO.", // column title that will be shown in table
      options: {
        filter: true,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={{ width: 80 }}>
              <span className="pl-2">S.NO.</span>
            </TableCell>
          );
        },
      },
    },
    {
      name: "id", // field name in the row object
      label: "INVOICE NUMBER", // column title that will be shown in table
      options: {
        filter: true,

        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell
              key={index}
              align="center"
              style={{ maxWidth: 150, width: 150 }}
              inputProps={{ style: { textTransform: "capitalize" } }}
            >
              <span>INVOICE NUMBER</span>
            </TableCell>
          );
        },
      },
    },
    {
      name: "id", // field name in the row object
      label: "PO NUMBER", // column title that will be shown in table
      options: {
        filter: true,

        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell
              key={index}
              align="center"
              style={{ maxWidth: 150, width: 150 }}
              inputProps={{ style: { textTransform: "capitalize" } }}
            >
              <span>PO NUMBER</span>
            </TableCell>
          );
        },
        setCellProps: () => ({
          align: "center",
          // width:600,
          wordWrap: "break",
        }),
      },
    },
    {
      name: "firm_name",
      label: "COMPANY NAME",
      options: {
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell
              key={index}
              align="center"
              className={classes.columnStyleWithWidth}
              inputProps={{ style: { textTransform: "capitalize" } }}
            >
              <span>COMPANY NAME</span>
            </TableCell>
          );
        },
        setCellProps: () => ({
          align: "center",
          // width:600,
          wordWrap: "break",
        }),
      },
    },
    {
      name: "firm_name",
      label: "ISSUE DATE",
      options: {
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell
              key={index}
              align="center"
              style={{ maxWidth: 150, width: 150 }}
              inputProps={{ style: { textTransform: "capitalize" } }}
            >
              <span>ISSUE DATE</span>
            </TableCell>
          );
        },
        setCellProps: () => ({
          align: "center",
          // width:600,
          wordWrap: "break",
        }),
      },
    },
    // {
    //   name: "issue_date",
    //   label: "ISSUE DATE",
    //   options: {
    //     filter: true,

    //   },
    // },
    {
      name: "id",
      label: "AMOUNT",
      options: {
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell
              key={index}
              className="pr-2"
              style={{ textAlign: "right" }}
            >
              <span textAlign="right">AMOUNT</span>
            </TableCell>
          );
        },

        setCellProps: () => ({
          align: "right",
          // paddingLeft:24
        }),
      },
    },
    // {
    //   name: "status",
    //   label: "STATUS",
    //   options: {
    //     filter: true,
    //   },
    // },

    //   {
    //     name: "id",
    //     label: "Action",
    //     options: {
    //         filter: true,
    //         customBodyRender: (value, tableMeta, updateValue) => {
    //
    //             return (
    //             <IconButton onClick={() => removeData(tableMeta.rowData[4])
    //             }
    //             >
    //                     <Icon>close</Icon>
    //             </IconButton>

    //             )

    //         },
    //     },
    // },
    {
      name: "id",
      label: "ACTION",
      options: {
        filter: true,
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell
              key={index}
              style={{ textAlign: "right" }}
              className="pr-8"
            >
              <span style={{ marginLeft: 18 }}>ACTION</span>
            </TableCell>
          );
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ textAlign: "right" }} className="pr-8">
              <Link to={navigatePath + "/newinvoice/" + tableMeta.rowData[7]}>
                <Tooltip title="view more">
                  <Icon color="primary">remove_red_eye</Icon>
                </Tooltip>
              </Link>
              <span
                style={{
                  backgroundColor:
                    tableMeta.rowData[9] == 0 ? "gray" : "#22d322",
                  cursor: "pointer",
                  marginLeft: "5px",
                  borderRadius: "50%",
                  padding: "3px",
                  position: "relative",
                  top: "-7px",
                }}
              >
                <Tooltip
                  onClick={(e) => {
                    vatFiled(tableMeta.rowData[7], tableMeta.rowData[9]);
                  }}
                  title="Vat File"
                >
                  <Icon
                    style={{
                      color: "white",
                      fontSize: "medium",
                      position: "relative",
                      top: "2px",
                      left: "-2px",
                    }}
                  >
                    V
                  </Icon>
                </Tooltip>
              </span>
              <Tooltip title={tableMeta.rowData[10] ? tableMeta.rowData[10] : 'Not Printed' }>
                <Icon
                  onClick={(e) => {
                    invoiceStatus(tableMeta.rowData[7], tableMeta.rowData[10]);
                  }}
                  style={{ color: tableMeta.rowData[10] == 'Not Printed' || tableMeta.rowData[10] == null || tableMeta.rowData[10]  == '' ? 'gray' : "#22d322" }}
                >
                  print
                </Icon>
              </Tooltip>

              {/* <Link to={"/sales/rfq-form/rfqanalysis?id=" + tableMeta.rowData[0]}>
            <IconButton>
              <Icon color="secondary">find_in_page</Icon>
            </IconButton>
          </Link> */}
            </div>
          );
        },
      },
    },
    {
      name: "",
      label: "Action",
      options: {
        filter: true,
        display: false,
      },
    },
    {
      name: "",
      label: "type",
      options: {
        filter: true,
        display: false,
      },
    },
    {
      name: "",
      label: "vatfile",
      options: {
        filter: true,
        display: false,
      },
    },
    {
      name: "",
      label: "print",
      options: {
        filter: true,
        display: false,
      },
    },
  ];
  const [from_date, setfrom_date] = useState(new Date());
  const [sales_Report, setsales_Report] = useState([]);
  const [to_date, setto_date] = useState(new Date());

  const handleSubmit = () => {
    const datas = allData.filter(
      (obj) =>
        new Date(obj.issue_date).getTime() >= new Date(from_date).getTime() &&
        new Date(obj.issue_date).getTime() <= new Date(to_date).getTime()
    );
    setUserList(
      datas?.sort(function (a, b) {
        var dateA = new Date(a?.issue_date),
          dateB = new Date(b?.issue_date);
        return dateB - dateA;
      })
    );
  };

  const handleDateChange = (date) => {
    setfrom_date(moment(date).format("DD MMM YYYY"));
  };

  const handleDateChange1 = (date) => {
    setto_date(moment(date).format("DD MMM YYYY"));
  };

  return (
    <div>
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              // { name: "Add new", path: "/sales/rfq-form/Rfqform" },
              { name: "SALES INVOICE" },
            ]}
          />
          <br />
          <br />

          <div>
            <ValidatorForm className="px-0 pb-0" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item lg={3} md={6} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="mb-4 w-full"
                      margin="none"
                      label="From Date"
                      maxDate={new Date()}
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      autoOk={true}
                      value={from_date}
                      format="MMMM dd, yyyy"
                      onChange={handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid item lg={3} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="mb-4 w-full"
                      margin="none"
                      label="To Date"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      autoOk={true}
                      value={to_date}
                      format="MMMM dd, yyyy"
                      onChange={handleDateChange1}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item lg={3} xs={12}>
                  <Button
                    color="primary"
                    variant="outlined"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <Icon>save</Icon> Filter
                  </Button>
                </Grid>
                <Grid item lg={3} xs={12}>
                  <div className="text-right">
                    <Link to={navigatePath + "/InvoiceCreate"}>
                      <Button
                        className="py-2"
                        variant="outlined"
                        color="primary"
                      >
                        <Icon>add</Icon> GENERATE INVOICES
                      </Button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
        </div>
        <Tabs
          className="mt-4"
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor={colorset(tabIndex)}
          textColor={colorset(tabIndex)}
          TabIndicatorProps={{
            style: {
              background:
                tabIndex == 0
                  ? "black"
                  : tabIndex == 1
                  ? "rgba(255,0,0,1)"
                  : tabIndex == 2
                  ? "#008000"
                  : tabIndex == 3
                  ? "rgba(255,0,0,1)"
                  : tabIndex == 4
                  ? "#FFAF38"
                  : tabIndex == 5
                  ? "#1976d2"
                  : "",
            },
          }}
        >
          {tabList.map((item, ind) => (
            <Tab
              className="capitalize"
              style={{
                borderBottom:
                  tabIndex == ind ? `2px solid ${colorset(tabIndex)}` : " ",
                // color:(tabIndex==ind?colorset(tabIndex):"")
                color:
                  item == "RFQ"
                    ? "black"
                    : item == "NEW"
                    ? "black"
                    : item == "ACCEPTED QUOTATION"
                    ? "#008000"
                    : item == "TRASH"
                    ? "rgba(255,0,0,1)"
                    : item == "DRAFT"
                    ? "#FFAF38"
                    : item == "QUOTATION HISTORY"
                    ? "#1976d2"
                    : "",
                // backgroundColor:item == 'All' ? 'black' : item == 'NEW' ? 'black' : item == 'ACCEPTED QUOTATION' ? '#008000' : item == 'TRASH' ? 'rgba(255,0,0,1)' : item == 'DRAFT' ? '#FFAF38' : item == 'QUOTATION HISTORY' ? '#1976d2' : '' ,
                backgroundColor:
                  ind == tabIndex ? getBackgroundColor(tabIndex) : "",
              }}
              value={ind}
              label={item}
              key={ind}
            />
          ))}
        </Tabs>
        <Divider className="mb-6" />
        {tabIndex == 0 && (
          <SView
            columns={columns}
            podetails={userList?.filter((obj) => obj.delete_status == 0)}
          />
        )}
        {tabIndex == 1 && (
          <STrash
            podetails={userList?.filter((obj) => obj.delete_status == 1)}
          />
        )}
      </div>
    </div>
  );
};

export default SimpleMuiTable;
