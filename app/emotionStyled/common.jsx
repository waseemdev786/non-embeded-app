export const globalStyle = {
  "*": {
    fontFamily: "Mukta, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "16px",
  },
};

export const primaryButtonStyle = {
  backgroundColor: "#6e71ff",
  color: "white",
  border: "2px solid #6e71ff",
  padding: "12px 24px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#4a4aff",
    borderColor: "#4a4aff",
  }
}

export const plainButtonStyle = {
  backgroundColor: "transparent",
  color: "#6e71ff",
  border: "none",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
  "&:hover": {
    color: "#4a4aff",
    textDecoration: "underline",
  }
}

export const secondaryButtonStyle = {
  backgroundColor: "white",
  color: "#6e71ff",
  border: "2px solid #6e71ff",
  padding: "12px 24px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#f1f1f1",
    borderColor: "#f1f1f1",
  }
}

export const primaryCircleButtonStyle = {
  backgroundColor: "#6e71ff",
  color: "white",
  border: "2px solid #6e71ff",
  width: "48px",
  height: "48px",
  borderRadius: "100%",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#4a4aff",
    borderColor: "#4a4aff",
  }
}