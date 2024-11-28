const countWordOccurrences = (sentence: string, word: string): number => {
    // console.log(sentence, word);

    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();

    const newWord = lowerSentence.split(' ');
    // console.log(newWord)

    let count: number = 0;
    for (let i: number = 0; i < newWord.length; i++) {
        if (newWord[i] === lowerWord) {
            count++;
        }
    }

    return count;
}

const output: number = countWordOccurrences('I love typescript and typescript is as like javascript', 'typescript');
console.log(output);