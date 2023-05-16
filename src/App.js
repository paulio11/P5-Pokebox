import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/auth/LogIn";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/login" element={<LogIn />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
