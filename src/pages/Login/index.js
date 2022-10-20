import React, { useContext } from 'react';
import Avatar from '../../images/avatar.jpg';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
function Login(){
 
    const { setUsuarioLogado } = useContext(AuthContext);
    const navigate = useNavigate();

    const styleImg = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        display: 'block',
        margin: '0 auto',
        position: 'relative',
        top: '-75px'
    };

    function logar() {
        alert("Logando");
        setUsuarioLogado(true);
        navigate('/');
    }

    return (
        <div className="container">
            <div className='row' style={{ marginTop: '100px' }}>
                <div className='col-4 offset-4' style={{ border: '1px solid #CCC', padding: '20px', borderRadius: '10px' }}>
                    <img src={Avatar} alt="Avatar" style={styleImg} />
                    <form onSubmit={logar}>
                        <div className='mt-3'>
                            <label className='form-label'>Login</label>
                            <input type="text" name="login" id="login"  className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Senha</label>
                            <input type="password" name="senha" id="senha"  className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <input type="submit" value="Acessar" className='btn btn-primary form-control' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
