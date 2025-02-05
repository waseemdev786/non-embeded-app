import { useState } from "react";
import ToggleButton from "./ToggleButton";
import SelectBox from "./SelectBox";
import { primaryButtonStyle } from "../emotionStyled/common";

export default function Guarantee() {

    const [showOnCart, setShowOnCart] = useState(false);
    const [autoOptIn, setAutoOptIn] = useState(false);
    const [reorderDiscount, setReorderDiscount] = useState(false);
    const [excludedSKUs, setExcludedSKUs] = useState("");
    const [excludedCustomersTags, setExcludedCustomersTags] = useState("");

    return (
        <section css={styles.wrap}>
            <div>
                <div css={styles.sectionHeader}>
                    <h3>Guarantee Fee Type</h3>
                    <p>Choose from fixed or percentage-based protection.</p>
                </div>
                <div css={styles.cardsGrid}>
                    <div css={[styles.card, styles.secondaryCard]}>
                        <div css={styles.header}>
                            <h4>Fixed</h4>
                            <input type="radio" />
                        </div>
                        <div css={styles.body}>
                            <div>
                                <h5>$2.00</h5>
                                <span>Default Free</span>
                            </div>
                        </div>
                        <div css={styles.footer}>
                            <button css={styles.secondaryBtn}>Create Rules & Activate</button>
                        </div>
                    </div>
                    <div css={[styles.card, styles.primaryCard]}>
                        <div css={styles.header}>
                            <h4>Percentage</h4>
                            <input type="radio" />
                        </div>
                        <div css={styles.body}>
                            <div>
                                <h5>3%</h5>
                                <span>Per order</span>
                            </div>
                            <div css={styles.small}>
                                <h5>$0.99</h5>
                                <span>Minimum Fee</span>
                            </div>
                            <div css={styles.small}>
                                <h5>$8.00</h5>
                                <span>Maximum Fee</span>
                            </div>
                        </div>
                        <div css={styles.footer}>
                            <button css={styles.primaryBtn}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div css={styles.sectionHeader}>
                    <h3>Cart Settings</h3>
                </div>
                <div css={styles.regularCard}>
                    <div css={styles.flex}>
                        <h6>Show on cart</h6>
                        <ToggleButton data={{ value: showOnCart, setValue: setShowOnCart }} />
                    </div>
                    <div css={styles.flex}>
                        <h6>Auto Opt-in</h6>
                        <ToggleButton data={{ value: autoOptIn, setValue: setAutoOptIn }} />
                    </div>
                    <div css={styles.flex}>
                        <h6>Auto Opt-in</h6>
                        <SelectBox
                            data={{
                                options: ["Other items fulfilled"],
                                value: "Other items fulfilled",
                                key: "auto-opt-in",
                            }}
                            variant="slim"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div css={styles.sectionHeader}>
                    <h3>Resolution</h3>
                </div>
                <div css={styles.regularCard}>
                    <div css={styles.flex}>
                        <h6>100% discount on reorders</h6>
                        <ToggleButton data={{ value: reorderDiscount, setValue: setReorderDiscount }} />
                    </div>
                </div>
            </div>
            <div>
                <div css={styles.sectionHeader}>
                    <h3>Advanced Settings</h3>
                </div>
                <div css={styles.regularCard}>
                    <div css={styles.currencyFlex}>
                        <div>
                            <h6>Currency</h6>
                            <p>(Uses store currency)</p>
                        </div>
                        <span>USD</span>
                    </div>
                    <div css={styles.textAreaWrap}>
                        <div>
                            <h6>Product Exclusion</h6>
                            <p>Enter SKUs that should be ignored by App (Comma separated values)</p>
                        </div>
                        <textarea onChange={(e) => setExcludedSKUs(e.target.value)} value={excludedSKUs}></textarea>
                    </div>
                    <div css={styles.textAreaWrap}>
                        <div>
                            <h6>Customer Tag Exclusion</h6>
                            <p>Enter Customer Tags that are excluded from "Auto Opt-in" (Comma separated values)</p>
                        </div>
                        <textarea onChange={(e) => setExcludedCustomersTags(e.target.value)} value={excludedCustomersTags}></textarea>
                    </div>
                    <button css={[primaryButtonStyle, styles.updateBtn]}>update</button>
                </div>
            </div>
        </section>
    );
}

const commonCardStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    borderRadius: "16px",
    boxShadow: "0px 4px 8px var(--blue-color-shade-2)",
};

const headingStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
};

const styles = {
    wrap: {
        display: "flex",
        flexDirection: "column",
        gap: "48px",
    },
    sectionHeader: {
        marginBottom: "24px",
        "& > h3": headingStyles,
        "& > p": {
            fontSize: "14px",
            color: "var(--black-color-shade-1)",
        },
    },
    cardsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
        maxWidth: "700px",
        "@media (max-width: 900px)": {
            gridTemplateColumns: "1fr",
        },
    },
    card: commonCardStyles,
    secondaryCard: {
        backgroundColor: "var(--gray-color-shade-1)",
        color: "var(--black-color-shade-2)",
    },
    primaryCard: {
        backgroundColor: "var(--blue-color-shade-6)",
        color: "var(--gray-color-shade-1)",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 24px 0px 24px",
        "& > h4": {
            fontSize: "18px",
            fontWeight: "bold",
        },
        "& > input": {
            cursor: "pointer",
        },
    },
    body: {
        display: "flex",
        gap: "30px",
        alignItems: "center",
        paddingInline: "24px",
        "& h5": {
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "8px",
        },
        "& span": {
            fontSize: "12px",
        },
    },
    small: {
        "& h5": {
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "4px",
        },
        "& span": {
            fontSize: "10px",
        },
    },
    footer: {
        borderTop: "1px solid var(--blue-color-shade-1)",
        padding: "24px",
        "& button": {
            fontSize: "14px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            },
        },
    },
    secondaryBtn: {
        color: "var(--blue-color-shade-6)",
    },
    primaryBtn: {
        color: "var(--gray-color-shade-1)",
    },
    regularCard: {
        ...commonCardStyles,
        backgroundColor: "var(--gray-color-shade-1)",
        padding: "24px",
    },
    flex: {
        display: "flex",
        alignItems: "center",
        "& h6": {
            flexGrow: "1",
            maxWidth: "280px",
            fontSize: "16px",
            fontWeight: "bold",
        }
    },
    currencyFlex: {
        display: "flex",
        alignItems: "center",
        "& h6": {
            fontSize: "16px",
        },
        "& > div": {
            flexGrow: "1",
            maxWidth: "280px",
            "& > p": {
                fontSize: "12px",
                color: "var(--black-color-shade-1)",
            }
        },
        "& > span": {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid var(--gray-color-shade-3)"
        }
    },
    textAreaWrap: {
        "& > div": {
            marginBottom: "8px",
            "& h6": {
                fontSize: "16px",
            },
        },
        "& > div p": {
            fontSize: "12px",
            color: "var(--black-color-shade-1)",
        },
        "& > textarea": {
            maxWidth: "700px",
            width: "100%",
            height: "100px",
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid var(--gray-color-shade-3)",
            resize: "none"
        },

    },
    updateBtn: {
        maxWidth: "700px",
        transition: "background-color var(--transition-speed), border-color var(--transition-speed)",
        "&:hover": {
            backgroundColor: "var(--blue-color-shade-5)",
            borderColor: "var(--blue-color-shade-5)",
        }
    }

};
