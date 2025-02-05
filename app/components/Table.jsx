
import { Fragment } from "react";

export default function Table({ data }) {
    const pagination = data.pagination;

    const handlePageChange = (page) => {
        console.log(`Navigated to page: ${page}`);
    };

    return (
        <Fragment>
            {/* Table */}
            <div css={styles.tableWrap}>
                <table css={styles.table}>
                    <thead>
                        <tr>
                            {data.header.map((item, index) => (
                                <th key={index}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.content.map((item, index) => (
                            <tr key={`${data?.key}-${index}`}>
                                {Object.keys(item).map((key, i) => (
                                    <td key={`${data?.key}-${index}-${i}`}>{item[key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div css={styles.paginationWrap}>
                <span>Showing 10 resutls of 12,408</span>
                <div css={styles.pagination}>
                    <button
                        css={pagination.currentPage === 1 ? styles.prevAndNextDisabled : styles.prevAndNext}
                        disabled={pagination.currentPage === 1}
                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                    >
                        Prev
                    </button>
                    <RenderPagination currentPage={pagination.currentPage} totalPages={pagination.totalPages}  handlePageChange={handlePageChange} />
                    <button
                        css={pagination.currentPage === pagination.totalPages ? styles.prevAndNextDisabled : styles.prevAndNext}
                        disabled={pagination.currentPage === pagination.totalPages}
                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

const RenderPagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pageButtons = [];
    const pageRange = 2; // Number of pages to show before and after the current page

    // Add the first page
    pageButtons.push(
        <button
            key={1}
            css={currentPage === 1 ? styles.activePageButton : styles.pageButton}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(1)}
        >
            1
        </button>
    );

    // Add dots before the middle pages if necessary
    if (currentPage > pageRange + 2) {
        pageButtons.push(<span key="dots-before">...</span>);
    }

    // Add the middle range of pages
    const startPage = Math.max(2, currentPage - pageRange);
    const endPage = Math.min(totalPages - 1, currentPage + pageRange);
    for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
            <button
                key={i}
                css={currentPage === i ? styles.activePageButton : styles.pageButton}
                disabled={currentPage === i}
                onClick={() => handlePageChange(i)}
            >
                {i}
            </button>
        );
    }

    // Add dots after the middle pages if necessary
    if (currentPage < totalPages - (pageRange + 1)) {
        pageButtons.push(<span key="dots-after">...</span>);
    }

    // Add the last page
    if (totalPages > 1) {
        pageButtons.push(
            <button
                key={totalPages}
                css={currentPage === totalPages ? styles.activePageButton : styles.pageButton}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(totalPages)}
            >
                {totalPages}
            </button>
        );
    }

    return pageButtons;
};


const styles = {
    tableWrap: {
        maxWidth: "100%",
        overflowX: "auto",
        scrollbarWidth: "thin",
    },
    table: {
        borderCollapse: "collapse",
        width: "100%",
        "& *": {
            whiteSpace: "nowrap",
        },
        "& th": {
            padding: "6px 16px",
            fontWeight: "normal",
            borderBottom: "2px dashed var(--blue-color-shade-2)",
            textAlign: "left",
        },
        "& td": {
            padding: "16px",
            textAlign: "left",
        },
        "& tbody tr:nth-of-type(even)": {
            backgroundColor: "var(--blue-color-shade-1)",
        },
        "& tbody button": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            padding: "4px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "background-color var(--transition-speed)",
            "& > svg": {
                width: "20px",
                height: "20px",
                fill: "var(--blue-color-shade-6)",
            },
            "&:hover": {
                background: "var(--blue-color-shade-2)",
            },
        }
    },
    paginationWrap: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        padding: "16px"
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        "& span": {
            padding: "8px"
        }
    },
    prevAndNext: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "var(--blue-color-shade-6)",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    prevAndNextDisabled: {
        background: "transparent",
        border: "none",
        cursor: "default",
        color: "var(--blue-color-shade-2)",
    },
    pageButton: {
        padding: "8px 16px",
        color: "var(--black-color-shade-2)",
        border: "1px solid var(--blue-color-shade-2)",
        borderRadius: "4px",
        background: "var(--gray-color-shade-1)",
        transition: "background-color var(--transition-speed)",
        cursor: "pointer",
        "&:hover": {
            background: "var(--blue-color-shade-1)",
        },
    },
    activePageButton: {
        padding: "8px 16px",
        border: "1px solid var(--blue-color-shade-6)",
        borderRadius: "4px",
        background: "var(--blue-color-shade-6)",
        color: "var(--gray-color-shade-1)",
        fontWeight: "bold",
    },
};
