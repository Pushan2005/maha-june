import CartContextProvider from "@/components/foodCart/provider";
import { Toaster } from "@/components/ui/toaster";

export default function FoodLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CartContextProvider>
                {children}
                <Toaster />
            </CartContextProvider>
        </>
    );
}
