// import "../fake-db";
import React, { useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import AppContext from "./contexts/AppContext";
// import history from "history.js";
import routes from "./RootRoutes";
import { Store } from "./redux/Store";
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from "matx";
import sessionRoutes from "./views/sessions/SessionRoutes";
import AuthGuard from "./auth/AuthGuard";

import Swal from "sweetalert2";
import { AuthProvider } from "app/contexts/JWTAuthContext";
import { SettingsProvider } from "app/contexts/SettingsContext";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import url, { navigatePath } from "app/views/invoice/InvoiceService";

const App = () => {
  const historyInstance = createBrowserHistory();

  const checkClicks = useCallback((event) => {
    localStorage.setItem("expTime", 600000);
  }, []);

  const checkTime = () => {
    if (localStorage.getItem("expTime") == 0) {
    

      localStorage.clear();
      Swal.fire({
        title: 'For Security Reason',
        type: 'Warning',
        icon: 'warning',
        text: 'You Have Been Logged out.',
      })
        .then((result) => {
          localStorage.clear();
          window.location.reload();
        }).catch(function (error) {

    })
      
    } else {
      let time = localStorage.getItem("expTime");
      time = time - 1000;
      localStorage.setItem("expTime", time);
    }
  };

  setInterval(() => {
    if (localStorage.getItem("accessToken") && localStorage.getItem("expTime") !== 0) {
      checkTime();
    }
  }, 1000);

  useEffect(() => {
    
    document.addEventListener("keydown", checkClicks);
    window.addEventListener("mousemove", checkClicks);
    return () => {
      document.removeEventListener("keydown", checkClicks);
      window.removeEventListener("mousemove", checkClicks, false);
    };
  }, [checkClicks]);

  const history = useHistory();
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <SettingsProvider>
          <MatxTheme>
            <GlobalCss />
            <HashRouter history={history}>
              <AuthProvider>
                <MatxSuspense>
                  <Switch>
                    {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                    {sessionRoutes.map((item, i) => (
                      <Route
                        key={indexedDB}
                        path={item.path}
                        component={item.component}
                      />
                    ))}
                    {/* AUTH PROTECTED DASHBOARD PAGES */}
                    <AuthGuard>
                      <MatxLayout />
                    </AuthGuard>
                  </Switch>
                </MatxSuspense>
              </AuthProvider>
            </HashRouter>
          </MatxTheme>
        </SettingsProvider>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
