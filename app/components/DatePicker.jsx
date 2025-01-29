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
        backgroundColor: "#6e71ff",
        color: "white",
        border: "1px solid  #6e71ff",
        outline: "none",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        "&:hover": {
            backgroundColor: "#4a4aff",
            borderColor: "#4a4aff",
        }
    },
    iconWarp: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > svg": {
            width: "20px",
            height: "20px",
            fill: "white",
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
        boxShadow: "0px 4px 8px rgba(110, 113, 255, 0.1)",
        borderRadius: "8px",
        zIndex: "1",
    },
    fieldWrap: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    label: {
        color: "#6e71ff",
        fontSize: "16px",
        fontWeight: "normal",
    },
    dateInput: {
        border: "1px solid rgb(19, 19, 19)",
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
        backgroundColor: "rgb(219, 219, 219)",
        color: "black",
        border: "none",
        "&:hover": {
            backgroundColor: "rgb(200, 200, 200)",
        }
    },
    submitBtn: {
        backgroundColor: "#6e71ff",
        color: "white",
        border: "none",
        "&:hover": {
            backgroundColor: "#4a4aff",
        }
    }
}