function sortArrBy2Criteria(arr){
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    console.log(arr.join('\n'));
}

sortArrBy2Criteria(['test', 'beta', 'gamma']);