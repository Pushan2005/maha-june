"use client";

import FoodCard from "@/components/food-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import foodMenu, { foodItem } from "@/lib/temp/food";
import { useContext } from "react";
import { CartContext } from "@/components/foodCart/context";

export default function FoodPage() {
    // const fetchFoodItems = async () => {
    //     const res = await fetch(
    //         "https://607b-106-51-191-243.ngrok-free.app/api/food"
    //     );
    //     const foodItems = await res.json();
    //     return foodItems;
    // };

    // const foodItems = await fetchFoodItems();
    // console.log(foodItems);
    const foodItems: foodItem[] = foodMenu;
    const { cartTotal } = useContext(CartContext);

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
                    <Button>Checkout</Button>
                </div>
            </div>
        </div>
    );
}
