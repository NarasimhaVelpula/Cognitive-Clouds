import Checkbox from '@material-ui/core/Checkbox';
import React from 'react'

export default function CheckBox(props) {
    let {checked,handleChange}=props;
    return (
        <div>
            <Checkbox checked={checked} onChange={handleChange} />
        </div>
    )
}
