function add(nums) {
  let arr = [];
  let result = 0;
  arr = nums.split(",");
  for (let i = 0; i < arr.length; i++) {
    result = result + Number(arr[i]);
  }
  return Number(result);
}

module.exports = add;
