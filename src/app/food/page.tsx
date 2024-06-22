import FoodCard from "@/components/food-card";
import foodMenu, { foodItem } from "@/lib/temp/food";

export default async function FoodPage() {
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
                    ))
                )}
            </div>
        </div>
    );
}
