import React from 'react'
import Button from '@material-ui/core/Button';
import './button.css'
export default function PrimaryButton(props) {
    let {buttonContent,clickHandler}=props

    return (
        <div className='button-style'>
              <Button variant="contained" color="primary" onClick={clickHandler}>{buttonContent}</Button>
        </div>
    )
}
