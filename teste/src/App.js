import { TextField, Button } from '@material-ui/core';


function Teste() {
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


    </div>

  )
}

export default Teste;
