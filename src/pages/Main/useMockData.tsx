import { ColumnType, TableFields } from "../../@types/data";

const useMockData = () => {
  const data: TableFields[] = [
    {
      id: "1",
      comercio: "Comercio-1",
      cuit: "123456789",
      concepto1: 1,
      concepto2: 2,
      concepto3: 3,
      concepto4: 4,
      concepto5: 5,
      concepto6: 6,
      balance: 20,
      activo: true,
      ultimaVenta: "01/01/2023",
    },
    {
      id: "2",
      comercio: "Comercio-2",
      cuit: "123456789",
      concepto1: 1,
      concepto2: 2,
      concepto3: 3,
      concepto4: 4,
      concepto5: 5,
      concepto6: 6,
      balance: 20,
      activo: true,
      ultimaVenta: "01/01/2023",
    },
    {
      id: "3",
      comercio: "Comercio-3",
      cuit: "123456789",
      concepto1: 1,
      concepto2: 2,
      concepto3: 3,
      concepto4: 4,
      concepto5: 5,
      concepto6: 6,
      balance: 20,
      activo: true,
      ultimaVenta: "01/01/2023",
    },
    {
      id: "4",
      comercio: "Comercio-4",
      cuit: "123456789",
      concepto1: 1,
      concepto2: 2,
      concepto3: 3,
      concepto4: 4,
      concepto5: 5,
      concepto6: 6,
      balance: 20,
      activo: true,
      ultimaVenta: "01/01/2023",
    },
  ];

  const columns: ColumnType[] = [
    {
      label: "ID",
      selector: "id",
    },
    {
      label: "Comercio",
      selector: "comercio",
      sortable: true,
    },
    {
      label: "CUIT",
      selector: "cuit",
      sortable: true,
    },
    {
      label: "Concepto 1",
      selector: "concepto1",
    },
    {
      label: "Concepto 2",
      selector: "concepto2",
    },
    {
      label: "Concepto 3",
      selector: "concepto3",
    },
    {
      label: "Concepto 4",
      selector: "concepto4",
    },
    {
      label: "Concepto 5",
      selector: "concepto5",
    },
    {
      label: "Concepto 6",
      selector: "concepto6",
    },
    {
      label: "Balance actual",
      selector: "balance",
    },
    {
      label: "Activo",
      selector: "activo",
    },
    {
      label: "Última venta",
      selector: "ultimaVenta",
    },
  ];

  return {
    data,
    columns,
  };
};

export default useMockData;
