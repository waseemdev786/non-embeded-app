import { plainButtonStyle, primaryButtonStyle, secondaryButtonStyle } from "../emotionStyled/common";

export default function AccountSettings() {


    return (
        <section css={styles.wrap}>
            <h3>Account Settings</h3>
            <div css={styles.card}>
                <div css={styles.avatarSection}>
                    <div css={styles.avatar}>AK</div>
                    <div>
                        <h4>Upload your profile picture</h4>
                        <p>This makes it easier for your teammates<br />to recognize you</p>
                    </div>
                    <button css={[primaryButtonStyle, styles.uploadBtn]}>Upload Image</button>
                </div>
                <hr />
                <div css={styles.flexColumn}>
                    <div css={styles.flex}>
                        <div>
                            <span>Name</span>
                            <h4>Olivia Martin</h4>
                        </div>
                        <button css={plainButtonStyle}>Edit</button>
                    </div>
                    <div css={styles.flex}>
                        <div>
                            <span>Email Address</span>
                            <h4>bob.johnson@example.com</h4>
                        </div>
                        <button css={plainButtonStyle}>Edit</button>
                    </div>
                </div>
                <hr />
                <div css={styles.flexColumn}>
                    <div css={styles.flex}>
                        <div>
                            <span>Login</span>
                            <h4>Password</h4>
                        </div>
                        <button css={[secondaryButtonStyle, styles.updatePasswordBtn]}>Update Password</button>
                    </div>
                    <div css={styles.signoutSection}>
                        <div>
                            <h4>Sign out from all devices</h4>
                            <p>Logged in on a shared device but forgot to sign out? End all sessions by signing out from all devices</p>
                        </div>
                        <button css={[primaryButtonStyle, styles.signoutBtn]}>Sign out from all your devices</button>
                    </div>
                </div>
            </div>
            <div css={styles.card}>
                <div css={styles.deleteAccountSection}>
                    <h4>Delete your account</h4>
                    <p>By deleting your account, you will no longer be able to access any of your orders or claims</p>
                    <button css={[secondaryButtonStyle, styles.unsubscribeBtn]}>Delete your account</button>
                </div>
            </div>
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
        },
    },
    card: {
        display: "flex",
        flexDirection: "column",
        marginTop: "24px",
        borderRadius: "16px",
        backgroundColor: "white",
        boxShadow: "0px 4px 8px var(--blue-color-shade-2)",
        "& > hr": {
            border: "1px solid var(--blue-color-shade-1)",
        },
        "& > div": {
            padding: "24px",
            maxWidth: "900px"
        }
    },
    avatarSection: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: "16px",
        "& > div": {
            "& > h4": {
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
            },
            "& > p": {
                color: "var(--black-color-shade-1)",
            }
        }
    },
    avatar: {
        width: "100px",
        height: "100px",
        fontSize: "36px",
        borderRadius: "100%",
        backgroundColor: "var(--blue-green-color-shade-3)",
        color: "var(--gray-color-shade-1)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
    },
    uploadBtn: {
        transition: "background-color var(--transition-speed), border-color var(--transition-speed)",
        "&:hover": {
            backgroundColor: "var(--blue-color-shade-5)",
            borderColor: "var(--blue-color-shade-5)",
        }
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div": {
            "& > span": {
                color: "var(--black-color-shade-1)",
                display: "inline-flex",
                marginBottom: "8px"
            },
            "& > h4": {
                fontSize: "18px",
                fontWeight: "bold",
            }
        }
    },
    updatePasswordBtn: {
        color: "var(--blue-color-shade-6)",
        border: "2px solid var(--blue-color-shade-6)",
        transition: "background-color var(--transition-speed), color var(--transition-speed)",
        "&:hover": {
            backgroundColor: "var(--blue-color-shade-6)",
            color: "var(--gray-color-shade-1) ",
        }
    },
    signoutBtn: {
        transition: "background-color var(--transition-speed), border-color var(--transition-speed)",
        "&:hover": {
            backgroundColor: "var(--blue-color-shade-5)",
            borderColor: "var(--blue-color-shade-5)",
        }
    },
    signoutSection: {
        "& > div": {
            "& > p": {
                color: "var(--black-color-shade-1)",
                display: "inline-flex",
                marginBottom: "24px"
            },
            "& > h4": {
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "8px"
            }
        }
    },
    deleteAccountSection: {
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        "& > h4": {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "8px"
        },
        "& > p": {
            color: "var(--black-color-shade-1)",
            display: "inline-flex",
            marginBottom: "24px"
        }
    },

    unsubscribeBtn: {
        color: "var(--blue-color-shade-6)",
        border: "2px solid var(--blue-color-shade-6)",
        transition: "background-color var(--transition-speed), color var(--transition-speed)",
        "&:hover": {
            backgroundColor: "var(--blue-color-shade-6)",
            color: "var(--gray-color-shade-1) ",
        }
    }
};
