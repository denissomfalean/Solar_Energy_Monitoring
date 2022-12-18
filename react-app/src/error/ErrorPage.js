import React from "react";
import {Modal} from "react-bootstrap";

export const ErrorPage = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{props.error.message}</Modal.Title>
                </Modal.Header>
                {
                    (props.error.details) ?
                        <Modal.Body>
                            {props.error.details}
                        </Modal.Body>
                        :
                        <div/>
                }
            </Modal.Dialog>
        </div>
    );
}
