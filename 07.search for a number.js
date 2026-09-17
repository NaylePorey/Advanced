function searchForNumber(arr1, arr2){
    let[takeCount, deleteCount, searchedNum] = arr2;

    let reducedArr = arr1.slice(0, takeCount);

    reducedArr.splice(0, deleteCount);

    let searchedNumOccurrences = reducedArr.filter(num => num === searchedNum).length;
    console.log(`Number ${searchedNum} occurs ${searchedNumOccurrences} times.`);
}

searchForNumber([5, 1, 3, 2, 4, 1, 6] ,[4, 1, 6, 5]);
