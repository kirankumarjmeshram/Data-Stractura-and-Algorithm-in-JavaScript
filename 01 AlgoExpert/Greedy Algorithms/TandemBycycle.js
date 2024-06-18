function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	var red = redShirtSpeeds.sort((a,b)=>a-b);
	var blue = blueShirtSpeeds.sort((a,b)=>a-b);
	var ans =0;
    
  // Write your code here.
	for(var i=0;i<red.length;i++){
		if(fastest){
				 ans = ans + Math.max(red[i],blue[red.length-i-1]);
		}else{
          ans = ans + Math.max(red[i],blue[i]);
        } 
	}
  return ans;
}