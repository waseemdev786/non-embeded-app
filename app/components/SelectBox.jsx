import { ChevronDownIcon, ChevronUpIcon } from "@shopify/polaris-icons";
import { useCallback, useState, useEffect, useRef } from "react";

export default function SelectBox({ data, variant = "default" }) {
    if (!data?.options || !data?.value || !data?.key) return null;

    const [openSelectBox, setOpenSelectBox] = useState(false);
    const options = data?.options;
    const [value, setValue] = useState(data?.value);
    const selectBoxRef = useRef(null);

    const handleValue = useCallback((option) => {
        setValue(option);
        setOpenSelectBox(false);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
                setOpenSelectBox(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div css={style.wrapper} ref={selectBoxRef}>
            <button
                onClick={() => setOpenSelectBox(!openSelectBox)}
                css={[style.selectBoxBtn, variant === "slim" ? style.selectBoxBtnSlim : {}]}
            >
                <span>{data?.label && <small css={style.label}>{data.label}: </small>}{value}</span>
                <span css={style.iconWarp}>{openSelectBox ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
            </button>
            {openSelectBox && (
                <div css={style.popup}>
                    {options.map((option, index) => (
                        <button
                            key={`${data?.key}-${index}`}
                            css={[
                                value === option ? style.selectedBtn : style.selectBtn,
                                variant === "slim" ? style.selectBtnSlim : {}
                            ]}
                            disabled={value === option}
                            onClick={() => handleValue(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const style = {
    wrapper: { position: "relative" },
    selectBoxBtn: {
        padding: "8px 24px",
        borderRadius: "8px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        outline: "none",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        "&:hover": {
            backgroundColor: "#f1f1f1",
        },
    },
    selectBoxBtnSlim: {
        padding: "4px 12px !important",
    },
    label: {
        color: "gray",
        fontSize: "14px",
        fontWeight: "normal",
    },
    iconWarp: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > svg": {
            width: "20px",
            height: "20px",
            fill: "black",
        },
    },
    popup: {
        position: "absolute",
        top: "calc(100% + 8px)",
        width: "100%",
        minWidth: "160px",
        right: "0",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "8px",
        backgroundColor: "white",
        boxShadow: "0px 4px 8px rgba(110, 113, 255, 0.1)",
        borderRadius: "8px",
        zIndex: "1",
    },
    selectBtn: {
        border: "none",
        backgroundColor: "transparent",
        color: "black",
        cursor: "pointer",
        padding: "8px 16px",
        borderRadius: "8px",
        "&:hover": {
            backgroundColor: "#f1f1f1",
        },
    },
    selectBtnSlim: {
        padding: "4px 8px !important",
    },
    selectedBtn: {
        border: "none",
        backgroundColor: "#f1f1f1",
        color: "black",
        cursor: "default",
        padding: "8px 16px",
        borderRadius: "8px",
    },
};
