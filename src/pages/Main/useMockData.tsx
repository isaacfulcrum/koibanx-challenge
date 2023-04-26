import { ColumnType, TableFields } from "../../@types";

// This function is used to generate random integers
const randomInt = () => Math.floor(Math.random() * 10000);

const data: TableFields[] = [
  {
    id: "1",
    comercio: "Comercio-1",
    cuit: "123456789",
    concepto1: randomInt(),
    concepto2: randomInt(),
    concepto3: randomInt(),
    concepto4: randomInt(),
    concepto5: randomInt(),
    concepto6: randomInt(),
    balance: randomInt(),
    activo: true,
    ultimaVenta: "01/01/2023",
  },
  {
    id: "2",
    comercio: "Comercio-2",
    cuit: "123456789",
    concepto1: randomInt(),
    concepto2: randomInt(),
    concepto3: randomInt(),
    concepto4: randomInt(),
    concepto5: randomInt(),
    concepto6: randomInt(),
    balance: randomInt(),
    activo: false,
    ultimaVenta: "01/01/2023",
  },
  {
    id: "3",
    comercio: "Comercio-3",
    cuit: "123456789",
    concepto1: randomInt(),
    concepto2: randomInt(),
    concepto3: randomInt(),
    concepto4: randomInt(),
    concepto5: randomInt(),
    concepto6: randomInt(),
    balance: randomInt(),
    activo: true,
    ultimaVenta: "01/01/2023",
  },
  {
    id: "4",
    comercio: "Comercio-4",
    cuit: "123456789",
    concepto1: randomInt(),
    concepto2: randomInt(),
    concepto3: randomInt(),
    concepto4: randomInt(),
    concepto5: randomInt(),
    concepto6: randomInt(),
    balance: randomInt(),
    activo: true,
    ultimaVenta: "01/01/2023",
  },
  {
    id: "5",
    comercio: "Comercio-5",
    cuit: "123456789",
    concepto1: randomInt(),
    concepto2: randomInt(),
    concepto3: randomInt(),
    concepto4: randomInt(),
    concepto5: randomInt(),
    concepto6: randomInt(),
    balance: randomInt(),
    activo: false,
    ultimaVenta: "01/01/2023",
  },
];

const useMockData = () => {
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
