function solution(R, V) {
    
    let balanceA = 0;
    let balanceB = 0;
    
    let minBalanceA = 0;
    let minBalanceB = 0;
    
    for (let i = 0; i < R.length; i++) {
        if (R[i] === 'A') {
            balanceB -= V[i];
            minBalanceB = Math.min(minBalanceB, balanceB);
        } else if (R[i] === 'B') {
            
            balanceA -= V[i];
    
            minBalanceA = Math.min(minBalanceA, balanceA);
        }
    }
    
   
    return [Math.max(0, -minBalanceA), Math.max(0, -minBalanceB)];
}

// Example usage
const R1 = "BAABA";
const V1 = [2, 4, 1, 1, 2];
console.log(solution(R1, V1));  // Expected output: [2, 4]

const R2 = "ABAB";
const V2 = [10, 5, 10, 15];
console.log(solution(R2, V2));  // Expected output: [0, 15]

const R3 = "B";
const V3 = [100];
console.log(solution(R3, V3));  // Expected output: [100, 0]
