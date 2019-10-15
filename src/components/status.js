import React from "react";
import { connect } from "react-redux";
import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import statusStyles from "./status.module.scss";
import { setSubmitted } from "../redux/actions/data";

const Status = ({ handleClose, submitted }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      autoHideDuration={6000}
      open={submitted}
      onClose={handleClose}
    >
      <SnackbarContent
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
        className={statusStyles.status}
        message={
          <span className={statusStyles.message}>
            <CheckCircleIcon className={statusStyles.icon} />
            Report sent successfully
          </span>
        }
      />
    </Snackbar>
  );
};

const mapStateToProps = ({ data }) => ({ submitted: data.submitted });

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(setSubmitted(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);