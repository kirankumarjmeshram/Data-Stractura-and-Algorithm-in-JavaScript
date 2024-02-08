function smallerNeighbourElement(arr){
    const result = [];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        // Pop elements from the stack while they are greater than or equal to the current element
        while (stack.length > 0 && stack[stack.length - 1].value >= arr[i]) {
            stack.pop();
        }

        // If the stack is not empty, the nearest smaller element is the top element of the stack
        if (stack.length > 0) {
            result.push(stack[stack.length - 1].value);
        } else {
            result.push(-1); // If no smaller element found, push -1
        }

        // Push the current element onto the stack
        stack.push({ value: arr[i], index: i });
    }

    return result;
}

console.log(smallerNeighbourElement([4, 5, 2, 10, 8]))