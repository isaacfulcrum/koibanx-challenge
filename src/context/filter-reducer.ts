import { sortableFields } from "../@types/data";

export type FilterState = {
  stringLike?: string;
  active?: boolean;
  currentPage?: number;
  rowsPerPage?: number;
  orderBy?: sortableFields;
  direction?: "asc" | "desc";
};

// Initial state for the reducer
export const initialState: FilterState = {
  stringLike: "",
  currentPage: 1,
  rowsPerPage: 10,
};

export type UpdateFilterAction = {
  type: "update-filter";
  payload: {
    [key in keyof FilterState]?: FilterState[key];
  };
};

export const filterReducer = (
  state: FilterState = initialState,
  action: UpdateFilterAction
) => {
  if (action.type === "update-filter") {
    return { ...state, ...action.payload };
  }
  return state;
};
