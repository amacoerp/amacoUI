import React, { Fragment, useEffect, useState } from "react";

import {
  Icon,
  Badge,
  Card,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core";
import url, {
  navigatePath,
} from "../../../../app/views/invoice/InvoiceService";

import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { getTimeDifference } from "utils.js";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useSettings from "app/hooks/useSettings";
import useNotification from "app/hooks/useNotification";
import shortId from "shortid";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  notification: {
    width: "var(--sidenav-width)",
    "& .notification__topbar": {
      height: "var(--topbar-height)",
    },
  },
  notificationCard: {
    "&:hover": {
      "& .delete-button": {
        cursor: "pointer",
        display: "unset",
        right: 0,
        marginTop: 6,
        top: 0,
        zIndex: 2,
      },
      "& .card__topbar__time": {
        display: "none",
      },
    },
    "& .delete-button": {
      display: "none",
      position: "absolute",
      right: 0,
      marginTop: 9,
    },
    "& .card__topbar__button": {
      borderRadius: 15,
      opacity: 0.9,
    },
  },
}));

const NotificationBar = ({ container }) => {
  const [panelOpen, setPanelOpen] = React.useState(false);

  const classes = useStyles();
  const { settings } = useSettings();
  const { deleteNotification, clearNotifications, notifications } =
    useNotification();

  const handleDrawerToggle = () => {
    setPanelOpen(!panelOpen);
    if (count > 0) {
      url.post("resetNotification").then(({ data }) => {
        setCount(0);
      });
    }
  };

  const [notificationss, setNotificationss] = useState([]);
  const [count, setCount] = useState(0);

  // setInterval(() => {
  //   if(count > 0){
  //     callFunction();
  //   }
   
  // }, 5000);

  useEffect(() => {
      url.get("getNotifications").then(({ data }) => {
        setCount(parseInt(data?.count));
        if (localStorage.getItem("role") == "SA") {
          setNotificationss(data?.noti);
        } else {
          let n = data?.noti?.map((item) => {
            return item.user_id;
          });
          if (n[0].includes(localStorage.getItem("user_id"))) {
            setNotificationss(
              data?.noti?.filter((obj) => { obj.n_for !== 'SA' && obj.user_id.includes(localStorage.getItem("user_id"))})
            );
          }
        }
      });
  }, []);

  return (
    <Fragment>
      <IconButton onClick={handleDrawerToggle}>
        <Badge color="secondary" badgeContent={count}>
          <Icon>notifications</Icon>
        </Badge>
      </IconButton>

      <ThemeProvider theme={settings.themes[settings.activeTheme]}>
        <Drawer
          width={"100px"}
          container={container}
          variant="temporary"
          anchor={"right"}
          open={panelOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div className={classes.notification}>
            <div className="notification__topbar elevation-z6 flex items-center p-4 mb-4">
              <Icon color="primary">notifications</Icon>
              <h5 className="ml-2 my-0 font-medium">Notifications</h5>
            </div>

            {notificationss?.map((notification) => (
              <div
                key={notification.id}
                className={clsx("relative", classes.notificationCard)}
              >
                {/* <IconButton
                  size="small"
                  className="delete-button bg-light-gray mr-6"
                  onClick={() => deleteNotification(notification.id)}
                >
                  <Icon className="text-muted" fontSize="small">
                    clear
                  </Icon>
                </IconButton> */}
                {/* <Link to={`/${notification.path}`} onClick={handleDrawerToggle}> */}
                <Card className="mx-4 mb-6" elevation={3}>
                  <div className="card__topbar flex items-center justify-between p-2 bg-light-gray">
                    <div className="flex items-center">
                      <div className="card__topbar__button flex items-center justify-between h-24 w-24 overflow-hidden">
                        <Icon
                          className="card__topbar__icon"
                          fontSize="small"
                          color={"error"}
                        >
                          {"done"}
                        </Icon>
                      </div>
                      <span className="ml-4 font-medium text-muted">
                        {notification.heading}
                      </span>
                    </div>
                    <small className="card__topbar__time text-muted">
                      {getTimeDifference(new Date(notification.created_at))} ago
                    </small>
                  </div>
                  <div className="px-4 pt-2 pb-4">
                    <p className="m-0">{notification.title}</p>
                    <small className="text-muted">
                      {notification.subtitle}
                    </small>
                  </div>
                </Card>
                {/* </Link> */}
              </div>
            ))}
            {/* {!!notificationss?.length && (
              <div className="text-center">
                <Button onClick={clearNotifications}>
                  Clear Notifications
                </Button>
              </div>
            )} */}
          </div>
        </Drawer>
      </ThemeProvider>
    </Fragment>
  );
};

export default NotificationBar;
