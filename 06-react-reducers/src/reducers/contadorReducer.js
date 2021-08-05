import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };

export const contadorInit = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return contadorInitialState;
    default:
      return state;
  }
}
