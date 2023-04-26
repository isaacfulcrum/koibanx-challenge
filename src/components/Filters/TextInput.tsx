import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

type TextInputProps = {
  label: string;
} & InputProps;

const TextInput = ({ label, ...props }: TextInputProps) => {
  return (
    <FormControl maxW="500px">
      <FormLabel color="white" fontWeight="bold">
        {label}
      </FormLabel>
      <Input backgroundColor="white" {...props} />
    </FormControl>
  );
};

export default TextInput;
