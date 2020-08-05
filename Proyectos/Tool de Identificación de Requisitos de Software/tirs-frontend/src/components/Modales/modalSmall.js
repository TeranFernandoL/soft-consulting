import React from 'react';
import {Modal as ModalB} from 'react-bootstrap';


export default function ModalSmall(props) {
    const {isOpenModal, closeModal, children} = props;
    return (
        <ModalB show={isOpenModal} onHide={closeModal} centered>
            {children}
        </ModalB>
    );
}