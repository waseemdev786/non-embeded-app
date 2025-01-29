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
            fill: "rgb(219, 219, 219)",
        },
    },
    input: {
        gridArea: "1/1",
        padding: "6px 16px 6px 32px",
        borderRadius: "32px",
        border: "1px solid rgb(219, 219, 219)",
        outline: "none",
        minWidth: "300px",
        "&::placeholder": {
            color: "gray",
            fontSize: "14px",
            fontWeight: "normal",
        },
        "&:focus": {
            border: "1px solid rgb(19, 19, 19)",
        }
    }

}