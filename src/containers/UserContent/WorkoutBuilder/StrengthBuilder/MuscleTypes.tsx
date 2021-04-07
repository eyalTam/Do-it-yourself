export const CHEST = 'Chest'
export const ARMS = 'Arms'
export const LEGS = 'Legs'
export const BACK = 'Back'
export const ABS = 'Abs'

export const CategoriesMap: Map<string, string[]> = new Map();


CategoriesMap.set(CHEST, [
    "Wide blanket push-ups",
    "Chest compression with lying weights",
    "Narrow blanket push-ups",
    "Diamond Blanket Push-ups",
    "Blanket push-ups Negative slope",
    "butterfly",
    "Other"
]);

CategoriesMap.set(ARMS, [
    "Front hand elbow flexion",
    "Sitting elbows while sitting with a weight behind the head - back hand",
    "Tablets",
    "Hammers - front hand",
    "Lying down elbows with a weight behind the head - back hand",
    "Parallels against a bench - back hand",
    "Parallel against body weight - back hand",
    "Other"
]);

CategoriesMap.set(LEGS, [
    "Home Audio",
    "Headphones",
    "Bluetooth Speakers",
    "Car Audio",
    "Musical Instruments",
]);


CategoriesMap.set(BACK, [
    "Bicycles",
    "Electric scooters",
    "Electric bikes",
    "Segway",
]);


CategoriesMap.set(ABS, [
    "TVs",
    "Home Theater Audio & Video",
    "Media Streamers",
    "Accessories",
]);

// CategoriesMap.set("Appliances", [
//     "Kitchen Appliances",
//     "Washers & Dryers",
//     "Vacuums & Floor Care",
//     "Heating, Cooling & Air Quality",
// ]);

// CategoriesMap.set("Cameras, Camcorders & Drones", [
//     "Cameras & Lenses",
//     "Camcorders",
//     "Vlogging Gear",
//     "Drones",
//     "Accessories",
// ]);

// CategoriesMap.set("Health, Fitness & Personal Care", [
//     "Health & Wellness",
//     "Fitness",
//     "Baby Care",
//     "Personal Care & Beauty",
// ]);

// CategoriesMap.set("Home, Furniture & Office", [
//     "Home",
//     "Furniture",
//     "Office",
//     "Luggage & Travel",
//     "Outdoor Living",
// ]);

// CategoriesMap.set("Smart Home, Security & Wi-Fi", [
//     "Smart Home",
//     "Home Security & Monitoring",
//     "Wi-Fi & Networking",
// ]);

// CategoriesMap.set("Travel", [
//     "Flights",
//     "Vacations Deals",
// ]);