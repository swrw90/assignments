function fixTeen(num) {
    if (num === 16 || num === 15) {
        return num;
    }
    if (num <= 12 || num >= 20) {
        return num;
    }
    if (num >= 13 || num <= 19) {
        return 0;
    }
}
function noTeenSum(a, b, c) {
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);
    return a + b + c
}
console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14));
console.log(noTeenSum(2, 15, 14));





/* Tetyana */

function noTeenSum( a,  b, c) {
 a = fixTeen(a);
 b = fixTeen(b);
 c = fixTeen(c);

 return a + b + c;
}

 function fixTeen(n){

 if (n>=13 && n <= 19 && !(n==15 || n==16))
 {
   return 0;
 }

 else
 {
    return n;
 }

}
console.log("Hello"+noTeenSum(2,15,14));

