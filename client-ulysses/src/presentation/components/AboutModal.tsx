import React from "react";
import {Button, Modal} from 'react-bootstrap';

type Props = {
    show: boolean
    hide: () => void
}

const AboutModal: React.FC<Props> = ({show, hide}) => {

    return(
        <Modal
            show={show}
            onHide={hide}>
            <Modal.Header>
                <Modal.Title>Ulysses</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This is a cool web application to help you to organize your trips.
                <br/> <br/>
                2021 - Luisa Sanavi
            </Modal.Body>
        </Modal>
    );
}

export default AboutModal;