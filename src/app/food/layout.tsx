import CartContextProvider from "@/components/foodCart/provider";

export default function FoodLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CartContextProvider>{children}</CartContextProvider>
        </>
    );
}
