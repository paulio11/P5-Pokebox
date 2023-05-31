import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import styles from "./styles/App.module.css";
import PokemonList from "./pages/pokemon/PokemonList";
import PokemonDexPage from "./pages/pokemon/PokemonDexPage";
import TrainerList from "./pages/trainers/TrainerList";
import TrainerProfilePage from "./pages/trainers/TrainerProfilePage";
import PostPage from "./pages/dairy/PostPage";
import PostForm from "./pages/dairy/PostForm";
import PostEditForm from "./pages/dairy/PostEditForm";
import ToTopButton from "./components/ToTopButton";
import Footer from "./components/Footer";
import AllPosts from "./pages/dairy/AllPosts";
import Settings from "./pages/account/Settings";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <div className={styles.Page}>
        <div>
          <NavBar />
          <Container className={styles.MainContainer}>
            <Routes>
              <Route exact path="/" element={<h1>Home</h1>} />
              <Route exact path="/login" element={<LogIn />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/pokemon" element={<PokemonList />} />
              <Route exact path="/pokemon/:id" element={<PokemonDexPage />} />
              <Route exact path="/trainers" element={<TrainerList />} />
              <Route
                exact
                path="/trainer/:id"
                element={<TrainerProfilePage />}
              />
              <Route exact path="/post/:id" element={<PostPage />} />
              <Route exact path="/posts" element={<AllPosts />} />
              <Route exact path="/newpost" element={<PostForm />} />
              <Route exact path="/editpost/:id" element={<PostEditForm />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route path="*" element={<Error404 page />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
      <ToTopButton />
    </>
  );
}

export default App;
