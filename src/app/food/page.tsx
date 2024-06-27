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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FoodPage() {
    const foodItems: foodItem[] = foodMenu;
    const { cartTotal, cartItems } = useContext(CartContext);

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl px-auto py-2 text-center sticky top-0 bg-orange-500 font-bold">
                Menu
            </h1>
            <div className="p-4">
                {foodItems.length === 0 ? (
                    <h1 className="text-2xl mx-auto mt-4">{"No food :("}</h1>
                ) : (
                    foodItems.map((foodItem) => (
                        <>
                            <FoodCard
                                className="my-2"
                                key={String(foodItem._id)}
                                _id={foodItem._id}
                                name={foodItem.name}
                                price={foodItem.price}
                                description={foodItem.description}
                                isVeg={foodItem.isVeg}
                                rating={foodItem.rating}
                                imgURL={foodItem.imgURL}
                            />
                            <Separator className="my-6" />
                        </>
                    ))
                )}
            </div>
            <div className="px-auto flex justify-between p-2 px-4 text-center sticky bottom-0 bg-slate-300 font-bold">
                <div className="text-2xl flex space-x-1 text-slate-400 ">
                    <p>Total: &#8377;</p>
                    <p>{cartTotal}</p>
                </div>
                <div className="">
                    <Sheet>
                        <SheetTrigger className="" asChild>
                            <Button className="" variant="outline">
                                Checkout
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="h-auto" side={"bottom"}>
                            <SheetHeader>
                                <SheetTitle>Confirm Order</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click
                                    save when
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                {cartItems.length === 0 ? (
                                    <h1 className="text-sm text-muted-foreground">
                                        {" "}
                                        Cart is empty
                                    </h1>
                                ) : (
                                    cartItems.map((item) => (
                                        <>
                                            <Label>{item.name}</Label>
                                        </>
                                    ))
                                )}
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">
                                        Continue to payment
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
