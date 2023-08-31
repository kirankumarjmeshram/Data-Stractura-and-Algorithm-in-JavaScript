var majorityElement = function(nums) {
    let map ={};
    for(let i=0;i<nums.length;i++){
        if(!(map[nums[i]])){
            map[nums[i]]=1;
        }else{
            map[nums[i]]++;
        }
    }
    let max=0;
    let majorEl=0;
    for(let el in map){
        //console.log(map[el])
        if(map[el]>max){
            max = map[el];
            majorEl = el;
            //console.log({majorEl})
        }
    }
    //return console.log(majorEl)
    return majorEl
};