// EXERCISE A
let a = ["22", "45", "54", "87"];
let b = ["22", "45", "87"]

// write algorithm that can find out if array ‘b’ is in array ‘a’
const checkArray = () => {
    if (a.length < b.length) return false;
    //return b.map(el => a.includes(el)).reduce((sum, el) => sum && el, true);
    return b.every(el => a.includes(el));
}
console.log(checkArray());


// EXERCISE B
// f0 = 1
// f1 = 1
// f2 = f1 + f0
// find out what is x5
const arr = [1, 1];

const nInTheArr = (ind) => {
    for(let i = 2; i <= ind; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[ind];
};

const nInTheArrSlow = (ind) => {
    if (ind < 2) {
        return 1;
    }
    else {
        return nInTheArrSlow(ind-1) + nInTheArrSlow(ind - 2);
    }
}

console.time("First function");
console.log(nInTheArr(5));
console.timeEnd("First function");

console.time("Second function");
console.log(nInTheArrSlow(5));
console.timeEnd("Second function");

// make algorithm that can find ‘f’ for any numbers up to 50;
// describe the computational complexity of the solution
// test the speed of these algorithms



// EXERCISE C
// write HTML that shows message "This is the message" and two buttons
// message spans across the window and underneat that are two buttons.
// 'cancel' button is aligned to left and 'ok' button is aligned to right
// build this exercise without GRID or FLEX, with GRID, with FLEX
// find out browser support for your solutions.