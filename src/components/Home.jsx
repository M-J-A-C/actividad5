import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bienvenido a la Pagina prinicpal</h1>
      <p>Explora las secciones usando la barra de navegación.</p>
    </div>
  );
}

export default Home;