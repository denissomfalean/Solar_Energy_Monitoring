import "./DevicesPage.css";
import {SideNavigation} from "../../layouts/SideNavigation";
import {DevicesGridLayout} from "../../components/devices/DevicesGridLayout/DevicesGridLayout";
import devicesDataJson from '../../resources/data/DevicesData.json'
import deviceStatusJson from '../../resources/data/DeviceStatusData.json'
import sensorDataJson from '../../resources/data/SensorData.json'
import {Button, Modal} from "react-bootstrap";
import {DeviceForm} from "../../components/devices/DeviceForm/DeviceForm";
import {useState} from "react";

export const DevicesPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [formTitle, setFormTitle] = useState("");
    const [selectedDevice, setSelectedDevice] = useState(0);
    const [devicesData, setDevicesData] = useState(devicesDataJson);
    const [deviceStatus, setDeviceStatus] = useState(deviceStatusJson);
    const [sensorData, setSensorData] = useState(sensorDataJson);

    const onAddDevice = () => {
        console.log(`Adding a new device!`);
        setSelectedDevice(undefined);
        setFormTitle("Add device");
        setShowForm(true);
    }

    const saveChanges = (deviceData) => {
        if (deviceData.id === undefined || deviceData.id.length === 0) {
            const nextId = devicesData.length + 1;
            deviceData.id = nextId.toString();
            setDeviceStatus(prevState => {return {...prevState, [nextId]: {on: false}}});
            setDevicesData(prevState => [...prevState, deviceData]);
            console.log(`Added device with id ${deviceData.id}!`);
        } else {
            let others = devicesData.map(d => d.id === deviceData.id? deviceData:d);
            setDevicesData(others);
            console.log(`Updated device with id ${deviceData.id}!`);
        }
        return deviceData.id;
    }

    const onEditDevice = (id) => {
        console.log(`Edit device with id ${id}!`);
        const existingDevice = devicesData.find(d => d.id === id);
        if (existingDevice !== undefined) {
            setSelectedDevice(existingDevice);
            setFormTitle("Update device");
            setShowForm(true);
        }
    }

    const onChangeDeviceStatus = (id) => {
        const currStatus = deviceStatus[id].on;
        console.log(`Turn device with id ${id} ${currStatus ? "off" : "on"}!`);
        deviceStatus[id].on = !currStatus;
        setDeviceStatus(deviceStatus);
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
                <Modal show={showForm} onHide={() => setShowForm(!showForm)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{formTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DeviceForm setShow={setShowForm} data={selectedDevice} onSave={saveChanges}/>
                    </Modal.Body>
                </Modal>

                <DevicesGridLayout info={devicesData}
                                   status={deviceStatus}
                                   sensorData={sensorData}
                                   onEdit={onEditDevice}
                                   onChangeStatus={onChangeDeviceStatus}
                />
            </div>
        </div>
    )
}