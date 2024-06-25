"use client";

import { foodItem } from "@/lib/temp/food";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import clsx from "clsx";
import { CartContext } from "./foodCart/context";

interface FoodCardProps extends foodItem {
    className?: string;
}

export default function FoodCard({
    _id,
    name,
    description,
    isVeg,
    price,
    rating,
    imgURL,
    className,
}: FoodCardProps) {
    const [count, setCount] = useState(0);
    const { cartTotal, setcartTotal } = useContext(CartContext);

    return (
        <div className={`w-auto flex min-h-[25vh]  ${className}`}>
            <div className="w-[60%] p-2">
                <div className="flex space-x-2 items-center">
                    <VegIcon isVeg={isVeg} />
                    <h1 className="text-xl font-bold text-center mr-auto">
                        {name}
                    </h1>
                </div>
                <p className="text-slate-500 mt-1 font-medium leading-none">
                    {description}
                </p>
                <p>Price: &#8377;{price}</p>
                <p>Rating: {rating}</p>
                {count === 0 && (
                    <div className="">
                        {/* add button */}
                        <Button
                            onClick={() => {
                                setCount(count + 1);
                                setcartTotal(cartTotal + price);
                            }}
                            className="bg-white text-black border border-rounded hover:text-white"
                        >
                            ADD
                        </Button>
                    </div>
                )}
                {count !== 0 && (
                    <div className="flex space-x-2 items-center">
                        {/* counter button */}
                        <div className="border flex space-x-2 items-center">
                            <Button
                                onClick={() => {
                                    setCount(count - 1);
                                    setcartTotal(cartTotal - price);
                                }}
                                className="text-sm bg-white hover:text-white text-black  rounded-full"
                            >
                                -
                            </Button>
                            <h1>{count}</h1>
                            <Button
                                onClick={() => {
                                    setCount(count + 1);
                                    setcartTotal(cartTotal + price);
                                }}
                                className="text-sm bg-white hover:text-white text-black border rounded-full"
                            >
                                +
                            </Button>
                        </div>
                        <h1>&#8377;{count * price}</h1>
                    </div>
                )}
            </div>
            <div className="w-[40%] flex items-center">
                <Image
                    className="w-full h-full object-cover"
                    src={imgURL}
                    alt={`${name} image`}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
}

function VegIcon({ isVeg }: { isVeg: boolean }) {
    return (
        <div
            className={cn(
                "h-6 w-6 border-[3px] flex justify-center items-center border-green-700 rounded-sm",
                {
                    "border-red-900": !isVeg,
                }
            )}
        >
            <div
                className={cn("h-4 w-4 border bg-green-700 rounded-full", {
                    "bg-red-900": !isVeg,
                })}
            ></div>
        </div>
    );
}
