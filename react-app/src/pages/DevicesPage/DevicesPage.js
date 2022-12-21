import "./DevicesPage.css";
import {SideNavigation} from "../../layouts/SideNavigation";
import {DevicesGridLayout} from "../../components/devices/DevicesGridLayout/DevicesGridLayout";
import devicesInfo from '../../resources/data/DevicesData.json'
import deviceStatus from '../../resources/data/DeviceStatusData.json'
import sensorData from '../../resources/data/SensorData.json'
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DeviceForm} from "../../components/devices/DeviceForm/DeviceForm";
import {useState} from "react";

export const DevicesPage = () => {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const onAddDevice = () => {
        console.log(`Adding a new device!`);
        setShowForm(true);
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
                <DeviceForm show={showForm}/>
            <DevicesGridLayout info={devicesInfo}
            status={deviceStatus}
            sensorData={sensorData}/>
            </div>
        </div>
    )
}