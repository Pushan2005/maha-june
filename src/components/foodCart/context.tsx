import { createContext } from "react";

type cartContext = {
    cartTotal: number;
    setcartTotal: (amt: number) => void;
};

export const CartContext = createContext<cartContext>({} as cartContext);
