import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = props => {
    const { handleInputChange, value } = props;
    return (
        <input
            className="input"
            onChange={e => handleInputChange(e.target.value)}
            value={value}
        />
    );
};

Input.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default memo(Input);
