const sumArray = (num: number[]): number => {
    let sum: number = 0;
    for (let i: number = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}

const numbers: number[] = [1, 2, 3, 4, 5];

const resultCheck1: number = sumArray(numbers);
// console.log(resultCheck1);