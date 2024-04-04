import { globalLollipopState } from "../../types";

//De olika typerna för de olika actions
type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: string };

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

export const lollipopReducer = (state: globalLollipopState, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      break;

    default:
      break;
  }
};
