import {ErrorPage} from "../error/ErrorPage";
import {isAuthorized, isLoggedIn} from "../services/session/Utils";

export const ProtectedPage = (props) => {
    const notLoggedInError = {
        message: "Unauthorized access!",
        details: "You cannot view this page, because you are not logged in!"
    }
    const notAuthorizedError = {
        message: "Unauthorized access!",
        details: "You cannot view this page, because you do not have sufficient" +
            " access rights."
    }
    return (isLoggedIn() ?
            <ErrorPage error={notLoggedInError}/>
            :
            props.authority === null || isAuthorized(props.authority) ?
                // if authorized return the component
                props.component
                : // if not authorized return an error page
                <ErrorPage error={notAuthorizedError}/>
    )
}