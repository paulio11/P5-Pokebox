import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import styles from "./styles/App.module.css";
import PokemonList from "./pages/pokemon/PokemonList";
import PokemonDexPage from "./pages/pokemon/PokemonDexPage";

function App() {
  return (
    <>
      <NavBar />
      <Container className={styles.MainContainer}>
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/pokemon" element={<PokemonList />} />
          <Route exact path="/pokemon/:id" element={<PokemonDexPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
