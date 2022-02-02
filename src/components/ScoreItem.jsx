import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ScoreItem = ({props}) => {
    const navigate = useNavigate()
    return (
        <Col md='4' className="mt-4">
            <Card className={'block-list'}>
                <Card.Img
                    height={210}
                    variant="top"
                    src={props.img}
                    onClick={() => navigate('score' + props.id)}
                />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.price}&#8381;</Card.Text>
                    <Card.Text>{props.desc}</Card.Text>
                    <Button style={{width: '100%', background: 'black', color: 'yellow'}}>КУПИТЬ</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ScoreItem;