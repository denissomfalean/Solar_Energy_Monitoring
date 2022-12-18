import "./DevicesPage.css";
import {SideNavigation} from "../../layouts/SideNavigation";
import {DevicesGridLayout} from "../../components/devices/DevicesGridLayout/DevicesGridLayout";
import devicesInfo from '../../resources/data/DevicesData.json'
import deviceStatus from '../../resources/data/DeviceStatusData.json'
import sensorData from '../../resources/data/SensorData.json'
import {Button} from "react-bootstrap";

export const DevicesPage = () => {
    const onAddDevice = () => {
        // todo
        console.log(`Adding a new device!`);
    }

    return (
        <div>
            <SideNavigation/>
            <div className={"content flex justify-content-center align-items-center"}>
                <div className={"d-flex justify-content-between mt-3"}>
                <h1>My devices</h1>
                    <Button variant={"outline-secondary mt-3"} onClick={onAddDevice}> + New</Button>
                </div>
                <hr/>
            <DevicesGridLayout info={devicesInfo}
            status={deviceStatus}
            sensorData={sensorData}/>
            </div>
        </div>
    )
}