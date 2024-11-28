const removeDuplicates = (num: number[]): number[] => {

    for (let i: number = 0; i < num.length; i++) {
        for (let j: number = i + 1; j < num.length; j++) {
            if (num[i] === num[j]) {
                num.splice(j, 1);
                j--;
                // console.log("inside: ", num)
            }
        }
    }
    // console.log("NUm:", num)
    return num;

}

const arr: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 5, 5, 2];

const newArr: number[] = removeDuplicates(arr);
console.log(newArr);