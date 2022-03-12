import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const history = useHistory();

    return (
        <Col
            md={3}
            className="mt-3"
            onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}
        >
            <Card style={{ width: 150, cursor: "pointer" }}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className="text-black-50 d-flex justify-content-between">
                    <div className="">Samsung...</div>
                    <div className="mt-1 d-flex align-items-center">
                        <div className="">{device.rating}</div>
                        <Image
                            src={star}
                            wifth={18}
                            height={18}
                            alt="raiting"
                        />
                    </div>
                </div>
                <div className="">{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
