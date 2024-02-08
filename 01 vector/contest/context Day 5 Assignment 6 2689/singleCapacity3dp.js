function singnalCapacity(n, A) {
    let ans =[1];
    for (let i = 1; i < n; i++) {
        let counter = 1;
        while ((i - counter) >= 0 && A[i] >= A[i - counter]) {
            counter += ans[i - counter];
        }
        ans[i] = counter;
    }
    console.log(ans)
}

singnalCapacity(6, [10, 4, 5, 90, 120, 80]) //[ 1, 1, 2, 4, 5, 1 ]