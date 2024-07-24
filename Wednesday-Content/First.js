function solution(N){
    const letters= 'abcdefghijklmnopqrstuvwxyz' // Start by creating a string that contains all lowercase letters from a-z
    let k = 26; // create a constant "k" and we give it a value of 26 which is the total number of letters from a-z
    while (N % k !==0){ // check if N is evenly divisible by k
        k--; // if N isn't evenly divisible by k, then we'll decrease the values of k by one as we continue checking
    }
    const times = N / k; // Then we'll calculate how many times each letter should appear
    let result = ''; // We'll initialize an empty string to store our results
    for (let i = 0 ; i < k; i++) { // Loop through the first k letters (starting from index 0)
        result += letters[i].repeat(times); // add each letter repeated the required number of times to the final result string
    }
    return result; // Finally we'll return the result of our string
}

console.log(solution(3));
console.log(solution(5));
console.log(solution(30));