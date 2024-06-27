import { createContext } from "react";

type cartContext = {
    cartTotal: number;
    setcartTotal: (amt: number) => void;
    cartItems: {
        name: string;
        price: number;
        quantity: number;
    }[];
    setcartItems: (
        items: {
            name: string;
            price: number;
            quantity: number;
        }[]
    ) => void;
};

export const CartContext = createContext<cartContext>({} as cartContext);
