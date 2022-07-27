This is fundamentally the same problem and solution structure that is used to calculate the sum of long sequences of Fibonacci numbers.
Recursive alone works with small n values but quickly becomes unwieldy as the algorithm redundantly calculates the output for n input values.  Memoization solves this problem by calculating the output for f(n) once and storing it in a dictionary.
