import { FilterState } from "../@types";

// Initial state for the filter reducer
// *****************************************************
export const initialState: FilterState = {
  stringLike: "",
  currentPage: 1,
  rowsPerPage: 10,
};

// Action type for the filter reducer
// Accepts a partial FilterState object
// *****************************************************
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
