export const runningDistanceDropBox = [
    <option value='' key='CHOOSE'>Choose distance</option>,
    <option value='3' key='3'>3</option>,
    <option value='4' key='4'>4</option>,
    <option value='5' key='5'>5</option>,
    <option value='6' key='6'>6</option>,
    <option value='8' key='8'>8</option>,
    <option value='10' key='10'>10</option>,
    <option value='12' key='12'>12</option>
];

export const runningEasyLevelMap = new Map();

runningEasyLevelMap.set('3','Warm up - 500\n Main part (must be performed 4 times)\n 400 100 \nRelease - 500');
runningEasyLevelMap.set('4','Warm up - 500\n Main part (must be performed 5 times):\n 400 200 \nRelease - 500');
runningEasyLevelMap.set('5','Warm up - 500\n Main part (must be performed 4 times):\n 500 500 \nRelease - 500');
runningEasyLevelMap.set('6','Warm up - 500\n Main part (must be performed 5 times):\n 500 500 \nRelease - 500');
runningEasyLevelMap.set('8','Warm up - 500\n Main part (must be performed 7 times):\n 500 500 \nRelease - 500');
runningEasyLevelMap.set( '10','Warm up - 500\n Main part (must be performed 6 times):\n 1000 500 \nRelease - 500');
runningEasyLevelMap.set( '12','Warm up - 500\n Main part (must be performed 5 times):\n 1000 1000 \nRelease - 500');


export const runningMediumLevelMap = new Map();

runningMediumLevelMap.set('3','Warm up - 1000\n Main part (Between each half-minute rest):\n 200X2 - light pace\n 250X2 - medium pace\n 300X2 - Quick rhythm - 500 \nRelease - 500 light pace');
runningMediumLevelMap.set('4','Warm up - 500\n Main part (Between each half-minute rest):\n 200X4 - light pace\n 250X4 - medium pace\n 300X4 - Quick rhythm\nRelease - 500 light pace');
runningMediumLevelMap.set('5','Warm up - 250\n Main part (Between each half-minute rest - REPEAT TWICE):\n 200X3 - light pace\n 250X3 - medium pace\n 300X3 - Quick rhythm \nRelease - 250');
runningMediumLevelMap.set('6','Warm up - 1000\n Main part (Between each half-minute rest - REPEAT TWICE):\n 200X3 - light pace \n250X3 - medium pace \n300X3 - Quick rhythm \n Release - 500');
runningMediumLevelMap.set('8','Warm up - 1000\n Main part (Between each half-minute rest - REPEAT TWICE):\n 200X4 - light pace\n 250X4 - medium pace\n 300X4 - Quick rhythm \nRelease - 1000');
runningMediumLevelMap.set('10','Warm up - 500\n Main part (Between each half-minute rest - REPEAT THREE TIMES):\n 200X4 - light pace\n 250X4 - medium pace\n 300X4 - Quick rhythm \nRelease - 500');
runningMediumLevelMap.set('12','Warm up - 1000\n Main part (Between each half-minute rest - REPEAT THREE TIMES):\n 200X4 - light pace\n 250X4 - medium pace\n 300X4 - Quick rhythm \nRelease - 800');

export const runningHardLevelMap = new Map();

runningHardLevelMap.set('3','Warm up - 500\n Main part (Between each half-minute rest):\n 250X2 - medium pace\n 250X2 - Quick rhythm\n 250X2 - light pace\n 250X2 - Quick rhythm \nRelease - 500 light pace');
runningHardLevelMap.set('4','Warm up - 500\n Main part (Between each half-minute rest):\n 500X2 - medium pace\n 250X2 - Quick rhythm\n 500X2 - light pace\n 250X2 - Quick rhythm \nRelease - 500 light pace');
runningHardLevelMap.set('5','Warm up - 500\n Main part (Between each half-minute rest):\n 750X2 - medium pace\n 250X2 - Quick rhythm\n 750X2 - light pace\n 250X2 - Quick rhythm \nRelease - 500 light pace');
runningHardLevelMap.set('6','Warm up - 500\n Main part (Between each half-minute rest):\n 750X2 - medium pace\n 500X2 - Quick rhythm\n 750X2 - light pace\n 500X2 - Quick rhythm \nRelease - 500 light pace');
runningHardLevelMap.set('8','Warm up - 1000\n Main part (Between each half-minute rest):\n 750x3 - medium pace\n 300X3 - Quick rhythm\n 750x3 - light pace\n 300X3 - Quick rhythm \nRelease - 700 light pace');
runningHardLevelMap.set('10','Warm up - 500\n Main part (Between each half-minute rest):\n 1000x2 - medium pace\n 500X2 - Quick rhythm\n 1000x2 - medium pace\n 500X2 - light pace\n 1000x2 - medium pace\n 500X2 - Quick rhythm \nRelease - 500 light pace');
runningHardLevelMap.set('12','Warm up - 600\n Main part (Between each half-minute rest):\n 700x3 - medium pace\n 500X3 - Quick rhythm\n 700x3 - medium pace\n 500X3 - light pace\n 700x3 - medium pace\n 500X3 - Quick rhythm \nRelease - 600 light pace');
