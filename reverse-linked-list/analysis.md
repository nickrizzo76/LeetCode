## Complexity
#### Time Complexity:  Big O(n)<br>
#### Space Complexity: Big O(1)

<pre>var reverseList = function(head) {
    // return input if empty
    if(!head) return head;          <em>c<sub>0</sub> cost :: 1 time</em>

    // set 1st and 2nd pointer
    let previous = head;            <em>c<sub>1</sub> cost :: 1 time</em>
    let current = previous.next;    <em>c<sub>2</sub> cost :: 1 time</em>
    
    // remove circular reference. This is going to be the last node in the reversed linkedlist, so its 'next' should be null.
    previous.next = null;           <em>c<sub>3</sub> cost :: 1 time</em>
    while(current) {                <em>c<sub>4</sub> cost :: n - 1 times :: we're starting at the 2nd node in the linked list</em>
        // save reference to the next node
        const next = current.next;  <em>c<sub>5</sub> cost :: n - 1 times</em>
        // reverse the link
        current.next = previous;    <em>c<sub>6</sub> cost :: n - 1 times</em> 
        // iterate previous
        previous = current;         <em>c<sub>7</sub> cost :: n - 1 times</em> 
        // iterate current
        current = next;             <em>c<sub>8</sub> cost :: n - 1 times</em>
    }
    return previous;                <em>c<sub>9</sub> cost :: 1 time</em>
};</pre>
>
>  <em>T(n) = c<sub>0</sub> + 
           c<sub>1</sub> + 
           c<sub>2</sub> +
           c<sub>3</sub> +
           c<sub>4</sub>(n-1) +
           c<sub>5</sub>(n-1) +
           c<sub>6</sub>(n-1) +
           c<sub>7</sub>(n-1) +
           c<sub>8</sub>(n-1) +
           c<sub>9</sub></em>
>          
> <em>T(n) = c<sub>0</sub> + 
           c<sub>1</sub> + 
           c<sub>2</sub> +
           c<sub>3</sub> +
           (c<sub>4</sub> + c<sub>5</sub> + c<sub>5</sub> + c<sub>6</sub> + c<sub>7</sub> + c<sub>8</sub>)(n-1) + 
           c<sub>9</sub></em>
           
>  <em>a = c<sub>0</sub> + 
        c<sub>1</sub> + 
        c<sub>2</sub> +
        c<sub>3</sub> +
        c<sub>9</sub></em>
>        
> <em>b = (c<sub>4</sub> + c<sub>5</sub> + c<sub>5</sub> + c<sub>6</sub> + c<sub>7</sub> + c<sub>8</sub>)</em>
>
> T(n) = a + b(n-1)


Thus the running time is a linear function of n.<br><br>
Interestingly, the worst, average, and best case run times are all O(n) because the values of the nodes make no difference.  The algorithm reverses the linked list by way of reversing the order of the <em>values</em> of the nodes. It pays no attention to the values themselves; the values are just a way to prove the validity of the algorithm.
> 1 -> 2 -> 3 becomes 3 -> 2 -> 1

The <em>Space Complexity</em> is constant: Big O(1). The extra space needed by the algorithm does not scale with the input size.  Regardless of the size of the linked list, we only ever need 3 pointers to keep track of the <em>previous</em>, <em>current</em>, and <em>next</em> nodes.
