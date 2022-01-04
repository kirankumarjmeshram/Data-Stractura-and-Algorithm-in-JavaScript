//Given arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station 
//so that no train waits.


//sorted arr
arr1=[ 900, 940, 950, 1100, 1500, 1800 ];
arr2= [ 910, 1120, 1130, 1200, 1900, 2000 ];

console.log(minPlat(6,arr1,arr2))

function minPlat(n,arr,dept){
            var platform =1;//1
            var result =1;
            var i =1;//arival//2
            var j =0;//1
            while(i<n && j<n){
                if(arr[i]<=dept[j]){
                    platform++;
                    i++;
                }else if(arr[i]>dept[j]){
                    platform--;
                    j++;
                
                }if(platform>result){
                    result=platform;
            }
            
        }
    return result;
    }
//result 3