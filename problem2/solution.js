function inputStringToArr() {
    var inputString = document.getElementById('input').value + '';
    inputString = inputString.split(',');
    console.log(inputString);
    for (let i = 0; i < inputString.length; i++) inputString[i] = parseInt(inputString[i]); //transform input string to an input array

    console.log(inputString);

    return inputString;

}

function solution() {
    var nums = inputStringToArr();
    var prefix_products = [];

    for (let i = 0; i < nums.length; i++) {
        if (prefix_products.length == 0) prefix_products.push(nums[i]);
        else prefix_products.push(prefix_products[prefix_products.length - 1] * nums[i]);
    }
    console.log(prefix_products);

    var suffix_products = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (suffix_products.length == 0) suffix_products.push(nums[i]);
        else suffix_products.push(suffix_products[suffix_products.length - 1] * nums[i]);
    }

    suffix_products.reverse();
    console.log(suffix_products);

    var result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) result.push(suffix_products[i + 1]);
        else if (i == nums.length - 1) result.push(prefix_products[i - 1]);
        else result.push(prefix_products[i - 1] * suffix_products[i + 1]);

    }
    console.log(result);
    // var input = document.getElementById('input');
    // input.ELEMENT_NODE.
    var resultString = '[' + result + ']';
    document.getElementById("p").innerHTML = resultString;

}