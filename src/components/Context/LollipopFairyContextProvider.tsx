import { useReducer } from "react";
import { LollipopFairyContext } from "./LollipopFairyContext";
import { lollipopReducer } from "./LollipopReducer";
import { initialLollipops } from "../../types";

//Typar upp propsen
type LollipopFairyContextProviderProps = {
  children: React.ReactNode;
};

const LollipopFairyContextProvider = ({
  children,
}: LollipopFairyContextProviderProps) => {
  const [state, dispatch] = useReducer(lollipopReducer, initialLollipops);
  return (
    <LollipopFairyContext.Provider value={{ state, dispatch }}>
      {children}
    </LollipopFairyContext.Provider>
  );
};

export default LollipopFairyContextProvider;
