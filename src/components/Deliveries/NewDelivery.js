import React, { Component } from "react";
import { Container } from "react-bootstrap";

import { Button, Modal, Form } from "react-bootstrap";

class NewDelivery extends Component {
    static defaultProps = {
        interval: 1000 * 60 * 5,
        title: 'Jenkins'
    }

    state = {
        loading: true,
        error: false
    }



    render() {
        return (
            <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
            </Modal.Dialog>
        );
    }
}

export default NewDelivery