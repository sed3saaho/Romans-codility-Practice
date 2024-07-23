def generate_permutations(digits, perm, used, result):
    ##digits: List of digits (in this case, [A, B, C, D]).
   ## perm: Current permutation being constructed.
  ## used: List to track which digits have been used in the current permutation.
  ##  result: List to store all valid permutations.


    if len(perm) == len(digits):## if the length of the permutation is equal to the length of the digits, it is a valid permutation.
        result.append(perm[:])# and then we append a copy of the permutation to the result list and return
        return
    #Recusive case: we are iterating through each digit in 'digits'. if 'used[i]' is False, it means 'digits[i]' has not been used in the current permutation.
    # We mark 'used[i]' as true ,append 'digits[i]' to 'perm' , recursively call the generate_permutations function recursively with the updated parameters and then
    # backtrack(perm.pop()) and used[i] = False) to explore other permutations
    for i in range(len(digits)):
        if not used[i]:
            used[i] = True
            perm.append(digits[i])
            generate_permutations(digits, perm, used, result)
            perm.pop()
            used[i] = False

def is_valid_time(hours, minutes):
    return 0 <= hours < 24 and 0 <= minutes < 60
# the function calculates the number of unique valid itemsthat can be formed using digits [A, B, C, D]

def solution(A, B, C, D):
    # Parameters: A, B, C, D are four digits to form permatuations
    digits = [A, B, C, D]
    # Initialize a set to store all unique valid times
    valid_times = set()
    # Initialize  permutations as a list to store all possible permutations
    permutations = []  # List to store all possible permutationsljj
    used = [False] * len(digits)
    # Call the generate_permutations function with initial parameters 
    generate_permutations(digits, [], used, permutations)
    ## iterates through each permutation , calculates hours and minutes from the
      # permutation , checks if it forms a valid time  using is_valid_time and adds it to valid_times if valid
    for perm in permutations:
        hours = perm[0] * 10 + perm[1]
        minutes = perm[2] * 10 + perm[3]
        
        if is_valid_time(hours, minutes):
            valid_times.add((hours, minutes))

    ## and finally it returns the length of valid_times which represents the count of unique valid times
    return len(valid_times)

# Test cases
print(solution(1, 8, 3, 2))  # Output: 6
print(solution(2, 3, 3, 2))  # Output: 3
print(solution(6, 2, 4, 7))  # Output: 0