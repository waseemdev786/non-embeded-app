import Chart from "react-google-charts";
import DatePicker from "../components/DatePicker";
import { DashboardIcon } from "../components/Icons";
import SelectBox from "../components/SelectBox";

export default function AppIndex() {

  const guaranteeConversionData = [
    ["Index", "Value"],
    ["0", 1],
    ["1", 3],
    ["2", 2],
    ["3", 4],
    ["4", 1],
    ["5", 3],
    ["6", 2],
  ]
  const defaultChart = <Chart
    chartType="LineChart"
    width="100%"
    height="230px"
    data={guaranteeConversionData}
    options={{
      colors: ["#269fcf"],
      curveType: "function",
      legend: "none",
      hAxis: {
        textPosition: "none",
      },

      chartArea: {
        width: "90%",
        height: "92%",
      },
    }}
  />;
  const RevenueVsIssueData = [
    ["Index", "Value1", "Value2"],
    ["0", 1, 1],
    ["1", 3, 1],
    ["2", 2, 1],
    ["3", 4, 2],
    ["4", 1, 3],
    ["5", 3, 1],
    ["6", 2, 1],
  ]
  const revenueVsIssueChart = <Chart
    chartType="LineChart"
    width="100%"
    height="230px"
    data={RevenueVsIssueData}
    options={{
      colors: ["#269fcf", "#5ca490"],
      curveType: "function",
      legend: { position: "bottom" },
      hAxis: {
        textPosition: "none",
      },

      chartArea: {
        width: "80%",
        height: "80%",
      },
    }}
  />;

  const chartCards = [
    {
      title: "Guarantee Conversion Rate",
      chart: defaultChart
    },
    {
      title: "Guarantee Revenue Vs Issues Cost",
      chart: revenueVsIssueChart
    },
    {
      title: "Orders",
      chart: defaultChart
    },
    {
      title: "Guarantee Orders",
      chart: defaultChart
    }
  ]
  const cards = [
    {
      title: "Guarantee Revenue",
      value: "$0.00",
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Issue Cost",
      value: "$0.00",
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Total Orders",
      value: 0,
      linkTitle: "Manage Orders",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Guarantee Orders",
      value: 0,
      linkTitle: "Manage",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Other Orders",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Pre transit Orders",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "In transit Orders",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Out For Delivery",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Total Issues",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "New Issues",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Issue In Review",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Resolved Issues",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
    {
      title: "Decline Issues",
      value: 0,
      linkTitle: "Manage Issues",
      path: '/app',
      icon: DashboardIcon
    },
  ];

  return (
    <div css={styles.container}>
      <section css={styles.headerSection}>
        <h2 css={styles.headerTitle}>Analytics</h2>
        <div css={styles.headerControls}>
          <DatePicker data={{
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 10)
          }}
          />
          <SelectBox
            data={{
              options: ["Last 7 Days", "Last 30 Days", "Last 90 Days"],
              value: "Last 30 Days",
              key: "days",
            }}
          />
        </div>
      </section>
      <section css={styles.chartGrid}>
        {chartCards.map((card, index) => (
          <div key={`chart-card-${index}`} css={styles.chartCard}>
            <h3 css={styles.chartTitle}>{card.title}</h3>
            <div css={styles.chartContent}>{card.chart ?? card.chart}</div>
          </div>
        ))}
      </section>
      <section css={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} css={styles.card}>
            <div css={styles.cardContent}>
              <h3 css={styles.cardTitle}>{card.title}</h3>
              <strong css={styles.cardValue}>{card.value}</strong>
              <a href={card.path} css={styles.cardLink}>
                {card.linkTitle}
              </a>
            </div>
            <div css={styles.cardIcon}>{card.icon}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", gap: "48px" },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: { fontSize: "24px", fontWeight: "bold" },
  headerControls: { display: "flex", gap: "16px" },
  chartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
    gap: "24px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  chartCard: {
    display: "grid",
    padding: "16px",
    borderRadius: "16px",
    backgroundColor: "var(--gray-color-shade-1)",
    boxShadow: "0px 4px 8px var(--blue-color-shade-2)",
    gap: "16px",
  },
  chartTitle: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "var(--blue-color-shade-6)",
  },
  chartContent: { overflow: "hidden" },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    borderRadius: "16px",
    backgroundColor: "var(--gray-color-shade-1)",
    boxShadow: "0px 4px 8px var(--blue-color-shade-2)",
    gap: "16px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "24px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "var(--black-color-shade-2)",
  },
  cardValue: {
    fontSize: "40px",
    color: "var(--blue-color-shade-6)",
  },
  cardLink: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "var(--black-color-shade-2)",
    transition: "color var(--transition-speed)",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "var(--blue-color-shade-6)",
    },
  },
  cardIcon: {
    width: "60px",
    height: "60px",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "var(--blue-color-shade-6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > svg": {
      width: "30px",
      height: "30px",
      fill: "var(--gray-color-shade-1)",
    },
  },
};