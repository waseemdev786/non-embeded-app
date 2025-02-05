import { SearchIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
export default function SearchInput({ data }) {

    const [value, setValue] = useState(data?.value ?? "");
    const handleValue = useCallback((e) => {
        setValue(e.target.value);
    }, [])

    return (
        <div css={styles.wrap}>
            <input
                css={styles.input}
                type="text"
                placeholder="Search by order no, name or email."
                value={value}
                onChange={handleValue}
            />
            <span css={styles.iconWrap}>
                <SearchIcon />
            </span>
        </div>
    )
}

const styles = {
    wrap: {
        display: "grid",
        alignItems: "center",
    },
    iconWrap: {
        gridArea: "1/1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        justifySelf: "start",
        padding: "6px",
        "& > svg": {
            width: "25px",
            height: "25px",
            fill: "var(--gray-color-shade-3)",
        },
    },
    input: {
        gridArea: "1/1",
        padding: "8px 16px 8px 32px",
        borderRadius: "32px",
        border: "2px solid var(--gray-color-shade-3)",
        outline: "none",
        minWidth: "300px",
        transition: "border-color var(--transition-speed)",
        color: "var(--black-color-shade-2)",
        "&::placeholder": {
            color: "var(--gray-color-shade-3)",
            fontSize: "14px",
            fontWeight: "normal",
        },
        "&:focus": {
            borderColor: "var(--black-color-shade-2)",
        }
    }

}