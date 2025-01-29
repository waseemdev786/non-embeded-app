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
                    <button css={primaryButtonStyle}>Upload Image</button>
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
                        <button css={secondaryButtonStyle}>Update Password</button>
                    </div>
                    <div css={styles.signoutSection}>
                        <div>
                            <h4>Sign out from all devices</h4>
                            <p>Logged in on a shared device but forgot to sign out? End all sessions by signing out from all devices</p>
                        </div>
                        <button css={secondaryButtonStyle}>Sign out from all your devices</button>
                    </div>
                </div>
            </div>
            <div css={styles.card}>
                <div css={styles.deleteAccountSection}>
                    <h4>Delete your account</h4>
                    <p>By deleting your account, you will no longer be able to access any of your orders or claims</p>
                    <button css={[primaryButtonStyle, styles.unsubscribeBtn]}>Delete your account</button>
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
        boxShadow: "0px 4px 8px rgba(110, 113, 255, 0.1)",
        "& > hr": {
            border: "1px solid #f5faff",
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
                color: "gray",
            }
        }
    },
    avatar: {
        width: "100px",
        height: "100px",
        fontSize: "36px",
        borderRadius: "100%",
        backgroundColor: "#6e71ff",
        color: "white",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
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
                color: "gray",
                display: "inline-flex",
                marginBottom: "8px"
            },
            "& > h4": {
                fontSize: "18px",
                fontWeight: "bold",
            }
        }
    },
    signoutSection: {
        "& > div": {
            "& > p": {
                color: "gray",
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
            color: "gray",
            display: "inline-flex",
            marginBottom: "24px"
        }
    },

    unsubscribeBtn: {
        backgroundColor: "#ff4e51",
        border: "2px solid #ff4e51",
        color: "white",
        "&:hover": {
            backgroundColor: "#ff1a1c",
            borderColor: "#ff1a1c",
        }
    }
};
