

// #2 davaleba
// გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

// let array = [ 'orange', 'banana', 'pear ']

// console.log(array.length);
// array.push ('apple', 'ananas');
// array.unshift ('sazamtro');
// console.log(array.length);
// array.splice ('2', 0, 'mango');
// array.shift ();
// array.pop();
// console.log(array.length);.


// davaleba #4.  მოცემულია მასივი:
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

// varianiti #1

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let newarray = array.filter (function(item){
//     return typeof item == 'number';
// }
// )

// console.log(newarray);

// varianiti #2 arrow function

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let newarray = array.filter ((item)  => typeof item == 'number');

// console.log(newarray);