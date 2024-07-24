// There are N guests (numbered from 0 to N-1) in a sanatorium waiting to be assigned a room. In each room, any number of guests can be accommodated. However, not all guests like to have a lot of roommates.

// You are given an array A of N integers: the K-th guest wants to be in a room that contains at most A[K] guests, including themselves.

// Write a function:

// int solution(int A[], int N);

// that, given the array A, returns the minimum number of rooms needed to accommodate all guests.

// Examples:

// 1. Given A = [1, 1, 1, 1, 1], your function should return 5. Each guest should be accommodated in their own separate room.

// 2. Given A = [2, 1, 4], your function should return 2. The second guest should be accommodated in one room and the other two guests in another room.

// 3. Given A = [2, 7, 2, 9, 8], your function should return 2. The first and the third guests should be accommodated in one room and the other three guests in another room.

// 4. Given A = [7, 3, 1, 1, 4, 5, 4, 9], your function should return 4. The guests can be accommodated as follows: the first two guests in one room, the third and the fourth guests in two single rooms, and the other guests in another room.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..100,000].

function solution(A) { // Start by declaring a function called solution taking A as the parameter
    // Then we sort the array A in ascending order
    A.sort((a, b) => a - b);

    let rooms = 0; // Initialize the number of rooms needed to be equal to zero
    let i = 0;

    while (i < A.length) {
        let room_capacity = A[i]; // Start a new room with the smallest preference
        let count = 0; // Initialize count of guests in the current room

        // Fill the room until it's full or no more guests can be accommodated
        while (i < A.length && count < room_capacity) {
            count++; // Add a guest to the current room
            i++; // Move to the next guest
        }

        rooms++; // Increment the number of rooms needed
    }

    return rooms; // Return the minimum number of rooms needed
}


console.log(solution([1, 1, 1, 1, 1])); // Expected return is 5
console.log(solution([2, 1, 4])); // Expected return is 2
console.log(solution([2, 7, 2, 9, 8])); // Expected return is 2
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9])); // Expected return is 4