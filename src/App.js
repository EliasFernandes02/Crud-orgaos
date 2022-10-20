import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Painel from "./pages/Painel";
import Doadores from "./pages/Doadores";
import Instituicoes from "./pages/Instituicoes";
import Orgaos from "./pages/Orgaos";
import Usuarios from "./pages/Usuarios";
import UsuarioForm from "./pages/Usuarios/Form";
import Login from "./pages/Login";
import DefaultLayout from "./layouts/DefaultLayout";
import RoutePrivate from './routes/RoutePrivate';


function App() {

  const lista = [
    {
      path: '/',
      element: <Painel />,
      exact: true,
      defaultLayout: true,
      isPrivate:true,
    },
    {
      path: '/doadores',
      element: <Doadores />,
      defaultLayout: true,
      isPrivate:true,
    },
    {
      path: '/instituicoes',
      element: <Instituicoes />,
      defaultLayout: true,
      isPrivate:true,
    },
    {
      path: '/orgaos',
      element: <Orgaos />,
      defaultLayout: true,
      isPrivate:true,
    },
    {
      path: '/usuarios',
      element: <Usuarios />,
      defaultLayout: true,
      isPrivate:true,
    },
    {
      path: '/usuarios/novo',
      element: <UsuarioForm />,
      defaultLayout: true,
      isPrivate:true,
    },
    {
      path: '/usuarios/editar/:id',
      element: <UsuarioForm />,
      defaultLayout: true,
      isPrivate:true,
    },
    {
      path: '/login',
      element: <Login />,
      defaultLayout: false,
      isPrivate:false,
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {lista.map((item, indice) => (
            <Route 
              path={item.path} 
              element={
                <RoutePrivate defaultLayout={item.defaultLayout} isPrivate={item.isPrivate}>
                  {item.element}
                </RoutePrivate>
              } 
              exact={item.exact ? 
                item.exact : false} 
              />
          ))}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

