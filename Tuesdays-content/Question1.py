def solution(R, V, N):
    current_balance_A = 0
    current_balance_B = 0
    min_balance_A = 0
    min_balance_B = 0

    for i in range(N):
        if R[i] == 'A':
            current_balance_A += V[i]
            current_balance_B -= V[i]
        else:  # R[i] == 'B'
            current_balance_B += V[i]
            current_balance_A -= V[i]

        if current_balance_A < min_balance_A:
            min_balance_A = current_balance_A
        if current_balance_B < min_balance_B:
            min_balance_B = current_balance_B

    initial_balance_A = max(0, -min_balance_A)
    initial_balance_B = max(0, -min_balance_B)

    return [initial_balance_A, initial_balance_B]


R = "ABAB"
V = [10, 5, 10, 15]
N = len(R)
print(solution(R, V, N))  # Output should be [0, 15]