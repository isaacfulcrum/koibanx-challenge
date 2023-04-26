import {
  FormControl,
  FormLabel,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps as NumberInp,
} from "@chakra-ui/react";

type NumberInputProps = {
  label: string;
} & NumberInp;

const NumberInput = ({ label, ...props }: NumberInputProps) => {
  return (
    <FormControl maxW="150px">
      <FormLabel color="white" fontWeight="bold">
        {label}
      </FormLabel>
      <ChakraNumberInput
        min={0}
        backgroundColor="white"
        borderRadius="md"
        {...props}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </FormControl>
  );
};

export default NumberInput;
