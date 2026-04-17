
var largestRectangleArea = function(heights) {
    let n = heights.length;
    let maxArea = 0;
    let stack = [];//[index, height]
    for(let i=0;i<n;i++) {
        let h = heights[i];
        let start = i;
        while (stack.length && stack[stack.length-1][1] > h) {
            let [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height*(i-index));
            start = index;
        }
        stack.push([start, h])
    }
    for(let [i,h] of stack) {
        maxArea = Math.max(maxArea, h*(n-i))
    }
    return maxArea;
};

function largestRectangleArea2(heights) {
    let n = heights.length;
    let maxArea = 0;

    for(let i=0;i<n;i++) {
        let h = heights[i];
        let left = i, right = i;
        while(left>=0 && heights[left]>=h) {
            left--;
        }
        while(right<n && heights[right]>=h) {
            right++;
        }
        maxArea = Math.max(maxArea, h*(right-left-1));
    }
    return maxArea;
}

function largestRectangleArea3(heights) {
    let n = heights.length;
    let maxArea = 0;
    let leftArr = new Array(n).fill(0);
    let rightArr = new Array(n).fill(0);
    let stack = [];
    //Nearest smaller to left
    for(let i=0;i<n;i++) {
        while(stack.length && heights[stack[stack.length-1]] >= heights[i]) {
            stack.pop()
        }
        leftArr[i] = stack.length === 0?0: stack[stack.length-1]+1;
        stack.push(i)
    }   
    stack = [];
    //Nearest smaller to Right
    for(let i=n-1;i>=0;i--) {
        while(stack.length && heights[stack[stack.length-1]] >= heights[i]) {
            stack.pop()
        }
        rightArr[i] = stack.length === 0?n-1:stack[stack.length-1] - 1
        stack.push(i)
    }
    for(let i=0;i<n;i++) {
        maxArea = Math.max(maxArea, heights[i]*(rightArr[i]-leftArr[i]+1))
    }
    return maxArea;
}

console.log(largestRectangleArea3([2,1,5,6,2,3]))

console.log(largestRectangleArea([2,1,5,6,2,3]));//10
console.log(largestRectangleArea2([2,1,5,6,2,3]));//10

