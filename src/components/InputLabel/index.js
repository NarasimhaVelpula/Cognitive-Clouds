import React from 'react'
import TextField from '@material-ui/core/TextField';
import './inputLabel.css';

function InputLabel(props) {
    let {label,changeHandler,name,value}=props
    return (
        <div className='input-box'>
            <TextField id="standard-basic" label={label} onChange={changeHandler} name={name} value={value} />
        </div>
    )
}

export default InputLabel
