import { Box } from "@chakra-ui/react";
import DataTable from "../../components/shared/DataTable";
import Logo from "./Logo";
import Filters from "./Filters";
import { FilterProvider } from "../../context/context";
import useMockData from "./useMockData";
import Preview from "./Preview";

const Main = () => {
  const { columns, data } = useMockData();

  return (
    <FilterProvider>
      <Box width="100vw" minH="100vh" p="1em">
        <Logo />
        <Filters />
        <DataTable columns={columns} data={data} />
        <Preview />
      </Box>
    </FilterProvider>
  );
};

export default Main;
