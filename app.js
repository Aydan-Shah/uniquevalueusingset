function unique(str) {
    let uniqueValue = new Set();

    for(let letter of str) {
        if(uniqueValue.has(letter)) {
            return false;
        }
        uniqueValue.add(letter)
    }
    return true;

}

console.log(unique("abcd"));
console.log(unique("abcdda"))