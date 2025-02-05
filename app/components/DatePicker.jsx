import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@shopify/polaris-icons';


export default function DatePicker({ data }) {
    const datePickerRef = useRef(null);
    const [openDatePicker, setOpenDatePicker] = useState(false);

    const [{ startDate, endDate }, setDateRange] = useState({
        startDate: data?.startDate ?? new Date(),
        endDate: data?.endDate ?? new Date().setDate(new Date().getDate() + 10)
    });

    const handleStartDate = useCallback((event) => {
        const newStartDate = new Date(event.target.value);
        if (newStartDate < endDate) {
            setDateRange({ startDate: newStartDate, endDate });
        }
    }, [endDate]);

    const handleEndDate = useCallback((event) => {
        const newEndDate = new Date(event.target.value);
        if (newEndDate > startDate) {
            setDateRange({ startDate, endDate: newEndDate });
        }
    }, [startDate]);


    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setOpenDatePicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div css={style.wrapper} ref={datePickerRef}>
            <button
                onClick={() => setOpenDatePicker(!openDatePicker)}
                css={style.datePickerBtn}
            >
                <span>
                    {new Date(startDate).toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric" })} - {new Date(endDate).toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                </span>
                <span css={style.iconWarp}>{openDatePicker ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
            </button>
            {openDatePicker &&
                <div css={style.popup}>
                    <div
                        css={style.fieldWrap}>
                        <label css={style.label} htmlFor="startDate">Start</label>
                        <input
                            css={style.dateInput}
                            type="date" id="startDate" value={new Date(startDate).toISOString().split('T')[0]} onChange={handleStartDate} />
                    </div>
                    <div css={style.fieldWrap}>
                        <label css={style.label} htmlFor="endDate">End</label>
                        <input
                            css={style.dateInput}
                            type="date" id="endDate" value={new Date(endDate).toISOString().split('T')[0]} onChange={handleEndDate} />
                    </div>
                    <div css={style.actionWrap}>
                        <button
                            onClick={() => setOpenDatePicker(!openDatePicker)}
                            css={style.cancelBtn}>Cancel</button>
                        <button
                            onClick={() => setOpenDatePicker(!openDatePicker)}
                            css={style.submitBtn}>Submit</button>
                    </div>
                </div>
            }
        </div>
    )
}

const style = {
    wrapper: { position: "relative" },
    datePickerBtn: {
        padding: "8px 24px",
        borderRadius: "8px",
        backgroundColor: "var(--blue-color-shade-6)",
        color: "white",
        border: "2px solid var(--blue-color-shade-6)",
        outline: "none",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background-color var(--transition-speed), border-color var(--transition-speed)",
        gap: "8px",
        "&:hover": {
            backgroundColor: "var(--blue-color-shade-5)",
            borderColor: "var(--blue-color-shade-5)",
        }
    },
    iconWarp: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > svg": {
            width: "20px",
            height: "20px",
            fill: "var(--gray-color-shade-1)",
        }
    },
    popup: {
        position: "absolute",
        top: "calc(100% + 8px)",
        width: "100%",
        minWidth: "231px",
        left: "0",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "8px",
        backgroundColor: "white",
        boxShadow: "0px 4px 8px var(--blue-color-shade-2)",
        borderRadius: "8px",
        zIndex: "1",
    },
    fieldWrap: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    label: {
        color: "var(--blue-color-shade-6)",
        fontSize: "16px",
        fontWeight: "normal",
    },
    dateInput: {
        border: "1px solid var(--black-color-shade-2)",
        padding: "8px 16px",
        borderRadius: "8px",
    },
    actionWrap: {
        display: "flex",
        justifyContent: "space-between",
        "& > button": {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
            minWidth: "80px",
            borderRadius: "8px",
            cursor: "pointer",
            height: "100%"
        }
    },
    cancelBtn: {
        backgroundColor: "var(--gray-color-shade-1)",
        color: "black",
        border: "none",
        "&:hover": {
            backgroundColor: "var(--gray-color-shade-2)",
        }
    },
    submitBtn: {
        backgroundColor: "var(--blue-green-color-shade-2)",
        color: "white",
        border: "none",
        transition: "background-color var(--transition-speed)",
        "&:hover": {
            backgroundColor: "var(--blue-green-color-shade-3)",
        }
    }
}