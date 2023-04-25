import { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useFilterContext } from "../../context/context";

const BASE_URL = "https://api.koibanx.com/stores";

const Preview = () => {
  const context = useFilterContext();
  useEffect(() => {
    if (context) {
      // Print filters to console
      // eslint-disable-next-line no-console
      console.log(context.filters);
    }
  }, [context]);

  if (!context) return null;
  return (
    <Box as="section">
      <Heading color="white" pb="1em">
        Preview
      </Heading>
      <Text as="pre" color="white">
        {`${BASE_URL}?q=${JSON.stringify(context.filters, null, 2)}`}
      </Text>
    </Box>
  );
};

export default Preview;
