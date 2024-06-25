export type foodItem = {
    _id: string;
    name: string;
    description: string;
    isVeg: boolean;
    price: number;
    rating: number;
    imgURL: string;
};

const foodMenu: foodItem[] = [
    {
        _id: "1",
        name: "Pizza",
        description: "Delicious pizza with various toppings",
        isVeg: true,
        price: 250,
        rating: 4.5,
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
    },
    {
        _id: "2",
        name: "Burger",
        description: "Classic burger with juicy patty",
        isVeg: false,
        price: 100,
        rating: 4.2,
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Burger_in_black_background.png",
    },
    {
        _id: "3",
        name: "Salad",
        description: "Fresh and healthy salad",
        isVeg: true,
        price: 150,
        rating: 4.8,
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/76/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859039238.jpg",
    },
    {
        _id: "4",
        name: "Pasta",
        description: "Creamy pasta with your choice of sauce",
        isVeg: true,
        price: 200,
        rating: 4.6,
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Cheeze_white_sauce_pasta_-_Our_home_at_Pune_-_Maharashtra_-IMG_4846.jpg",
    },
    {
        _id: "5",
        name: "Sushi",
        description: "Traditional Japanese sushi rolls",
        isVeg: false,
        price: 300,
        rating: 4.9,
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/6/63/Packaged_sushi_with_non-raw_fish.jpg",
    },
];

export default foodMenu;
