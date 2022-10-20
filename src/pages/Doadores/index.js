import React, { useEffect, useState } from 'react';
import { Button, Table, Row, Col, FormControl } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../api';

function Doadores(){

    const [list, setList] = useState([]);

    async function getList() {
        const response = await api.get('usuarios');
        setList(response.data);
    }

    async function deletar(id) {
        api.delete('usuarios/'+id);
        getList();
        alert("Usuario deletado com sucesso");
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <>
            <h4>Usuários</h4>
            <hr />
            <Row>
                <Col md={10}>
                    <FormControl
                        name="search"
                        id="search"
                        placeholder='Pesquisar'
                    />
                </Col>
                <Col md={2}>
                    <Link to="/usuarios/novo">
                        <Button variant="success" size="sm">Novo Usuário</Button>
                    </Link>
                </Col>
            </Row>
            <hr />
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, indice) => (
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={`/usuarios/editar/${item.id}`}>
                                    <Button variant="primary" size="sm">Editar</Button>
                                </Link>
                                &nbsp;
                                <Button onClick={() => deletar(item.id)} variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </>
    );
}

export default Doadores;