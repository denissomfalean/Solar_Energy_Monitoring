import './DeviceForm.css'
import {useState} from "react";
import deviceTypes from '../../../resources/data/DeviceTypes.json'
import {Button, Form, FormControl, FormSelect, InputGroup} from "react-bootstrap";

export const DeviceForm = (props) => {
    const [show, setShow] = useState(props.show);
    const [id, setId] = useState(props.id);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [maxEnergy, setMaxEnergy] = useState(0);
    const [type, setType] = useState("");

    const onSave = () => {
        // todo
        if(id !== undefined) {
            // update existing device
        }else {
            // save the new device and return its id
            //
        }
        console.log(`Saved device with id ${id}`);
    }

    return (
        <Form onSubmit={onSave}>
            <h1>Device form</h1>
            <InputGroup>
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl type={"input"} onChange={e => setName(e.target.value)} required/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Type</InputGroup.Text>
                <FormSelect type={"select"} onChange={e => setType(e.target.key)} required>
                    {
                        deviceTypes.map(type =>
                            <option key={type}>type</option>)
                    }
                </FormSelect>
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Description</InputGroup.Text>
                <FormControl type={"textarea"} onChange={e => setDescription(e.target.value)} required/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Max energy</InputGroup.Text>
                <FormControl type={"input"} onChange={e => setMaxEnergy(parseFloat(e.target.value))} required/>
            </InputGroup>
            <Button type={"submit"} variant={"success"}>Save</Button>
            <Button onClick={() => setShow(!show)} variant={"danger"}>Close</Button>
        </Form>
    )
}