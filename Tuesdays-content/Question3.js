function solution(A, B) {
    const setA = new Set(A); // Start by creating a set to store elements of A
    let minCommon = Infinity; // Then we initialize a minimum value as the maximum possible integer
    
    for (const value of B) { // Check if elements of B exist in A
     if (setA.has(value) && value < minCommon) {
         minCommon = value
     }
    }
    return minCommon === Infinity ? -1 : minCommon; // If a common element is found, we'll return it otherwise return -1
 }
 
 const A1 = [1,3,2,1];
 const B1 = [4,2,5,3,2];
 console.log(solution(A1, B1)) // the output should be 2
 
 const A2 = [2,1];
 const B2 = [3,3];
 console.log(solution(A2, B2)) // the output should be -1