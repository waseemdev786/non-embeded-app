import { Link } from "@remix-run/react";
import {MenuVerticalIcon } from '@shopify/polaris-icons';
import { primaryButtonStyle, primaryCircleButtonStyle, secondaryButtonStyle } from "../emotionStyled/common";

export default function Topbar() {
    return (
        <header css={style.header}>
            <Link
                to="/app/tracking-portal"
                css={secondaryButtonStyle}
            >Tracking Portal</Link>
            <Link
                to="/app/resolution-portal"
                css={primaryButtonStyle}
            >Resolution Portal</Link>
            <Link
                to="/app"
                css={primaryCircleButtonStyle}
            >AK</Link>
            <button css={style.menuBtn}><MenuVerticalIcon /></button>
        </header>
    )
}

const style = {
    header: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap: "16px",
        padding: "16px 24px",
        backgroundColor: "rgb(19, 19, 19)"
    },
    menuBtn:{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        "& > svg": {
            width: "24px",
            height: "24px",
            fill: "white",
        }
    }
}
