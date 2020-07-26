import React from 'react';
import './form-input.styles.scss';

const formInput = ({handleChange, label, value, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} value={value} {...otherProps} />
        {
            label ?
            (<label className={`${value.length ? 'shrink' : ''} form-input-label`} >
                {label}
            </label>)
            : null
        }
    </div>
);

export default formInput;