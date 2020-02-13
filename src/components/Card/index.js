import React, { memo } from 'react';
import './Card.css';

const Card = props => {
    return <div className="card">{props.children}</div>;
};

export default memo(Card);
