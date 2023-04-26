import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ColumnType, TableFields } from "../../../@types";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";

type DataTableProps = {
  caption?: string;
  columns: ColumnType[];
  data: TableFields[];
};

// DataTable component made with Chakra UI, it receives an array of columns and an array of data
// The columns are mapped to the data and displayed in a table
// Columns can be sorted by clicking on the header
// The data is paginated and sorted by the context
// ************************************************************************************************
const DataTable = ({ caption, columns = [], data = [] }: DataTableProps) => {
  // This function is used to display boolean values as "Sí" or "No"
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
              {columns.map((column) => (
                <TableHeader key={column.label} {...column} />
              ))}
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
      <Pagination />
    </Box>
  );
};

export default DataTable;
