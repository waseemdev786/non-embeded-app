import { Link, useLocation } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import { BillingIcon, DashboardIcon, IssuesIcon, OrdersIcon, SettingsIcon } from "./Icons";

export default function Sidebar() {
  const location = useLocation();
  const [selected, setSelected] = useState(0);

  const tabsArray = useMemo(() => [
    { title: 'Dashboard', path: '/app', icon: DashboardIcon },
    { title: 'Orders', path: '/app/orders', icon: OrdersIcon },
    { title: 'Issues', path: '/app/issues', icon: IssuesIcon },
    { title: 'Settings', path: '/app/settings', icon: SettingsIcon },
    { title: 'Billing', path: '/app/billing', icon: BillingIcon },
  ], []);


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
              <img src="/images/primary-logo.png" alt="logo" css={styles.logoImage} />
            </div>
            <h1 css={styles.logoText}><small>Complete Order</small><br/>Protection</h1>
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
    backgroundColor: "var(--gray-color-shade-1)",
    overflow: "auto",
    scrollbarWidth: "thin",
    boxShadow: "0px 0px 8px var(--blue-color-shade-2)",
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
    maxWidth: "80px",
    minWidth: "80px",
    height: "80px",
    borderRadius: "15px",
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    objectFit: "cover",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
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
    textDecoration: "none !important",
    backgroundColor: selected === index ? "var(--black-color-shade-2)" : "transparent",
    color: selected === index ? "var(--gray-color-shade-1) !important" : "" ,
    ":hover": {
      backgroundColor: selected === index ? "" : "var(--gray-color-shade-2)",
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