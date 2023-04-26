// Filter data types
// *****************************************************
export type sortableFields = "comercio" | "cuit";

export type FilterState = {
  stringLike?: string;
  active?: boolean;
  currentPage?: number;
  rowsPerPage?: number;
  orderBy?: sortableFields;
  direction?: "asc" | "desc";
};

// DataTable types
// *****************************************************
export type TableFields = {
  id: string;
  comercio: string;
  cuit: string;
  concepto1: number;
  concepto2: number;
  concepto3: number;
  concepto4: number;
  concepto5: number;
  concepto6: number;
  balance: number;
  activo: boolean;
  ultimaVenta: string;
};

export type ColumnType = {
  label: string;
  selector: keyof TableFields;
  sortable?: boolean;
};
