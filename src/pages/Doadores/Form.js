import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormLabel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '../../api';

function UsuarioForm() {
    
    const { id } = useParams();
    const [data, setData] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    async function getData() {
        const response = await api.get('usuarios/'+id);
        setData(response.data);
    }

    useEffect(() => {
        if(id) {
            getData();
        }
    }, []);

    return (
        <>
            <h4>Cadastro de Usuário</h4>
            <hr />
            <Link to="/usuarios">
                <Button variant="warning" size="sm">Voltar</Button>
            </Link>
            <hr />

            <Formik
                enableReinitialize
                initialValues={data}
                validationSchema={Yup.object().shape({
                    nome: Yup.string().required("Campo obrigatório"),
                    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
                    senha: Yup.string().required('Campo obrigatório').min(3, "A senha deve possui pelo menos 3 caracteres.")
                })}
                onSubmit={(values, functions) => {
                    if(id) {
                        api.put('usuarios/'+id, values);
                        alert("Usuario Atualizado com Sucesso");
                    } else {
                        api.post('usuarios', values);
                        functions.resetForm();
                        alert("Usuario Cadastrado com Sucesso");
                    }
                    
                }}
            >
                {({ handleSubmit, values, handleChange, errors}) => (
                    <form>
                        
                        <FormLabel>Nome</FormLabel>
                        <FormControl
                            name="nome" 
                            id="nome" 
                            value={values.nome}
                            onChange={handleChange}
                        />
                        {errors.nome && 
                            <span className="error">
                                {errors.nome}
                                <br />
                            </span>
                        }
                        
                        <FormLabel>E-mail</FormLabel>
                        <FormControl
                            type="email"
                            name="email" 
                            id="email" 
                            value={values.email}
                            onChange={handleChange}
                        />
                         {errors.email && 
                            <span className="error">
                                {errors.email}
                                <br />
                            </span>
                        }
                         <FormLabel>Senha</FormLabel>
                        <FormControl
                            type="password"
                            name="senha" 
                            id="senha" 
                            value={values.senha}
                            onChange={handleChange}
                        />
                         {errors.senha && 
                            <span className="error">
                                {errors.senha}
                                <br />
                            </span>
                        }
                        <div className='mt-3'>
                            <Button variant="success" size="sm" onClick={handleSubmit}>Salvar</Button>
                        </div>
                    </form>
                )}
            </Formik>
            
            
        </>
    );
}

export default UsuarioForm;