import {Nav} from 'react-bootstrap';
import './SideNavigation.css'
import {
    BsArrowBarRight,
    BsCashStack,
    BsFillLightbulbFill,
    BsGraphUp,
    BsPersonCircle,
    BsSunFill
} from "react-icons/bs";
import {useState} from "react";

export const SideNavigation = () => {
    const [showReportsDropdown,setShowReportsDropdown] = useState(false);
    return (
        <div>
            <Nav defaultActiveKey="/client" className="flex-column">
                <Nav.Link href="/"><h5 className="gap-3 mb-5 mt-5 text-center"><BsSunFill/> Solar Energy Monitoring Platform</h5></Nav.Link>
                <Nav.Link href="/"><BsPersonCircle/> Account</Nav.Link>
                <Nav.Link href="/devices"><BsFillLightbulbFill/> Devices</Nav.Link>
                <Nav.Link href="/costs"><BsCashStack/> Cost Management</Nav.Link>
                <Nav.Link onClick={()=>setShowReportsDropdown(!showReportsDropdown)}><BsGraphUp/> Reports</Nav.Link>
                {showReportsDropdown &&
                    <>
                        <Nav.Link className={"reports-dropdown-item"} href="/consumption-history-report"><BsCashStack/>History of Energy Consumption</Nav.Link>
                        <Nav.Link className={"reports-dropdown-item"} href="/production-history-report"><BsCashStack/> History of Energy Production</Nav.Link>
                    </>

                }
                <Nav.Link href="/logout"><BsArrowBarRight/> Logout</Nav.Link>
            </Nav>
        </div>
    )
}