var twoSum = function(nums, target) {
    for(var i = 0; i<nums.length; i++){
        for(var j = 1; j<nums.length; j++){
         if(nums[i]+nums[j] === target){
            return [i,j]
      }
    }
  }
};

//Your input
//[2,7,11,15]
//9
//Output
//[0,1]
//Expected
//[0,1]
