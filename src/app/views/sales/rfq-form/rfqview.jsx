import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon, Card } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url, { navigatePath, GDIV } from "../../invoice/InvoiceService";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Divider, Tab, Tabs } from "@material-ui/core";
import RFQView from "./RView";
import RFQTrash from "./RTrash.jsx";
import RFQHistory from "./RHistory.jsx";

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
  Typography,
  Tooltip,
} from "@material-ui/core";
const columnStyleWithWidth = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "80px",
  wordBreak: "break-all",
  textAlign: "center",
};
const columnStyleWithWidth1 = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  textAlign: "center",
  position: "sticky",
  backgroundColor: "#fff",
  width: "500px",
  wordBreak: "break-all",
};

const SimpleMuiTable = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [rfq_details, setrfq_details] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [searchh, setSearch] = useState(null);
  const { search } = useParams();

  const tabList = ["RFQ", "TRASH", "RFQ HISTORY"];
  const [tabIndex, setTabIndex] = useState(0);

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

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  const [poRfq, setPoRfq] = useState([]);

  useEffect(() => {
    setTabIndex(parseInt(t ? t : 0));
    url.get("rfq").then(({ data }) => {
      // if (isAlive) setUserList(data);
      // var myJSON = JSON.stringify(data.id);

      if (data.length !== 0) {
        setUserList(data.rfq);
        setPoRfq(data.porfq);

        // setrfq_details(data?.rfq[0].rfq_details);
      }
    });
    return () => setIsAlive(false);
  }, []);
  const [count, setCount] = useState(0);
  const routerHistory = useHistory();
  const handeViewClick = (invoiceId) => {
    routerHistory.push(`/rfqanalysis/${invoiceId}`);
  };

  function getrow(id) {
    url.get("rfq/" + id).then(({ data }) => {
      if (isAlive) setrfq_details(data[0].rfq_details);
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
        url.delete(`products/${id}`).then((res) => {
          getrow();
          Swal.fire(
            "Deleted!",
            "Your imaginary file has been deleted.",
            "success"
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };
  const columns = [
    {
      name: "id", // field name in the row object
      label: "S.NO.", // column title that will be shown in table
      options: {
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell
              key={index}
              style={columnStyleWithWidth}
              className="pr-0"
            >
              <span>S.NO.</span>
            </TableCell>
          );
        },
        setCellProps: () => ({
          align: "center",
        }),
      },
    },
    {
      name: "fname", // field name in the row object
      label: "COMPANY NAME", // column title that will be shown in table
      options: {
        customHeadRender: ({ index, ...column }) => {
          return (
            <TableCell key={index} style={columnStyleWithWidth1}>
              <span style={{ marginLeft: 18, align: "center" }}>
                COMPANY NAME
              </span>
            </TableCell>
          );
        },
        setCellProps: () => ({
          align: "center",
        }),
      },
    },
    {
      name: "name",
      label: "RFQ DATE",
      options: {
        customHeadRender: (value, tableMeta, updateValue) => {
          return (
            <TableCell style={{ textAlign: "center" }}>
              {" "}
              <span style={{ align: "center" }}>RFQ DATE</span>{" "}
            </TableCell>
          );
        },
        setCellProps: () => ({
          align: "center",
        }),
      },
    },
    {
      name: "require_date",
      label: "BID CLOSING DATE",
      options: {
        filter: true,
        customHeadRender: (value, tableMeta, updateValue) => {
          return (
            <TableCell style={{ textAlign: "center" }}>
              {" "}
              <span style={{ align: "center" }}>BID CLOSING DATE</span>{" "}
            </TableCell>
          );
        },
        setCellProps: () => ({
          align: "center",
        }),
      },
    },
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
              <Link
                to={
                  searchh
                    ? navigatePath +
                      "/invoice/" +
                      tableMeta.rowData[4] +
                      "/" +
                      searchh
                    : navigatePath + "/invoice/" + tableMeta.rowData[4]
                }
              >
                <Tooltip title="View More">
                  <Icon color="primary">remove_red_eye</Icon>
                </Tooltip>
              </Link>
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
    //   {
    //     name: "",
    //     // label: "Action",
    //     options: {
    //       filter: true,
    //       customBodyRender: (value, tableMeta, updateValue) => {
    //         return (
    //           <Link to={"/sales/rfq-form/rfqanalysis?id=" + tableMeta.rowData[0]}>
    //             <IconButton>
    //               <Icon color="secondary">find_in_page</Icon>
    //             </IconButton>
    //           </Link>

    //         )

    //       },
    //     },
    // },
  ];

  return (
    <div>
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <div className="flex flex-wrap justify-between">
            <Breadcrumb
              routeSegments={[
                { name: "RFQ", path: navigatePath + "/sales/rfq-form/rfqview" },
                { name: "RFQ LIST" },
              ]}
            />

            <div className="text-right">
              <Link to={navigatePath + "/sales/rfq-form/Rfqform"}>
                <Button
                  className="mt-2 py-2"
                  variant="outlined"
                  color="primary"
                >
                  <Icon>add</Icon> ADD NEW
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Card>
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
                      : item == "RFQ HISTORY"
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
          {tabIndex == 0 && <RFQView userList={userList} />}
          {tabIndex == 1 && <RFQTrash userList={userList} />}
          {tabIndex == 2 && <RFQHistory userList={poRfq} />}
        </Card>
      </div>
    </div>
  );
};

export default SimpleMuiTable;
