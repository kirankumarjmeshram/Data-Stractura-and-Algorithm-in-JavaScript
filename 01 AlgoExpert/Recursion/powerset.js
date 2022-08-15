function powerset(array) {
    // Write your code here
    const subsets =[[]];
      for(const el of array){
        const length = subsets.length
        for(let i=0;i<length;i++){
          const subsetsElement = subsets[i];
            subsets.push(subsetsElement.concat(el));
        }
      }
    return subsets;
  }

  console.log(powerset([1,2,3]))