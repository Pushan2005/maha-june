"use client";

import { useState } from "react";
import { CartContext } from "./context";

export default function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cartTotal, setcartTotal] = useState(0);

    return (
        <CartContext.Provider
            value={{
                cartTotal: cartTotal,
                setcartTotal: setcartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
