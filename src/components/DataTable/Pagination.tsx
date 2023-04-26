import { Flex } from "@chakra-ui/react";
import { useFilterContext } from "../../context/context";
import { NumberInput, Select } from "../Filters";

// Manages the pagination of the table by changing the rows per page and the current page
// *****************************************************
const Pagination = () => {
  const context = useFilterContext();
  if (!context) return null;
  return (
    <Flex p="0.5em" justify="flex-end" width="100%" gap="1em" align="center">
      <NumberInput
        label="Página"
        min={1}
        max={100000}
        value={context.filters.currentPage}
        onChange={(_, val) =>
          context.dispatch({
            type: "update-filter",
            payload: {
              currentPage: !val ? 1 : val,
            },
          })
        }
      />
      <Select
        formControlProps={{ maxW: "120px" }}
        label="No. de filas"
        placeholder=""
        options={[
          { value: 10, label: "10" },
          { value: 20, label: "20" },
          { value: 50, label: "50" },
          { value: 100, label: "100" },
        ]}
        value={context.filters.rowsPerPage}
        onChange={(e) =>
          context.dispatch({
            type: "update-filter",
            payload: {
              rowsPerPage: parseInt(e.target.value, 10),
            },
          })
        }
      />
    </Flex>
  );
};

export default Pagination;
