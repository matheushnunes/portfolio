import Header from './header.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Aqui as rotas filhas serão renderizadas */}
    </>
  );
}
