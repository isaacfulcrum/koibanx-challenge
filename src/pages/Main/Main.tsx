import { Box } from "@chakra-ui/react";
import DataTable from "../../components/shared/DataTable";
import Filters from "./Filters";
import Logo from "./Logo";
import Preview from "./Preview";
import useMockData from "./useMockData";
import { FilterProvider } from "../../context/context";

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
