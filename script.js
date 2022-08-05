

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


// davaleba #4.  
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



// davaleba #5. ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;


// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let languagesnewarray = languages.filter (y => y.length >3);

// console.log(languagesnewarray);


// davaleba #6. Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

// let array= ['academy', 'of', 'digital', 'industries'].reduce ( (accumulator, currentvalue) => 
//     accumulator.concat ( ' ' + currentvalue)
// )

// console.log(array);



// #7. davaleba შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: 
// თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
// თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

// let item = [12, 'google', 32, null, 'yahoo', 25];

// let result = item.map (item =>{
//     if (typeof item == 'number'){
//         return item * item;
//     }else if ( typeof item == 'string'){
//         return item.toUpperCase ();
//     } return item;
    
// })


//  console.log(result);