import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../myStyle.css';

const TypeBar = () => {
    const info = [
        {id:1, name: 'Участники группы Wu-Tang clan'},
        {id:2, name: 'Магазин тематических товаров'},
        {id:3, name: 'Общий чат'},
    ]
    return (
        <ListGroup className="mt-4">
            {info.map(item =>
                <ListGroup.Item className={'list-group'} key={item.id}>
                    <div className={'list-group-value'}>{item.name}</div>
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default TypeBar;

