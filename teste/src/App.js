import { TextField, Button } from '@material-ui/core';
import React , {useState} from 'react'


function Teste() {

  const [open , setOpen] = useState(false)


  return (
    <div >
      <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '5%' }}>
        
          <TextField
            required
            label="Email"
            variant="outlined"
            type='text'
            placeholder='digite aqui'
            style={{ margin: '20px' }} />


          <TextField
            required
            label="Senha"
            variant="outlined"
            type='password'
            placeholder='digite aqui'
            style={{ margin: '20px' }} />


          <Button type='submit' color='primary'>Enviar</Button>
    
      </form>


      <Button onClick={()=>{setOpen(!open)}} color='primary'>teste</Button>

            
      {open ? 'GABRIEL'  : 'MAURO'}






    </div>

  )
}

export default Teste;
