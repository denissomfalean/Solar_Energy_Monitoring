import './DeviceForm.css'
import {useEffect, useState} from "react";
import deviceTypes from '../../../resources/data/DeviceTypes.json'
import {Button, Form, FormControl, FormSelect, InputGroup} from "react-bootstrap";

export const DeviceForm = (props) => {
    const [id, setId] = useState(props.data !== undefined? props.data.id: "");
    const [name, setName] = useState(props.data !== undefined? props.data.name: "");
    const [description, setDescription] = useState(props.data !== undefined? props.data.description: "");
    const [maxEnergy, setMaxEnergy] = useState(props.data !== undefined? props.data.maxEnergy: 0.0);
    const [type, setType] = useState(props.data !== undefined? props.data.type: deviceTypes[0]);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [hasError, setHasError] = useState(false);
    const MIN_NAME_LENGTH = 3;
    const MIN_DESCRIPTION_LENGTH = 3;

    const validateData = () => {
        let messageBuilder = "";
        let valid = true;
        if(name.length < MIN_NAME_LENGTH) {
            valid=false;
            messageBuilder += "Name is too short! ";
        }
        if(description.length < MIN_DESCRIPTION_LENGTH) {
            valid=false;
            messageBuilder += "Description is too short! ";
        }
        if(maxEnergy < 0) {
            valid=false;
            messageBuilder += "Energy value cannot be negative! ";
        }
        if(type === undefined) {
            valid=false;
            messageBuilder += "Must select the type of the device! ";
        }
        if(!valid) {
            setMessage(messageBuilder);
        }
        return valid;
    }

    const onSave = (e) => {
        e.preventDefault();
        const isValid = validateData();
        setHasError(!isValid);
        if(isValid) {
            const data = {id: id, name: name, description: description, maxEnergy: maxEnergy, type: type};
            const savedId = props.onSave(data);
            console.log(`Saved device with id ${savedId}!`);
            setMessage(`Saved device with id ${savedId}!`);
        }
        setShowMessage(true);
    }

    useEffect(() => {
        setMessage("");
        setShowMessage(false);
        setHasError(false);
    }, [name, type, description, maxEnergy]);

    const parseEnergyValue = (str) => {
        if(str.length === 0) {
            setMaxEnergy(0);
        }else{
            const value = parseFloat(str);
            setMaxEnergy(value);
        }
    }

    return (
        <Form onSubmit={onSave}>
            {showMessage? <p style={hasError?{color:"red"}:{color:"green"}}>{message}</p>:<p/>}
            <InputGroup className={"mt-2 mb-2"}>
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl type={"input"} onChange={e => setName(e.target.value)} value={name} required/>
            </InputGroup>
            <InputGroup className={"mt-2 mb-2"}>
                <InputGroup.Text>Type</InputGroup.Text>
                <FormSelect type={"select"} onChange={e => setType(e.target.value)} value={type} required>
                    {
                        deviceTypes.map(t =>
                            <option key={t} value={t}>{t}</option>)
                    }
                </FormSelect>
            </InputGroup>
            <InputGroup className={"mt-2 mb-2"}>
                <InputGroup.Text>Description</InputGroup.Text>
                <FormControl type={"textarea"} onChange={e => setDescription(e.target.value)} value={description} required/>
            </InputGroup>
            <InputGroup className={"mt-2 mb-2"}>
                <InputGroup.Text>Max energy</InputGroup.Text>
                <FormControl type={"input"} onChange={e => parseEnergyValue(e.target.value)} value={maxEnergy} required/>
            </InputGroup>
            <Button type={"submit"} variant={"success"} className={"me-2"} >Save</Button>
            <Button onClick={() => props.setShow(false)} variant={"danger"} className={"me-2"}>Close</Button>
        </Form>
    )
}