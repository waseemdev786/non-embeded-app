import { useState } from "react";
import ToggleButton from "./ToggleButton";
import { primaryButtonStyle } from "../emotionStyled/common";

export default function Notifications() {

    const [newIssueFiled, setNewIssueFiled] = useState(false);
    const [issueStatusChanged, setIssueStatusChanged] = useState(false);
    const [reorderIssued, setReorderIssued] = useState(false);
    const [refundIssued, setRefundIssued] = useState(false);

    return (
        <section css={styles.wrap}>
            <h3>Merchant Notifications</h3>
            <p>The choice is yours. Decide what email you would like to receve from us</p>
            <div css={styles.card}>
                <div>
                    <h4>New Issue Filed</h4>
                    <ToggleButton data={{ value: newIssueFiled, setValue: setNewIssueFiled }} />
                </div>
                <div>
                    <h4>Issue Status Changed</h4>
                    <ToggleButton data={{ value: issueStatusChanged, setValue: setIssueStatusChanged }} />
                </div>
                <div>
                    <h4>Reorder Issued</h4>
                    <ToggleButton data={{ value: reorderIssued, setValue: setReorderIssued }} />
                </div>
                <div>
                    <h4>Refund Issued</h4>
                    <ToggleButton data={{ value: refundIssued, setValue: setRefundIssued }} />
                </div>
            </div>
            <button css={[primaryButtonStyle, styles.unsubscribeBtn]}>Unsubscribe from All</button>
        </section>
    );
}

const styles = {
    wrap: {
        display: "flex",
        flexDirection: "column",
        "& > h3": {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px"
        },
        "& > p": {
            marginBottom: "16px"
        }
    },
    card: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        borderRadius: "16px",
        backgroundColor: "white",
        padding: "24px",
        boxShadow: "0px 4px 8px rgba(110, 113, 255, 0.1)",
        "& > div": {
            display: "flex",
            alignItems: "center",
            "& h4": {
                flexGrow: "1",
                maxWidth: "280px",
                fontSize: "16px",
                fontWeight: "bold",
            }
        }
    },
    unsubscribeBtn: {
        backgroundColor: "#ff4e51",
        border: "2px solid #ff4e51",
        color: "white",
        marginTop: "24px",
        "&:hover": {
            backgroundColor: "#ff1a1c",
            borderColor: "#ff1a1c",
        }
    }
};
