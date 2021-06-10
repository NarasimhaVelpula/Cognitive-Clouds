import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckBox from '../CheckBox';
import React from 'react';
import {setActiveUserIndex} from '../../ReduxStore/users'
import { useSelector, useDispatch } from 'react-redux'

export default function DataTable(props) {
    let type=props.type;
    const users=useSelector((state)=>state.users.users);
    const selectedUserIndex=useSelector((state)=>state.users.activeUserIndex);
    const dispatch = useDispatch()
    let handleChange=(key)=>{
        if(key!==selectedUserIndex){
            dispatch(setActiveUserIndex({id:key}))
        }
        else{
            dispatch(setActiveUserIndex({id:undefined}))
        }
    }
    
    return (
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >ID</TableCell>
            <TableCell >FirstName</TableCell>
            <TableCell >LastName</TableCell>
            <TableCell >UserName</TableCell>
           {type==='update' && <TableCell >Active</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((row,key) => (
            <TableRow key={row.firstName}>
              <TableCell align="middle">{key+1}</TableCell>
              <TableCell align="middle">{row.firstName}</TableCell>
              <TableCell align="middle">{row.lastName}</TableCell>
              <TableCell >{row.userName}</TableCell>
              {type==='update' && <TableCell ><CheckBox checked={selectedUserIndex===key} handleChange={(e)=>{handleChange(key)}} /></TableCell>}
            </TableRow>
          ))}
        </TableBody>
        </Table>
    )
}
