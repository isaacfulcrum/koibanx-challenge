import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./pages/Main";

function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
