import {Col, Row} from "react-bootstrap";
import {DeviceInfoCard} from "../DeviceInfoCard/DeviceInfoCard";
import './DevicesGridLayout.css';
import {useNavigate} from "react-router-dom";
import { setSelectedDeviceProperties } from "../../../services/session/userService";

export const DevicesGridLayout = (props) => {
    const navigate = useNavigate();

    const onSelectDevice = (deviceInfo) => {
        setSelectedDeviceProperties(deviceInfo.name,deviceInfo.maxEnergy,deviceInfo.description);
        navigate("/device-info-page");
    }

    const onEditDevice = (deviceId) => {
        props.onEdit(deviceId);
    }

    const onToggleDevice = (deviceId) => {
        props.onChangeStatus(deviceId);
    }

    function getCurrentEnergy(deviceId) {
        const deviceMeasurements = props.sensorData.filter(measurement => measurement.id === deviceId)
            .map(measurement => measurement.energy);
        const length = deviceMeasurements.length;

        // return the last value received from the sensor
        return deviceMeasurements[length - 1];
    }

    const displaySingleDevice = (deviceInfo) =>
        <Col className={"p-3"} key={deviceInfo.id}>
            <DeviceInfoCard info={deviceInfo}
                            status={props.status[deviceInfo.id]}
                            currentEnergy={getCurrentEnergy(deviceInfo.id)}
                            onSelectDevice={onSelectDevice}
                            onEditDevice={onEditDevice}
                            onToggleDevice={onToggleDevice}/>
        </Col>

    return (
        <Row sm={"3"} className={"align-items-stretch justify-content-start"}>
            {props.info.map(displaySingleDevice)}
        </Row>
    )
}