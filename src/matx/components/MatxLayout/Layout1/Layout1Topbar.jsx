import React, { useState, useEffect } from "react";
import {
  Icon,
  IconButton,
  MenuItem,
  Avatar,
  useMediaQuery,
  Hidden,Tooltip,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { MatxMenu, MatxSearchBox, ConfirmationDialog } from "matx";
import NotificationBar from "../SharedCompoents/NotificationBar";
import { Link } from "react-router-dom";
import ShoppingCart from "../SharedCompoents/ShoppingCart";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import useAuth from "app/hooks/useAuth";

import useSettings from "app/hooks/useSettings";
import { NotificationProvider } from "app/contexts/NotificationContext";
import history from "history.js";
import FormDialog from "../../../../app/views/sessions/login/changepassword";
import MemberEditorDialog from "../../../../app/views/sessions/login/changepassword";
import url, { navigatePath } from "app/views/invoice/InvoiceService";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  topbar: {
    top: 0,
    zIndex: 96,
    transition: "all 0.3s ease",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",

    "& .topbar-hold": {
      backgroundColor: palette.primary.main,
      height: 80,
      paddingLeft: 18,
      paddingRight: 20,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 16,
        paddingRight: 16,
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 14,
        paddingRight: 16,
      },
    },
    "& .fixed": {
      boxShadow: theme.shadows[8],
      height: 64,
    },
  },
  userMenu: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 24,
    padding: 4,
    "& span": {
      margin: "0 8px",
      // color: palette.text.secondary
    },
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    minWidth: 185,
  },
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { settings, updateSettings } = useSettings();
  const { user } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const fixed = settings?.layout1Settings?.topbar?.fixed;
  const userInfo = localStorage.getItem("user");
  const [dv, setDv] = useState("");
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
  };
  const [divi, setDivi] = useState([]);

  const DIV = [
    {
      id: 1,
      name: "TRADING",
    },
    {
      id: 3,
      name: "PRINTING",
    },
  ];

  const handleDeleteUser = (user) => {
    setShouldOpenConfirmationDialog(true);
  };

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: {
        leftSidebar: {
          ...sidebarSettings,
        },
      },
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;

    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }

    updateSidebarMode({ mode });
  };
  const logout = () => {
    url
      .post(`logoutLog/${user.id}`)
      .then(function (response) {
        localStorage.clear();
        window.location.reload();
        // routerHistory.push('/session/signin');
      })
      .catch(function (error) {});
  };
  const routerHistory = useHistory();
  const changeDivision = (div_id) => {
    setDv(div_id);
    localStorage.setItem("division", div_id);
    // window.location.reload();

    routerHistory.push("/dashboard/alternative");
    // routerHistory.push('/dashboard/alternative');
  };

  useEffect(() => {
    const d = user?.divs?.map((item) => {
      return item.id;
    });
    setDivi(d);
    setDv(localStorage.getItem("division"));
  }, []);

  return (
    <div className={classes.topbar}>
      <div className={clsx({ "topbar-hold": true, fixed: fixed })}>
        <div className="flex justify-between items-center h-full">
          <div className="flex pr-4">
            <IconButton
              name="sideToggle"
              onClick={handleSidebarToggle}
              className="pr-4"
            >
              <Icon name="toggle">menu</Icon>
            </IconButton>

            <div
              className="hide-on-mobile"
              style={{ textAlign: "right", marginLeft: 40 }}
            >
              {user?.division?.map((item) => {
                return (
                  <>
                    {item.name == "HQ " || item.name == "Manufacturing" ? (
                      <></>
                    ) : (
                      <>
                        {divi?.includes(item.id) && (
                         <Tooltip title={item.name}>
                            <Button
                            style={{
                              width: 180,
                              height: 64,
                              position: "relative",
                              left: -17,
                            }}
                            variant={item.id == dv && "contained"}
                            backgroundColor="#c7c7c7"
                            onClick={() => {
                              changeDivision(item.id);
                            }}
                          >
                            <div style={{ fontWeight: "bold" }}>
                              {/* {item.name.toUpperCase()} */}
                              {item.name == "Printing Division" ? (
                                <>
                                  <Icon>print</Icon>
                                </>
                              ) : item.name == "Trading Division" ?   <Icon>trending_up</Icon> : ''}
                            </div>
                          </Button>
                         </Tooltip>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            {/* <MatxSearchBox /> */}

            <MatxMenu
              menuButton={
                <div className={classes.userMenu}>
                  <Hidden xsDown>
                    <span>
                      <strong>{user?.name}</strong>
                    </span>
                  </Hidden>
                  <Avatar className="cursor-pointer" />
                </div>
              }
            >
              {/* <MenuItem>
                <Link className={classes.menuItem} to="/">
                  <Icon> home </Icon>
                  <span className="pl-4"> Home </span>
                </Link>
              </MenuItem> */}
              <MenuItem>
                <Link
                  className={classes.menuItem}
                  to={navigatePath + "/profile"}
                >
                  <Icon> person </Icon>
                  <span className="pl-4"> Profile </span>
                </Link>
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={(e) =>
                  routerHistory.push(navigatePath + "/changepass")
                }
              >
                <Icon> settings </Icon>
                <span className="pl-4">Change Password</span>
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
              </MenuItem>

              <MenuItem onClick={logout} className={classes.menuItem}>
                <Icon> power_settings_new </Icon>
                <span className="pl-4"> Logout </span>
              </MenuItem>
            </MatxMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Layout1Topbar);
