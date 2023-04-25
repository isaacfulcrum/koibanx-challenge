import { Dispatch, PropsWithChildren, useReducer } from "react";
import { createContext } from "./create-context";
import {
  FilterState,
  UpdateFilterAction,
  filterReducer,
  initialState,
} from "./filter-reducer";

type FilterContextState = {
  filters: FilterState;
  dispatch: Dispatch<UpdateFilterAction>;
};

const [useContext, ContextProvider] = createContext<FilterContextState>();

export const useFilterContext = useContext;

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <ContextProvider value={{ filters: state, dispatch }}>
      {children}
    </ContextProvider>
  );
};
