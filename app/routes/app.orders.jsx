

import { ViewIcon } from "@shopify/polaris-icons";
import DatePicker from "../components/DatePicker";
import SearchInput from "../components/SearchInput";
import SelectBox from "../components/SelectBox";
import Table from "../components/Table";

import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
    try {
        const { session, admin } = await authenticate.admin(request);

        const allOrders = await admin.graphql(`#graphql
            query {
              orders(first: 10) {
                edges {
                  node {
                    id
                    updatedAt
                  }
                }
              }
        }`);

        const { data } = await allOrders.json();
        return ({ data, session });

    } catch (error) {
        console.log(error);
        return null;
    }

}


export default function Orders() {
    const loaderData = useLoaderData();

    console.log(loaderData);


    return (
        <div css={styles.container}>
            <section css={styles.headerSection}>
                <h2 css={styles.headerTitle}>All Orders</h2>
                <div css={styles.headerControls}>
                    <DatePicker data={{
                        startDate: new Date(),
                        endDate: new Date().setDate(new Date().getDate() + 10)
                    }}
                    />
                    <SelectBox
                        data={{
                            label: "Shipment Status",
                            options: ["Pending", "Shipped"],
                            value: "Shipped",
                            key: "shipment",
                        }}
                    />
                    <SelectBox
                        data={{
                            label: "Protection Status",
                            options: ["Active", "Inactive"],
                            value: "Active",
                            key: "protection",
                        }}
                    />
                </div>
            </section>
            <section>
                <div css={styles.tableCard}>
                    <div css={styles.tableHeader}>
                        <h3 css={styles.tableTitle}>All Orders</h3>
                        <div>
                            <SearchInput data={{ value: "" }} />
                        </div>
                    </div>
                    <Table
                        data={{
                            header: [
                                "Order Id",
                                "Tracking Status",
                                "Tracking",
                                "Order Date",
                                "Guarantee Status",
                                "Guarantee Paid",
                                "Customer Name",
                                "Customer Email",
                                "Items",
                                "Order Total",
                                "Issue Number",
                                "Action"
                            ],
                            content: Array.from({ length: 10 }, (_, index) => ({
                                orderId: "001",
                                trackingStatus: "In Transit",
                                tracking: "Lorem ipsum dolor",
                                orderDate: new Date().toLocaleDateString(),
                                guaranteeStatus: "Guaranteed",
                                guaranteePaid: "$90.12",
                                customerName: `Customer`,
                                customerEmail: `customer@example.com`,
                                items: 5,
                                orderTotal: "$100.00",
                                issueNumber: 4685961465,
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