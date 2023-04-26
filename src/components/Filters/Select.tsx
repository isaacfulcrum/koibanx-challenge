import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as SelProps,
  FormControlProps,
} from "@chakra-ui/react";

type Option = {
  label: string;
  value: string | number | undefined;
};

type SelectProps = {
  label: string;
  options?: Option[];
  formControlProps?: FormControlProps;
} & SelProps;

const Select = ({
  label,
  options = [],
  formControlProps,
  ...props
}: SelectProps) => {
  return (
    <FormControl maxW="300px" {...formControlProps}>
      <FormLabel color="white" fontWeight="bold">
        {label}
      </FormLabel>
      <ChakraSelect
        backgroundColor="white"
        placeholder="Seleccione una opción"
        {...props}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </FormControl>
  );
};

export default Select;
