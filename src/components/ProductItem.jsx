import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ProductItem = ({props}) => {
    const navigate = useNavigate()
    return (
        <Col md='4' className="mt-4">
            <Card className={'block-list'}>
                <Card.Img
                    height={210}
                    variant="top"
                    src={props.img}
                    onClick={() => navigate('/' + props.id)}
                />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductItem;
