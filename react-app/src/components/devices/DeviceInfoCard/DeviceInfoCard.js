import {Card} from "react-bootstrap";
import Toggle from 'react-toggle'
import {BsBarChartLine, BsPencilSquare} from "react-icons/bs";
import './DeviceInfoCard.css';
import './ReactToggle.css'

export const DeviceInfoCard = (props) => {
    const imgPath = require('../../../resources/device_avatars/' + props.info.type + '.png');

    return (
        <Card>
            <div className={props.info.type}>
                <Card.Header>
                    <BsPencilSquare className={"edit-icon"} onClick={() => props.onEditDevice(props.info.id)}
                    data-toggle={"tooltip"} title={"Edit"}/>
                    <Card.Img src={imgPath} onClick={() => props.onSelectDevice(props.info.id)}/>
                </Card.Header>
            </div>
            <Card.Body>
                <Card.Title>{props.info.name}</Card.Title>
                <Card.Subtitle>{props.info.description}</Card.Subtitle>
                <p>Max: {props.info.maxEnergy} kW/h</p>
                <div className={"d-flex justify-content-between align-items-center"}>
                    <Toggle defaultChecked={props.status.on}
                            onChange={() => props.onToggleDevice(props.info.id)}/>
                    <div className={"d-flex justify-content-end"}>
                        <BsBarChartLine/>
                        <h2 className={props.currentEnergy > props.info.maxEnergy? "warn": "ok"}>{props.currentEnergy}</h2>
                        <p>kW/h</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}