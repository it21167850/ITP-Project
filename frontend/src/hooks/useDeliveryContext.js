import { DeliveryContext } from "../context/DeliveryContext";
import { useContext } from "react";

export const useDeliveryContext = () => {
  const context = useContext(DeliveryContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
