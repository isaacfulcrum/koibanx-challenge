import { Flex, IconButton, Th } from "@chakra-ui/react";
import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import { ColumnType, sortableFields } from "../../../@types";
import { useFilterContext } from "../../../context/context";

// Manages headers and sorting of the table
// When a header is clicked, it will sort the table by that column
// *****************************************************
const TableHeader = ({ label, sortable, selector }: ColumnType) => {
  const context = useFilterContext();
  if (!context) return null;

  const handleSort = (column: sortableFields) => {
    if (context.filters.orderBy === column) {
      // If the column is already sorted, it will change the direction
      context.dispatch({
        type: "update-filter",
        payload: {
          orderBy: column,
          direction: context.filters.direction === "asc" ? "desc" : "asc",
        },
      });
    } else {
      // If the column is not sorted, it will sort it ascending
      context.dispatch({
        type: "update-filter",
        payload: {
          orderBy: column,
          direction: "asc",
        },
      });
    }
  };
  return (
    <Th key={label}>
      <Flex align="center">
        {label}
        {sortable && (
          <IconButton
            aria-label="Sort"
            size="xs"
            mx="0.3em"
            onClick={() => handleSort(selector as sortableFields)}
          >
            {context.filters.orderBy !== selector ? (
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
};

export default TableHeader;
