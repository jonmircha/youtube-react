import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

export const sumar = () => ({ type: INCREMENT });

export const restar = () => ({ type: DECREMENT });

export const sumar5 = () => ({ type: INCREMENT_5, payload: 5 });

export const restar5 = () => ({ type: DECREMENT_5, payload: 5 });

export const reset = () => ({ type: RESET });
