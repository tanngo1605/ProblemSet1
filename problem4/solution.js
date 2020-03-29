function getMax(nums) {
    var max = nums[0];
    for (let i = 0; i < nums.length; i++)
        if (max < nums[i]) max = nums[i];
    return max;
}


function findElement(nums) {
    var max = getMax(nums);
    if (max < 0) return 1;

    for (let i = 1; i <= max; i++)
        if (!nums.includes(i)) return i;

    return max + 1;
}

var nums1 = [3, 4, -1, 1];
var nums2 = [1, 2, 0];
var nums3 = [-2, 3, 4, 5];
var nums4 = [-1, -2, -3];

/*console.log(findElement(nums1));
console.log(findElement(nums2));
console.log(findElement(nums3));
console.log(findElement(nums4));*/


function findMissingEle2(nums) {
    var max = getMax(nums);
    if (max <= 0) return 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0 && nums[i] < nums.length && nums[i] != i && i + 1 != nums[i]) {
            //put the element's value match its index's value
            var temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp;

        }
    }


    console.log(nums);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= nums.length) continue;
        if (nums[i] != i) return i;
    }

    return 1; //in case when all the elements are larger then array.length
}

console.log(findMissingEle2([4, 2, 1, 0, -1]));
console.log(findMissingEle2(nums1));
console.log(findMissingEle2([100,98,96]));
