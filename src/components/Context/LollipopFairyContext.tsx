import { createContext } from "react";
import { globalLollipopState, initialLollipops } from "../../types";

//Skapar contexten
export const LollipopFairyContext = createContext<{
  state: globalLollipopState; // state= Det globala statet som skapats för just lollipopsen
  dispatch: React.Dispatch<Action> /*  Funktion för att skicka åtgärder för att uppdatera tillståndet. 
  Action= typen Action som du skapat till din reducer */;
}>({
  state: initialLollipops, // Det initiala värdet
  dispatch: () => null, // Standardfunktion som inte gör något
});
