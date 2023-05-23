// task 1
/* Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050) */


 function getSum(num1: number): number {
    let sum1 = 0;
    for (let i = 0; i <= num1; i++) {
        sum1 += i;
    }
    return sum1
}

console.log(getSum(100));
 
// task 2
/* Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
+ процентная ставка в год — 17%,
+ количество лет — 5.
> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается. */

 function showOverpayment(num1: number): string {
    let procentInYear = 17;
    let howYear = 5;
    let sumOverpayment = ((num1 * procentInYear) / 100) * howYear;
    return `Ваша переплата составит: ${sumOverpayment}`
}
console.log(showOverpayment(10000);

// task 3
/* Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
+ строку
+ значение от
+ значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по */


 function cropString(str: string, start: number, finish: number): string  {
return str.slice(start, finish)
}

console.log(cropString('обрезатьстроку', 3, 7)); 

// task 4
/* Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
> Для 2021 это будет 5. */

function getSumNumbers(num: number): number{

    let num1 = String(num);
    let num3 = num1.split('').map(Number);
    let sum = 0;
        for(let i = 0; i < num3.length; i++){
         sum +=num3[i];
    }
return  sum
}

console.log(getSumNumbers(2020)); 

// task 5
/* Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
```
    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
``` */

function getSum_1(a: number, b: number) {
    let sum = 0;
    if (a <= b) {
        for (let i = a; i <= b; i++) {
          sum += i;
        }
      } else {
        for (let i = b; i <= a; i++) {
          sum += i;
        }
      }
    if (Number.isInteger(a) && Number.isInteger(b) && a == b) {
        return `${a} Since both are same`
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return sum
    }
    else {
        return 'error'
    }
}

console.log(getSum_1(1, 2));


// task 6
/* Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
+ булевое значение
+ функцию **foo** которая выводит в консоль свое имя
+ функцию **boo** которая выводит в консоль свое имя
> Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo** */

// task 7
/* Напишите самовызыввающиеся функцию подсчет факторила числа: число должно передаваться как параметр функции*/

(function calcFactorial(n: number) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
      console.log(result)
    }
}(5));

// ADVANCED level
// task 1
/* Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае. */

function isTriangle(a: number, b: number, c: number): boolean {
    if (a <= 0 || b <= 0 || c <= 0){
        return false
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false
    }
    if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
        return true
    }
    else {
        return false
    }

}

console.log(isTriangle(3, 3, 3))

// task 2
/* Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.

+ После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.

+ Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.

+ Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».

+ Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой. */

let bankBalance: number  = 10000;
let priceAccessory: number = 1000.56;
let pricePhone: number = 7000.67;

let fullPayment: number = priceAccessory + pricePhone;

function taxRide(nalog: number = 10, yearCredit: number = 5) {
    return (fullPayment * (nalog / 100) * yearCredit);
}

let tax = taxRide();
let pricePurchase: number = fullPayment + tax;

console.log(`Сумму покупки одного телефона и аксесуара $${fullPayment}`)
console.log(`Сумма налога: $${tax.toFixed(2)}`);
console.log(`Сумма покупки одного телефона и аксесуара включая проценты: $${pricePurchase.toFixed(2)}`);

let total: number = 0;
let phoneCount: number = 0;
do {
    total += pricePurchase;
    phoneCount++;
} while (total + pricePurchase <= bankBalance);

if (total <= bankBalance){
    console.log(`Вы можете себе это позваолить! Количество телефонов + аксессуар: ${phoneCount}. На общую сумму $${total}`);

}
else{
    console.log(`Вы не можете себе это позваолить! Итоговая сумма $${pricePurchase.toFixed(2)} превышает остаток на банковском счете на $${(pricePurchase - bankBalance).toFixed(2)}`)
}
