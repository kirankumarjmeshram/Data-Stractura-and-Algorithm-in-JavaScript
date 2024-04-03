var canFinish = function(numCourses, prerequisites) {
    // let preMap = Array.fom({length: numCourse}, () => []);
    let preMap = [];
    for (let i = 0; i < numCourses; i++) {
        preMap[i]= [];
    }
    for(let [crs, pre] of prerequisites){
        preMap[crs].push(pre)
    }
    visitSet = new Set();
    function dfs(crs) {
        if(visitSet.has(crs)) return false;
        if (preMap[crs].length === 0) return true;

        visitSet.add(crs)
        for(let pre of preMap[crs]) {
            if(!dfs(pre)) return false;
        }
        visitSet.delete(crs);
        preMap[crs] = [];
        return true;
    }

    for (let crs = 0; crs < numCourses; crs++){
        if(!dfs(crs)) return false
    }

    return true;

};

// using object 
var canFinish2 = function(numCourses, prerequisites) {
    let preMap = {};
    
    // Initialize the object with empty arrays for each course
    for (let i = 0; i < numCourses; i++) {
        preMap[i] = [];
    }

    // Populate the object with prerequisites
    for(let [crs, pre] of prerequisites) {
        if (!preMap[crs]) {
            preMap[crs] = [];
        }
        preMap[crs].push(pre);
    }

    let visitSet = new Set();

    function dfs(crs) {
        if(visitSet.has(crs)) return false;
        if (!preMap[crs].length) return true;

        visitSet.add(crs);
        for(let pre of preMap[crs]) {
            if(!dfs(pre)) return false;
        }
        visitSet.delete(crs);
        preMap[crs] = [];
        return true;
    }

    for (let crs = 0; crs < numCourses; crs++) {
        if(!dfs(crs)) return false;
    }

    return true;
};
