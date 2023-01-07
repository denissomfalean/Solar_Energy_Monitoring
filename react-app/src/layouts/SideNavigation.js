import {Nav} from 'react-bootstrap';
import {getSessionItem, SessionStorageKeys} from "../services/session/Utils";
import './SideNavigation.css'
import {
    BsArrowBarRight,
    BsCashStack,
    BsFillHouseFill,
    BsFillLightbulbFill,
    BsGraphUp,
    BsPersonCircle,
    BsSunFill
} from "react-icons/bs";

export const SideNavigation = () => {
    const user = getSessionItem(SessionStorageKeys.USER);
    return (
        <div>
            <Nav defaultActiveKey="/client" className="flex-column">
                <Nav.Link href="/home"><h5 className="gap-3 mb-5 mt-5 text-center"><BsSunFill/> Solar Energy Monitoring
                    Platform</h5></Nav.Link>
                <Nav.Link href="/home"><BsFillHouseFill/> Home</Nav.Link>
                <Nav.Link href="/devices"><BsFillLightbulbFill/> Devices</Nav.Link>
                <Nav.Link href="/costs"><BsCashStack/> Cost Management</Nav.Link>
                <Nav.Link href="/reports"><BsGraphUp/> Reports</Nav.Link>
                <Nav.Link href="/account"><BsPersonCircle/> Cristian</Nav.Link>
                <Nav.Link href="/logout"><BsArrowBarRight/> Logout</Nav.Link>
            </Nav>
        </div>
    )
}