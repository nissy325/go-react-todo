import { Container, Stack } from "@chakra-ui/react";
import Navber from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL = "http://127.0.0.1:5000/api";

function App() {
  return (
    <Stack h="100vh">
      <Navber />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
