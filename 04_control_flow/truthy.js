const userEmail = "h@akr.ai"

if(userEmail) {
    console.log("Found user email");
} else {
    console.log("Not found");
}

/**
 * Falsy Values
 * 
 * false, 0, -0, BigInt 0n, "", null, undefined, NaN
 * 
 * Others are truthy values like "adf", [], 1, "0", 'false', " ", {}, function() {} etc
 */

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? null ?? 41

val1 = null ?? undefined
console.log(val1);
