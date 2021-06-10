import './App.css';
import DataTable from './components/DataTable';
import Button from './components/Button';
import InputFeilds from './components/InputFeilds';
import Paper from '@material-ui/core/Paper';
import {useState} from 'react'

function App() {
  const [type, setType] = useState('')
  const typeHandler=(e)=>{
    if(e==='add'){
      setType('add')
    }
    else{
      setType('update')
    }
  }
  return (
    <div className="App">
      {console.log('rerendingr')}
      <div className='side-container'>
          <Button buttonContent='ADD USER' clickHandler={()=>{typeHandler('add')}} />
          <Button buttonContent='UPDATE USER' clickHandler={()=>{typeHandler('update')}}/>
      </div>
      <div className='main-container'>
      <Paper elevation={1} style={{padding:'20px',height:'94vh ', backgroundImage: 'linear-gradient(to bottom right, #f5f4f4, white)' }} >
          {true && <InputFeilds type={type} />}
          <DataTable type={type}/>
      </Paper>
      </div>
    </div>
  );
}

export default App;
