import React,{useState,useEffect} from 'react'
import Button from '../Button'
import InputLabel from '../InputLabel'
import './InputFeilds.css'
import {addUser,deleteUser,updateUser} from '../../ReduxStore/users'
import { useSelector, useDispatch } from 'react-redux'

export default function InputFeilds(props) {
    let type=props.type;
    const users=useSelector((state)=>state.users.users);
    let selectedUserIndex=useSelector((state)=>state.users.activeUserIndex);
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        firstName:selectedUserIndex?users[selectedUserIndex].firstName:'',
        lastName:selectedUserIndex?users[selectedUserIndex].lastName:'',
        userName:selectedUserIndex?users[selectedUserIndex].userName:''
    })
    useEffect(() => {
        setUser({
            firstName:selectedUserIndex!==undefined?users[selectedUserIndex].firstName:'',
            lastName:selectedUserIndex!==undefined?users[selectedUserIndex].lastName:'',
            userName:selectedUserIndex!==undefined?users[selectedUserIndex].userName:''
        })
    },[selectedUserIndex,users])

    let handleChange=(e)=>{
        
        let temp=user;
        temp[e.target.name]=e.target.value;
        setUser({firstName:temp.firstName,lastName:temp.lastName,userName:temp.userName});
    }

    let addFunction=()=>{
        if(user.firstName!=='' && user.lastName!=='' && user.userName!==''){
            dispatch(addUser({user:user}))
        }
        else{
            return null;
        }
    }

    let updateFunction=()=>{
        if(user.firstName!=='' && user.lastName!=='' && user.userName!==''){ 
            let exists=users.some(u=>u.userName===user.userName)
            if(!exists){
                dispatch(updateUser({user:user}))
            }
        }
        else{
            return null
        }
    }
   
    if(type==='add')
    {
        return (
            <div className='addClass'>
                <InputLabel label="FirstName" value={user.firstName} changeHandler={handleChange} name='firstName'/>
                <InputLabel label="LastName" value={user.lastName} changeHandler={handleChange} name='lastName' />
                <InputLabel label="UserName" value={user.userName} changeHandler={handleChange} name='userName' />
                <Button buttonContent='ADD' clickHandler={addFunction}/>
            </div>
            
        )
    }
    else if(type==='update')
    {
        if(selectedUserIndex===undefined){
            return null
        }
        else{
        return (
            <div>
                 <InputLabel label="FirstName" value={user.firstName} changeHandler={handleChange} name='firstName'/>
                <InputLabel label="LastName" value={user.lastName} changeHandler={handleChange} name='lastName' />
                <InputLabel label="UserName" value={user.userName} changeHandler={handleChange} name='userName' />
                <div className='button-container'>
                    <Button buttonContent='UPDATE' clickHandler={updateFunction}/>
                    <Button buttonContent='DELETE' clickHandler={()=>{dispatch(deleteUser())}}/>
                </div>
            </div>
            
            )
        }
    }
    else{
        return null
    }
}