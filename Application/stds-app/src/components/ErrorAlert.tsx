import {ErrorFormat} from "../utils/errors/ErrorUtils";
import {Alert} from "@mui/material";
import * as React from "react";

const ErrorAlert = (props: { error: ErrorFormat }) => {
    const {error} = props;

    if (error.errorLevel === 0) {
        return null;
    }

    return (
        <Alert severity={error.errorLevel === 1 ? "warning" : "error"} sx={{marginTop:2}}>
            {error.message}
        </Alert>
    );
}

export default ErrorAlert;