import React, { useContext } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/auth'

function RoutePrivate(props) {
    const navigate= useNavigate();
    const {usuarioLogado} = useContext(AuthContext);

    if(props.isPrivate ===true && usuarioLogado === false){
        navigate('/login');
    }

    if(props.isPrivate ===true) {
        navigate('/login');
    }

    if(props.defaultLayout === false) {
        return(
            <>
            {props.children}
            </>
        )
    }
    return (
        <DefaultLayout colorBarraMenu="#333" colorText="white">
            {props.children}
    
        </DefaultLayout>
    )
    
}

export default RoutePrivate;
