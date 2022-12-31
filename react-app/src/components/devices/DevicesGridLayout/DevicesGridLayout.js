import {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {DeviceInfoCard} from "../DeviceInfoCard/DeviceInfoCard";
import './DevicesGridLayout.css';
import {useNavigate} from "react-router-dom";

export const DevicesGridLayout = (props) => {
    const [devices, setDevices] = useState(props.info);
    const [measurements, setMeasurements] = useState(props.sensorData);
    const [status, setStatus] = useState(props.status);
    const navigate = useNavigate();

    const onSelectDevice = (deviceId) => {
        // todo: navigate to device details page
        console.log(`Selected device with id ${deviceId}!`);
    }

    const onEditDevice = (deviceId) => {
        console.log(`Editing device with id ${deviceId}!`);
        props.onEdit(deviceId);
    }

    const onToggleDevice = (deviceId) => {
        // todo
        console.log(`Turn device with id ${deviceId} on/off!`);
    }

    function getCurrentEnergy(deviceId) {
        const deviceMeasurements = measurements.filter(measurement => measurement.id === deviceId)
            .map(measurement => measurement.energy);
        const length = deviceMeasurements.length;

        // return the last value received from the sensor
        return deviceMeasurements[length - 1];
    }

    const displaySingleDevice = (deviceInfo) =>
        <Col className={"p-3"} key={deviceInfo.id}>
            <DeviceInfoCard info={deviceInfo}
                            status={status[deviceInfo.id]}
                            currentEnergy={getCurrentEnergy(deviceInfo.id)}
                            onSelectDevice={onSelectDevice}
                            onEditDevice={onEditDevice}
                            onToggleDevice={onToggleDevice}/>
        </Col>

    return (
        <Row sm={"3"} className={"align-items-stretch justify-content-start"}>
            {devices.map(displaySingleDevice)}
        </Row>
    )
}