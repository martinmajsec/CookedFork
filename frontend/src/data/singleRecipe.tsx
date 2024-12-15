const recipe = {
    recipeId: 1,
    profile: {
        profileId: 1,
        userName: "johndoe",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        password: "password123",
        admin: false,
    },
    title: "Indijska Piletina Tikka Masala",
    description:
        "Iako vodi porijeklo iz Indije, toliko je popularno u Velikoj Britaniji da ga neki čak smatraju njihovim nacionalnim jelom. Mene je privukao egzotični ukus piletine iz marinade. Uglavnom se služi uz rižu.",
    servingsCount: 2,
    time: 60,
    steps: [
        {
            stepId: 1,
            stepNumber: 1,
            stepDescription:
                "Pomješajte sve sastojke za marinadu. Piletinu isjecite na manje ili veće komade pa uronite u pripremljenu marinadu. Neka odstoji tako najmanje jedan sat, po mogućnosti i duže.",
            images: [
                {
                    imageId: 2,
                    imagePath: "image/path/1",
                    imageDescription: "This is a description of an image!",
                },
            ],
        },
        {
            stepId: 2,
            stepNumber: 2,
            stepDescription:
                "Nakon toga piletinu izvadite iz marinade, pa na malo ulja pržite naglo sa svih strana. Izvadite i stavite na stranu. Na istom ulju pržite sitno isjeckan luk, zatim dodajte češnjak i pelat, promješajte, pa kuhajte nekoliko minuta. Dodajte začine, vratite piletinu u umak i dinstajte još par minuta.",
            images: [
                {
                    imageId: 3,
                    imagePath: "image/path/2",
                    imageDescription: "This is a description of an image!",
                },
            ],
        },
        {
            stepId: 4,
            stepNumber: 3,
            stepDescription:
                "Pred kraj dinstanja dodajte u umak marinadu u kojoj se mariniralo meso i kratko prokuhajte. Poslužite uz rižu.",
            images: [],
        },
    ],
    howToServe: null,
    advice: null,
    deletedAt: null,
    ingredientSections: [
        {
            ingredientSectionId: 1,
            ingredientSectionName: "Meso",
            ingredients: [
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 101,
                    foodName: "File pilećih prsa",
                    amount: 400,
                    ingredientId: 1,
                },
            ],
        },
        {
            ingredientSectionId: 2,
            ingredientSectionName: "Za marinadu",
            ingredients: [
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 56,
                    foodName: "jogurta",
                    amount: 250,
                    ingredientId: 2,
                },
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 235,
                    foodName: "čilija",
                    amount: 5,
                    ingredientId: 3,
                },
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 238,
                    foodName: "kurkume",
                    amount: 5,
                    ingredientId: 4,
                },
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 593,
                    foodName: "češnja češnjaka, izgnječenog",
                    amount: 25,
                    ingredientId: 5,
                },
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 79,
                    foodName: "korjena đumbira, izrendanog",
                    amount: 10,
                    ingredientId: 6,
                },
            ],
        },
        {
            ingredientSectionId: 3,
            ingredientSectionName: "+",
            ingredients: [
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 345,
                    foodName: "luka",
                    amount: 100,
                    ingredientId: 7,
                },
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 873,
                    foodName: "pelata",
                    amount: 500,
                    ingredientId: 8,
                },
                {
                    measurementUnit: {
                        measurementUnitId: 2,
                        measurementUnitName: "g",
                    },
                    foodId: 456,
                    foodName: "češnja češnjaka",
                    amount: 25,
                    ingredientId: 9,
                },
                {
                    measurementUnit: {
                        measurementUnitId: 1,
                        measurementUnitName: "ml",
                    },
                    foodId: 23,
                    foodName: "ulja",
                    amount: 10,
                    ingredientId: 10,
                },
            ],
        },
    ],
    categories: [
        {
            categoryId: 2,
            categoryName: "Main Dishes",
        },
    ],
    private: false,
};

export default recipe;
