"use client";

import FoodCard from "@/components/food-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import foodMenu, { foodItem } from "@/lib/temp/food";
import { useContext } from "react";
import { CartContext } from "@/components/foodCart/context";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useAccount, useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { WalletConnectButton } from "@/components/wallet/wallet-connect-button";

export default function FoodPage() {
    const { toast } = useToast();

    const foodItems: foodItem[] = foodMenu;
    const { cartTotal } = useContext(CartContext);
    const { sendTransaction, isPending } = useSendTransaction();

    const account = useAccount();
    // const router = useRouter();
    // if (account.status === "disconnected") {
    //     router.push("/connectwallet");
    // }

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl px-auto py-2 text-center sticky top-0 bg-black text-white font-bold">
                <Link href="/">-Menu-</Link>
            </h1>
            <div className="text-center p-2">
                <WalletConnectButton />
            </div>
            <div className="p-4">
                {foodItems.length === 0 ? (
                    <h1 className="text-2xl mx-auto mt-4">{"No food :("}</h1>
                ) : (
                    foodItems.map((foodItem) => (
                        <>
                            <FoodCard
                                className="my-2"
                                key={foodItem._id}
                                _id={foodItem._id}
                                name={foodItem.name}
                                price={foodItem.price}
                                description={foodItem.description}
                                isVeg={foodItem.isVeg}
                                rating={foodItem.rating}
                                imgURL={foodItem.imgURL}
                                quantity={foodItem.quantity}
                            />
                            <Separator className="my-6" />
                        </>
                    ))
                )}
            </div>
            <div className="px-auto flex justify-between p-2 px-4 text-center sticky bottom-0 bg-black font-bold">
                <div className="text-2xl flex space-x-1 text-white">
                    <p>Total: &#8377;</p>
                    <p>{cartTotal}</p>
                </div>
                <div className="">
                    <Sheet>
                        <SheetTrigger className="" asChild>
                            <Button
                                onClick={() => {
                                    if (account.status !== "connected")
                                        toast({
                                            title: "Please connect a wallet to place orders",
                                        });
                                }}
                                disabled={
                                    isPending || account.status !== "connected"
                                }
                                className=""
                                variant="outline"
                            >
                                {account.status !== "connected"
                                    ? "Connect a wallet"
                                    : isPending
                                    ? "Processing..."
                                    : "Checkout"}
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="h-auto" side={"bottom"}>
                            <SheetHeader>
                                {cartTotal !== 0 && (
                                    <SheetTitle>Confirm Order</SheetTitle>
                                )}
                            </SheetHeader>
                            <SheetDescription className="text-center my-2">
                                {cartTotal === 0
                                    ? "Cart is empty"
                                    : `Your order of ₹${cartTotal} stands at 0.01ETH`}
                            </SheetDescription>
                            <SheetFooter>
                                <SheetClose asChild>
                                    {cartTotal !== 0 && (
                                        <Button
                                            onClick={() => {
                                                sendTransaction({
                                                    to: `0x${process.env.NEXT_PUBLIC_ADDRESS}`,
                                                    value: parseEther("0.01"),
                                                });
                                                toast({
                                                    title: "Approve the transaction in your wallet",
                                                });
                                            }}
                                        >
                                            Continue to payment
                                        </Button>
                                    )}
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
