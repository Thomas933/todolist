import React, { memo } from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = props => {
    const { handleClick, btnType } = props;
    return (
        <button className={`button ${btnType}`} onClick={handleClick}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    handleClick: PropTypes.func,
    btnType: PropTypes.string,
};

export default memo(Button);
