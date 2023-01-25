import {ErrorFormat} from "../utils/errors/ErrorUtils";
import {Alert, Button} from "@mui/material";
import * as React from "react";
import {useHistory} from "react-router";

const ErrorAlert = (props: { error: ErrorFormat }) => {
    const {error} = props;
    const history = useHistory();

    if (error.errorLevel === 0) {
        return null;
    }

    return (
        <Alert
            severity={error.errorLevel === 1 ? "warning" : "error"}
            sx={{marginTop:2}}
            variant={"filled"}
            action={error.pdf !== "" ?
                <Button color="inherit" size="small" onClick={() => history.push("/pdf/" + error.pdf)}>
                    Voir le PDF
                </Button>
                : null
            }>
            {error.message}
        </Alert>
    );
}

export default ErrorAlert;