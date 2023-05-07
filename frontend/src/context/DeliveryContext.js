import { createContext, useReducer } from "react";

export const DeliveryContext = createContext();

export const deliveryReducer = (state, action) => {
  switch (action.type) {
    case "SET_DELIVERY":
      return {
        delivery: action.payload,
      };
    case "CREATE_DELIVERY":
      return {
        delivery: [action.payload, ...state.delivery],
      };
    case "DELETE_WORKOUT":
      return {
        delivery: state.delivery.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DeliveryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(deliveryReducer, {
    delivery: null,
  });

  return (
    <DeliveryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DeliveryContext.Provider>
  );
};
