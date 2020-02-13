import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const Select = props => {
    const { handleChange, value, options } = props;
    return (
        <select
            className="select"
            onChange={e => handleChange(e.target.value)}
            value={value}
        >
            {options.map(({ value, name }) => {
                return (
                    <option value={value} key={value}>
                        {name}
                    </option>
                );
            })}
        </select>
    );
};

Select.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            name: PropTypes.string,
        })
    ).isRequired,
};

export default memo(Select);
