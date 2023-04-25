import { ChakraProvider } from "@chakra-ui/react";
import Main from "./views/Main";

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
