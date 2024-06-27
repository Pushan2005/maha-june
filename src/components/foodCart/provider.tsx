"use client";

import { useState } from "react";
import { CartContext } from "./context";

export default function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cartTotal, setcartTotal] = useState(0);
    const [cartItems, setCartItems] = useState<
        {
            name: string;
            price: number;
            quantity: number;
        }[]
    >([]);

    return (
        <CartContext.Provider
            value={{
                cartTotal: cartTotal,
                setcartTotal: setcartTotal,
                cartItems: cartItems,
                setcartItems: setCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
