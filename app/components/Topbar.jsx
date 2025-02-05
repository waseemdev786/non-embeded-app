import { Link } from "@remix-run/react";
import { MenuVerticalIcon } from '@shopify/polaris-icons';
import { primaryButtonStyle, primaryCircleButtonStyle, secondaryButtonStyle, secondaryCircleButtonStyle } from "../emotionStyled/common";

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
            <button css={secondaryCircleButtonStyle}><MenuVerticalIcon /></button>
        </header>
    )
}

const style = {
    header: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(100px, 250px)) auto auto",
        justifyContent: "end",
        alignItems: "center",
        gap: "16px",
        padding: "16px 24px",
        backgroundColor: "var(--black-color-shade-2)",
        "& svg": {
            fill: "var(--gray-color-shade-1)",
        }
    }
}
