import React from 'react';
import {Modal as ModalB} from 'react-bootstrap';


export default function Modal(props) {
    const {isOpenModal, closeModal, children} = props;
    return (
        <ModalB show={isOpenModal} onHide={closeModal}size="lg"centered>
            {children}
        </ModalB>
    );
}