import React from 'react';

export const Componente = (props) => {
    console.log(props);
    return (
        <>
            Olá, eu sou um componente.
            <br />
            Seu nome é {props.nome} e minha cor favorita é {props.corFavorita}
            <br />
            {props.children}
            <br /><br /><br />
        </>
    );
};
export const CampoSelect = (props) => (
    <select name={props.name} id={props.id}>
        <option value="">Selecione</option>
        {props.lista.map(function(item, index) {
            return (
                <option value={item.value}>{item.text}</option>
            );
        })}
    </select>
);
function Painel(){
    const lista = [
        { text: 'Fortaleza', value: 'fortaleza' },
        { text: 'São Paulo', value: 'sao_paulo' },
        { text: 'Rio de Janeiro', value: 'rio_de_janeiro' }
    ];
    return (
        <>
            <h4>Painel</h4>
            <hr />
            <Componente nome="Márcio" corFavorita="azul"/>
            <Componente nome="Elias" corFavorita="preto">
                <input type="text" />
            </Componente>
            <CampoSelect name="estados" id="estados" lista={lista} />
        </>
    );
}

export default Painel;