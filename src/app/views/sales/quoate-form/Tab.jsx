import React, { useState,useEffect } from "react";
import { Divider, Tab, Tabs,  Button } from "@material-ui/core";
import { Breadcrumb,ConfirmationDialog } from "matx";
import { Icon } from "@material-ui/core";
import { Link,useParams } from "react-router-dom";
// import MemberEditorDialog from "../../partycontact"
// import FormDialog from "../../partycontact"
import SimpleMuiTable from "./Quoateview";
import AcceptQuote from "./Acceptquote";
import RejectQuote from "./Rejectquote";
import Draft from "./Draft";
import { navigatePath } from "app/views/invoice/InvoiceService";

const CustomerViewer = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  
  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
   
  };

  const handleDeleteUser = (user) => {
    
    setShouldOpenConfirmationDialog(true);
  };

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };
  const { t } = useParams();
  useEffect(() => {

    setTabIndex(parseInt(t))
    // return t
    
  }, [ ])
  

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
      <div className="viewer_actions px-4 flex justify-between">
      <Breadcrumb
          routeSegments={[
            // { name: "Add new", path: "/sales/rfq-form/Rfqform" },
            { name: "SALES QUOTATION" },
          ]}
        />

        <div className="text-right">
          <Link to={navigatePath+"/Newquoteanalysis"}>
            <Button
              className="py-2"
              variant="outlined"
              color="primary"
            >
              <Icon>add</Icon> ADD NEW 
          </Button>
          </Link>
          <Link to={navigatePath+"/QuickQuote"}>
            <Button
              className="py-2 ml-2"
              variant="outlined"
              color="primary"
            >
              <Icon>av_timer</Icon> QUICK QUOTE
          </Button>
          </Link>
        </div>
      </div>
      </div>
      {/* <div>
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
      </div> */}
      
      <Tabs
        className="mt-4"
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabList.map((item, ind) => (
          <Tab className="capitalize" value={ind} label={item} key={ind} />
        ))}
      </Tabs>
      <Divider className="mb-6" />

       {tabIndex == 0 && <SimpleMuiTable />}
      {tabIndex == 1 && <AcceptQuote />}
      {tabIndex == 2 && <RejectQuote />}  
      {tabIndex == 3 && <Draft />}  
    </div>
  );
};

const tabList = ["NEW", "ACCEPTED QUOTATION", "TRASH","DRAFT"];

export default CustomerViewer;
