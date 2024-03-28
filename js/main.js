// Простые методы массивов.
// Задание Nº1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
const arr = ["dlrow", "olleH"];
const arr2 = arr.map((str) => {
  return str.split("").reverse().join("").toUpperCase();
});
console.log(arr2);
// Задание Nº2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
const arr3 = ["а", "б", "в"];
arr3.push(4, 3, 5, 5);
console.log(arr3);
//  Задание Nº3
//  Дан массив ["Apple", "Orange", "Pinapple",
// "Cherry"]. Удалите сначала первый элемент
// "Apple" и этот же элемент подставтье после
// "Pineapple"
const fruits = ["Apple", "Orange", "Pinapple", "Cherry"];
const fruits1 = fruits.shift();
const index = fruits.indexOf("Pinapple");
fruits.splice(index + 1, 0, fruits1);
console.log(fruits);
// Задание Nº4
// Дан массив 18, -7, -21, 44, 31. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().
const number = [18, -7, -21, 44, 31];
number.sort((a, b) => a - b);
const numbers = number[number.length - 1];
console.log("наиболшее число:", numbers);
