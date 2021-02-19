import React from 'react';
import '../../scss/style.scss';

const Select = ({...otherProps}) => {
    return (
        <select className="custom-selectbox" name="select-box" id="select" {...otherProps}>
            <option>Selece me</option>
        </select>
    )
}

export default Select;