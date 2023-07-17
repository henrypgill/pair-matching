

export function shuffleArray(arr: string[]): string[] {
    const returnArr: string[] = arr.map(() => "")
    // console.log(returnArr)
    
    let arrayIndexes: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        arrayIndexes.push(i)
    }
    // console.log(arrayIndexes);

    for (const element of arr) {
        const index = arrayIndexes[Math.floor(Math.random() * arrayIndexes.length)];
        returnArr[index] = element
        arrayIndexes = arrayIndexes.filter((e) => e === index ? false : true);
    }
    // console.log(arrayIndexes);
    // console.log(returnArr)


    return returnArr
}