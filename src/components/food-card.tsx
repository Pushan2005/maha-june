import { foodItem } from "@/lib/temp/food";
import Image from "next/image";
import { useState } from "react";

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
    // const [count, setCount] = useState(0);

    return (
        <div
            className={`w-auto flex h-[25vh] border-black border ${className}`}
        >
            <div className="w-[60%] border border-blue-400">
                <h1 className="text-2xl mx-auto">{name}</h1>
                <p>{description}</p>
                <p>{isVeg ? "Veg" : "Non-Veg"}</p>
                <p>Price: {price.toString()}</p>
                <p>Rating: {rating.toString()}</p>
            </div>
            <div className="w-[40%] border border-blue-400 flex items-center">
                <Image
                    src={imgURL.toString()}
                    alt={`${name} image`}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
}
