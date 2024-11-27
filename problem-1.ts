const sumArray = (num: number[]): number => {
    let sum: number = 0;
    for (let i: number = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum)
    return sum;
}

const resultCheck1 = sumArray([5, 5, 5, 5]);
// console.log(resultCheck1);