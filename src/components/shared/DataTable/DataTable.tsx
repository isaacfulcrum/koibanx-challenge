import {
  Box,
  Flex,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ArrowUpDownIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { ColumnType, TableFields, sortableFields } from "../../../@types/data";
import { useFilterContext } from "../../../context/context";
import { NumberInput, Select } from "../Filters";

type DataTableProps = {
  caption?: string;
  columns: ColumnType[];
  data: TableFields[];
};

const DataTable = ({ caption, columns = [], data = [] }: DataTableProps) => {
  const context = useFilterContext();
  if (!context) return null;

  const handleSort = (column: sortableFields) => {
    if (context.filters.orderBy === column) {
      context.dispatch({
        type: "update-filter",
        payload: {
          orderBy: column,
          direction: context.filters.direction === "asc" ? "desc" : "asc",
        },
      });
    } else {
      context.dispatch({
        type: "update-filter",
        payload: {
          orderBy: column,
          direction: "asc",
        },
      });
    }
  };

  const handleBoolean = (value: boolean) => {
    if (value) return "Sí";
    return "No";
  };

  return (
    <Box>
      <TableContainer
        backgroundColor="white"
        whiteSpace="pre-wrap"
        borderRadius="lg"
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>{caption}</TableCaption>
          <Thead>
            <Tr>
              {columns.map((column) => {
                return (
                  <Th key={column.label}>
                    <Flex align="center">
                      {column.label}
                      {column.sortable && (
                        <IconButton
                          aria-label="Sort"
                          size="xs"
                          mx="0.3em"
                          onClick={() =>
                            handleSort(column.selector as sortableFields)
                          }
                        >
                          {context.filters.orderBy !== column.selector ? (
                            <ArrowUpDownIcon color="black" />
                          ) : (
                            <>
                              {context.filters.direction === "asc" && (
                                <ChevronUpIcon boxSize={18} />
                              )}
                              {context.filters.direction === "desc" && (
                                <ChevronDownIcon boxSize={18} />
                              )}
                            </>
                          )}
                        </IconButton>
                      )}
                    </Flex>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <Tr key={row.id}>
                  {columns.map((column) => {
                    return (
                      <Td key={`${row.id}-${column.label}`}>
                        {typeof row[column.selector] === "boolean"
                          ? handleBoolean(!!row[column.selector])
                          : row[column.selector]}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
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
                currentPage: val,
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
    </Box>
  );
};

export default DataTable;
