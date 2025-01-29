import { DashboardIcon } from "../components/Icons";
import SearchInput from "../components/SearchInput";
import Table from "../components/Table";
import { ViewIcon } from "@shopify/polaris-icons";

export default function Billing() {

    const cards = [
        {
            title: "Guarantee Revenue",
            helperText: "So far in december",
            value: "$0.00",
            icon: DashboardIcon
        },
        {
            title: "Accured Cost",
            helperText: "So far in december",
            value: "$0.00",
            icon: DashboardIcon
        },
        {
            title: "Guarantee Orders",
            helperText: "So far in december",
            value: "$0.00",
            icon: DashboardIcon
        },
    ];

    return (
        <div css={styles.container}>
            <section css={styles.cardGrid}>
                {cards.map((card, index) => (
                    <div key={index} css={[styles.card, index == 2 ? styles.primaryCard : {}]}>
                        <div css={styles.cardContent}>
                            <h3>{card.title}</h3>
                            <span>{card.helperText}</span>
                            <strong>{card.value}</strong>
                        </div>
                        <div css={[styles.cardIcon, index == 2 ? styles.primaryIcon : {}]}>{card.icon}</div>
                    </div>
                ))}
            </section>
            <section css={styles.tableCard}>
                <div css={styles.tableHeader}>
                    <h3 >All Billing</h3>
                    <div>
                        <SearchInput data={{ value: "" }} />
                    </div>
                </div>
                <Table
                    data={{
                        header: [
                            "Invoice Number", "Date", "Type", "Description", "Total", "Status", "Action"
                        ],
                        content: Array.from({ length: 10 }, (_, index) => ({
                            invoiceNumber: "001",
                            date: new Date().toLocaleDateString(),
                            type: "Type",
                            description: "Lorem ipsum dolor",
                            total: "$90.12",
                            status: "Status",
                            action: <button><ViewIcon /></button>
                        })),
                        pagination: {
                            currentPage: 1,
                            totalPages: 10,
                        },
                    }}
                />
            </section>
        </div>
    )
}

const styles = {
    container: { display: "flex", flexDirection: "column", gap: "48px" },
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
        gap: "24px",
        "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
        },
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
        padding: "24px",
        borderRadius: "16px",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "0px 4px 8px rgba(110, 113, 255, 0.1)",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& > h3": {
            fontSize: "16px",
            fontWeight: "normal",
            color: "rgb(19, 19, 19)",
            marginBottom: "8px",
        },
        "& > span": {
            fontSize: "12px",
            color: "gray",
            marginBottom: "20px",
        },
        "& > strong": {
            display: "inline-flex",
            fontSize: "40px",
            color: "#6e71ff",
        }
    },
    primaryCard: {
        backgroundColor: "#6e71ff",
        color: "white",
        "&  * ": {
            color: "white !important",
        },
    },
    cardIcon: {
        width: "60px",
        height: "60px",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#6e71ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #6e71ff",
        "& > svg": {
            width: "30px",
            height: "30px",
            fill: "white",
        },
    },
    primaryIcon: {
        border: "1px solid white",
    },
    tableCard: {
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0px 4px 8px rgba(110, 113, 255, 0.1)",
    },
    tableHeader: {
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }
}