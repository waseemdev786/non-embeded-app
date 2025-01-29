import { useState } from "react"
import Guarantee from "../components/Guarantee";
import OrderEdit from "../components/OrderEdit";
import Notifications from "../components/Notifications";
import AccountSettings from "../components/AccountSettings";

export default function Settings() {
    const [activeTab, setActiveTab] = useState("Guarantee");

    return (
        <section css={styles.container}>
            <div css={styles.navWrap}>
                <button
                    css={[styles.button, activeTab === "Guarantee" && styles.activeBtn]}
                    onClick={() => setActiveTab("Guarantee")}
                >
                    Guarantee
                </button>
                <button
                    css={[styles.button, activeTab === "Order" && styles.activeBtn]}
                    onClick={() => setActiveTab("Order")}
                >
                    Order Edit
                </button>
                <button
                    css={[styles.button, activeTab === "Notifications" && styles.activeBtn]}
                    onClick={() => setActiveTab("Notifications")}
                >
                    Notifications
                </button>
                <button
                    css={[styles.button, activeTab === "Account" && styles.activeBtn]}
                    onClick={() => setActiveTab("Account")}
                >
                    Account
                </button>
            </div>

            {activeTab === "Guarantee" && <Guarantee />}
            {activeTab === "Order" && <OrderEdit />}
            {activeTab === "Notifications" && <Notifications />}
            {activeTab === "Account" && <AccountSettings />}

        </section>
    )
}

const styles = {
    container: { display: "flex", flexDirection: "column", gap: "48px" },
    navWrap: {
        display: "Grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        alignItems: "center",
        backgroundColor: "rgb(19, 19, 19)",
        padding: "8px",
        gap: "8px",
        borderRadius: "60px",
    },
    button: {
        padding: "16px",
        border: "none",
        borderRadius: "30px",
        background: "transparent",
        cursor: "pointer",
        color: "white",
        "&:hover": {
            background: "rgb(56, 56, 56)",
        },
    },
    activeBtn: {
        background: "white !important",
        color: "rgb(19, 19, 19) !important",
    }
}