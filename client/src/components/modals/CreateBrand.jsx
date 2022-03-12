import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState("");
    const history = useHistory();

    const addBrand = () => {
        createBrand({ name: value }).then((data) => {
            setValue("");
            onHide();
            history.push(SHOP_ROUTE);
        });
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Додати бренд</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Введіть назву бренду"
                    ></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger">Закрити</Button>
                <Button variant="outline-success" onClick={addBrand}>
                    Додати
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
