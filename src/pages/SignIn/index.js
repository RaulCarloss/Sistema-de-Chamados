import { useState, useContext } from 'react' 
import { Link } from 'react-router-dom'; 

import './signin.css'
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {SignIn} = useContext(AuthContext);

    function handleSignIn(e) {
        e.preventDefault();

        if(email !=='' && password !== ''){
            SignIn(email, password);
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='logo do sistema de chamados' />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input 
                        type='text'
                        placeholder='Digite seu email'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <input 
                        type='password'
                        placeholder='Digite sua senha'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                    <button type='submit'>Acessar</button>
                </form>

                <Link to="/register">Criar uma conta</Link>

            </div> 
        </div>
    )
}