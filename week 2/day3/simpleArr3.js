/*Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/

    const temperatures = [32, 35, 28, 40, 38, 30, 42];

    //filter() temperatures above 35
    const r1= temperatures.filter(temp=>temp>35);
    console.log(r1);

    //map() to convert all temperatures from Celsius → Fahrenheit
   const r2 = temperatures.map(temp => (temp * 9/5) + 32);
    console.log(r2);

    //reduce() to calculate average temperature
    const r3 =temperatures.reduce((acc,temp)=>acc+temp)
    const avg =r3/temperatures.length;
    console.log(avg);

    //find() first temperature above 40
    const r4 =temperatures.find(temp=>temp>40);
    console.log(r4);

    //findIndex() of temperature 28*/
    const r5 =temperatures.findIndex(temp=>temp==28);
    console.log(r5);