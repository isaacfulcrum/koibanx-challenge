import { Dispatch, PropsWithChildren, useReducer } from "react";
import { createContext } from "./create-context";
import {
  UpdateFilterAction,
  filterReducer,
  initialState,
} from "./filter-reducer";
import { FilterState } from "../@types";

type FilterContextState = {
  filters: FilterState;
  dispatch: Dispatch<UpdateFilterAction>;
};

const [useContext, ContextProvider] = createContext<FilterContextState>();

// Interface to access the filter state and dispatch through a hook
// *****************************************************
export const useFilterContext = useContext;

// Provides access to all its children to the filter state and dispatch
// *****************************************************
export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <ContextProvider value={{ filters: state, dispatch }}>
      {children}
    </ContextProvider>
  );
};
