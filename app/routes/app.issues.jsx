import DatePicker from "../components/DatePicker";
import SearchInput from "../components/SearchInput";
import SelectBox from "../components/SelectBox";
import Table from "../components/Table";
import { ViewIcon } from "@shopify/polaris-icons";

export default function Issues() {

    return (
        <div css={styles.container}>
            <section css={styles.headerSection}>
                <h2 css={styles.headerTitle}>All Issues</h2>
                <div css={styles.headerControls}>
                    <DatePicker data={{
                        startDate: new Date(),
                        endDate: new Date().setDate(new Date().getDate() + 10)
                    }}
                    />
                    <SelectBox
                        data={{
                            label: "Reason",
                            options: ["Reason"],
                            value: "Reason",
                            key: "reason",
                        }}
                    />
                    <SelectBox
                        data={{
                            label: "Status",
                            options: ["Active", "Inactive"],
                            value: "Active",
                            key: "status",
                        }}
                    />
                    <SelectBox
                        data={{
                            label: "Resolution",
                            options: ["Resolution"],
                            value: "Resolution",
                            key: "resolution",
                        }}
                    />
                </div>
            </section>
            <section>
                <div css={styles.tableCard}>
                    <div css={styles.tableHeader}>
                        <h3 css={styles.tableTitle}>All Issues</h3>
                        <div>
                            <SearchInput data={{ value: "" }} />
                        </div>
                    </div>
                    <Table
                        data={{
                            header: [
                                "Order Id",
                                "Issue Date",
                                "Order Number",
                                "Tracking",
                                "Reason",
                                "Issue Total",
                                "Customer Name",
                                "Customer Email",
                                "Guarantee Status",
                                "Guarantee Paid",
                                "Issue Status",
                                "Order Date",
                                "Resolution",
                                "Action"
                            ],
                            content: Array.from({ length: 10 }, (_, index) => ({
                                orderId: "001",
                                IssueDate: new Date().toLocaleDateString(),
                                orderNumber: 4685961465,
                                tracking: "Lorem ipsum dolor",
                                reason: "Reason",
                                issueTotal: 90.12,
                                customerName: `Customer`,
                                customerEmail: `customer@example.com`,
                                guaranteeStatus: "Guaranteed",
                                guaranteePaid: 12.34,
                                issueStatus: "Status",
                                orderDate: new Date().toLocaleDateString(),
                                resolution: "Resolution",
                                action: <button><ViewIcon /></button>
                            })),
                            pagination: {
                                currentPage: 1,
                                totalPages: 10,
                            },
                        }}
                    />
                </div>
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

};