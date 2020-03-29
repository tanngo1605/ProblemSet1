function twoSum() {
    var inputArr = document.getElementById("inputArr").value;
    inputArr = inputArr.split(',');
    for (let i = 0 ; i<inputArr.length; i++){
        inputArr[i] = parseInt(inputArr[i]);
    }
    var nums = inputArr;

    var target = document.getElementById("target").value;
    target = parseInt(target);

    var compliment = [];
    for (let i = 0; i < nums.length; i++) {
        if (compliment.includes(target - nums[i])){
            document.getElementById("p").innerHTML = 'true';
            return true;}
        compliment.push(nums[i]);
    }
    document.getElementById("p").innerHTML = 'false';
    return false;
}


/*function twoSum(nums, target) {


    var compliment = [];
    for (let i = 0; i < nums.length; i++) {
        if (compliment.includes(target - nums[i])) return true;
        compliment.push(nums[i]);
    }
    return false;
}*/