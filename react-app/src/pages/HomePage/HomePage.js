import './HomePage.css'
import {SideNavigation} from "../../layouts/SideNavigation";

export const HomePage = () => {
    return (
        <div>
            <SideNavigation/>
            <div className={"content flex justify-content-center align-items-center"}>
                <div className={"d-flex justify-content-between mt-3"}>
                    <h1>Home</h1>
                </div>
                <hr/>
            </div>
        </div>
    )
}