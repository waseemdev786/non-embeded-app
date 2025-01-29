import { Link, useLocation } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import { BillingIcon, DashboardIcon, IssuesIcon, OrdersIcon, SettingsIcon } from "./Icons";

export default function Sidebar() {
  const location = useLocation();
  const [selected, setSelected] = useState(0);

  const tabsArray =  useMemo(()=>[
    { title: 'Dashboard', path: '/app', icon: DashboardIcon },
    { title: 'Orders', path: '/app/orders', icon: OrdersIcon },
    { title: 'Issues', path: '/app/issues', icon: IssuesIcon },
    { title: 'Settings', path: '/app/settings', icon: SettingsIcon },
    { title: 'Billing', path: '/app/billing', icon: BillingIcon },
  ],[]);
  

  useEffect(() => {
    if (location?.pathname) {
      const pathName = location.pathname;
      const selectedTabIndex = tabsArray.findIndex((tab) => tab.path === pathName);
      if (selectedTabIndex !== -1) {
        setSelected(selectedTabIndex)
        return;
      }
      setSelected(null);
    }
  }, [location.pathname, tabsArray])


  return (
    <aside css={styles.aside}>
      <div css={styles.container}>
        <div css={styles.mainMenu}>
          <div css={styles.logoWrapper}>
            <div css={styles.logoBox}>
              <img src="/images/logo.png" alt="logo" css={styles.logoImage} />
            </div>
            <h1 css={styles.logoText}>Logo Here</h1>
          </div>
          <ul css={styles.tabsList}>
            {tabsArray.map((tab, index) => (
              <li key={`tab-${index}`} css={styles.tabItem}>
                <Link
                  to={tab.path}
                  css={styles.link(selected, index)}
                >
                  <div css={styles.iconWrapper}>{tab.icon}</div>
                  <h2 css={styles.tabTitle}>{tab.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div css={styles.footer}>
          <Link to="/app">Terms & Conditions</Link>
          <span>|</span>
          <Link to="/app">Privacy Policy</Link>
        </div>
      </div>
    </aside>

  );
}

const styles = {
  aside: {
    backgroundColor: "#ffffff",
    overflow: "auto",
    scrollbarWidth: "thin",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    gap: "34px",
  },
  mainMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "34px",
    padding: "24px 24px 0px 24px",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px 24px 24px",
    "& > *": {
      fontSize: "14px",
      color: "rgb(19, 19, 19)",
      textDecoration: "none",

    }
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height: "70px",
    padding: "8px",
    backgroundColor: "rgb(19, 19, 19)",
    borderRadius: "16px",
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    objectFit: "cover",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "rgb(19, 19, 19)",
  },
  tabsList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "0",
    margin: "0",
  },
  tabItem: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  link: (selected, index) => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: selected === index ? "rgb(19, 19, 19)" : "transparent",
    color: selected === index ? "rgb(255, 255, 255)" : "rgb(19, 19, 19)",
    ":hover": {
      backgroundColor: selected === index ? "rgb(19, 19, 19)" : "rgb(219, 219, 219)",
    },
  }),
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
  },
  tabTitle: {
    fontSize: "18px",
  },
};