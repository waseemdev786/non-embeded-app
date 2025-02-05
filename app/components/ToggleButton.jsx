import { useCallback } from 'react';

export default function ToggleButton({ data }) {

    const handleToggle = useCallback(() => {
        data?.setValue(!data?.value);
    }, [data])


    return (
        <button
            onClick={handleToggle}
            css={[styles.toggle, data?.value ? styles.toggleOn : styles.toggleOff]}
        >
            <span css={styles.toggleCircle} />
        </button>
    )
}

const styles = {
    toggle: {
        width: "40px",
        height: "20px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "4px",
        transition: "background-color 0.3s ease",
    },
    toggleOn: {
        backgroundColor: "var(--blue-color-shade-6)",
        justifyContent: "flex-end",
    },
    toggleOff: {
        backgroundColor: "var(--gray-color-shade-3)",
        justifyContent: "flex-start",
    },
    toggleCircle: {
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: "white",
    },
}