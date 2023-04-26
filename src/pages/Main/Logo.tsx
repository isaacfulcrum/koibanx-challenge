import { Box } from "@chakra-ui/react";

// Display the Koibanx logo
// ******************************************************
const Logo = () => {
  return (
    <Box as="figure" width="200px" height="52px">
      <img
        src="https://www.koibanx.com/_next/static/media/Logo_Koibanx_Blanco.9636f4e0.svg"
        alt="Koibanx"
      />
    </Box>
  );
};

export default Logo;
