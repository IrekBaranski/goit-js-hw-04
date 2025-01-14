console.log('\n', '<task-2>');

// calcAverageCalories(days) function:
//- returns the average daily value of calories consumed for the period  
// f(parameters): (days) - array of objects. 
// Each object contains: day of the week and the number of calories from that day.
function calcAverageCalories(days) {
    let averageCalories = 0;
    let caloriesSum = 0;
    const lengthDays = days.length;
    if (lengthDays == 0) return 0;

    for (let day in days) {
        caloriesSum = caloriesSum + days[day].calories;
    }
    return averageCalories = caloriesSum / lengthDays;
    
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
);// 2270
console.log(
  calcAverageCalories([])
); // 0

