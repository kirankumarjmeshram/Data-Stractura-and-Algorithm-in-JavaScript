function mergeOverlappingIntervals(intervals) {
    // Write your code here.
    const sortedInterval = intervals.sort((a,b)=> a[0] - b[0]);
    const mergedIntervals = [];
    let currentInterval = sortedInterval[0];
    mergedIntervals.push(currentInterval);
    for (let nextInterval of sortedInterval) {
      const [_, currentIntervalEnd] = currentInterval;
      const [nextIntervalStart, nextIntervalEnd] = nextInterval;
      if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd,nextIntervalEnd);
      else{
        currentInterval = nextInterval;
        mergedIntervals.push(currentInterval);
      }
    }
    return mergedIntervals;
  }
  