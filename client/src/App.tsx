import { Container, Stack } from "@chakra-ui/react";
import Navber from "./components/Navbar";

function App() {
  return (
    <Stack h="100vh">
      <Navber />
      <Container></Container>
    </Stack>
  );
}

export default App;
