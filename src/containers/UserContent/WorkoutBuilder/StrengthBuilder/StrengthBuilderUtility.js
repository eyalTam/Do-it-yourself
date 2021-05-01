export const CHEST = 'Chest';
export const ARMS = 'Arms';
export const SHOULDERS = 'Shoulders';
export const LEGS = 'Legs';
export const BACK = 'Back';
export const ABS = 'Abs';

export const musclesAmountDropBox =  [
    <option value='' key='Select difficulty Level'>Choose a number of muscles</option>,
    <option value={2} key={2}>{2}</option>,
    <option value={3} key={3}>{3}</option>,
    <option value={4} key={4}>{4}</option>,
    <option value={5} key={5}>{5}</option>,
    <option value={6} key={6}>{6}</option>
];  


export const strengthMusclesMap = new Map();


strengthMusclesMap.set(CHEST, [
    "Wide blanket push-ups",
    "Chest compression with weights lying weights",
    "Narrow blanket push-ups",
    "Diamond Blanket Push-ups",
    "Blanket push-ups Negative slope",
    "butterfly"
]);

strengthMusclesMap.set(ARMS, [
    "Front hand elbow flexion",
    "Sitting elbows while sitting with a barbell behind the head - back hand",
    "Tablets",
    "Hammers - front hand",
    "Lying down elbows with a weight behind the head - back hand",
    "Parallels against a bench - back hand",
    "Parallel against body weight - back hand",
    "Standing elbows against weights by tilting the body forward - back hand",
    "Chest squeezing with a narrow grip - back hand"
]);

strengthMusclesMap.set(SHOULDERS, [
    "Swing with one hand against a dumbbell",
    "Narrow shoulder pressure against weights",
    "Shoulder removal against weights",
    "Bending shoulder against weights",
    "Wide shoulder press against weights",
    "Rowing up against weights",
    "Arnold click",
    "Standing shoulder flexion Hammer grip - rotation",
    "Bending shoulders at an angle",
    "Shoulder removal by tilting the body forward"

]);


strengthMusclesMap.set(LEGS, [
    "Squat with / without weight",
    "Lunch",
    "Dead Lift",
    "One leg Dead lift ",
    "Sumo Squat",
    "Squat kick",
    "Swing with kettlebell / dumbbell",
    "Dead Lift Romanian",
    "Static squat",
    "Thigh removal",
    "Back thigh raid",
    "Pelvic levels",
    "Squat Jump",
    "Lunch foot on the step",
    "Side lunch"
]);


strengthMusclesMap.set(BACK, [
    "Tilting the back a narrow row against hand weights",
    "Rise in tension in a narrow grip",
    "Rise in tension with a wide grip",
    "Rowing with one hand Mode 2",
    "Pullover",
    "Superman - Emphasis on lower back"
]);


strengthMusclesMap.set(ABS, [
    "Vertical pelvic lift",
    "Crunches",
    "Bicycle belly",
    "Mountain climber in mode 2",
    "Lateral abdominal flexion against standing weights",
    "Diagonal abdominal flexion",
    "Side plank",
    "Static abdomen - Planck",
    "Bridge",
    "Superman in Mode 6"
]);


