const twoSum = (nums, target) => {
  const complements = {};

  for (let i = 0; i < nums.length; i++) {
    if (complements[target - nums[i]] !== undefined) {
      return [complements[target - nums[i]], i];
    } else {
      complements[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));