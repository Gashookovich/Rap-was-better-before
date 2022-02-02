import React from 'react';
import {Row} from "react-bootstrap";
import ScoreItem from "./ScoreItem";
import {useSelector} from "react-redux";

const ScoreList = () => {
    const score = useSelector(state => state.clothes)
    return (
        <Row >
            {score.map(item =>
                <ScoreItem
                    key={item.id}
                    props={item}
                />
            )}
        </Row>
    );
};

export default ScoreList;