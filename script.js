// Logical AND (&&)

// A student can enter the exam only if age is 18 or above AND fee is paid

let age = 19;
let feePaid = true;

// Both conditions must be true
if (age >= 18 && feePaid === true) {
    console.log("Exam Entry: Allowed");
} else {
    console.log("Exam Entry: Not Allowed");
}

// Explanation:
// age >= 18 → true
// feePaid === true → true
// true && true → true (Allowed)


// Logical OR (||)

// A user can login if email OR phone number is correct

let emailCorrect = false;
let phoneCorrect = true;

// At least one condition must be true
if (emailCorrect === true || phoneCorrect === true) {
    console.log("Login Status: Allowed");
} else {
    console.log("Login Status: Denied");
}

// Explanation:
// emailCorrect → false
// phoneCorrect → true
// false || true → true (Allowed)


// Logical NOT (!)

// If user is NOT blocked, access is allowed

let isBlocked = false;

// NOT operator reverses the value
if (!isBlocked) {
    console.log("Website Access: Allowed");
} else {
    console.log("Website Access: Denied");
}

// Explanation:
// isBlocked → false
// !false → true (Access Allowed)


// Combine Logical Operators

// User gets special discount if:
// User is logged in
// AND (user is premium OR has a coupon)

let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

if (isLoggedIn === true && (isPremium === true || hasCoupon === true)) {
    console.log("Discount Status: Eligible for Special Discount");
} else {
    console.log("Discount Status: Not Eligible");
}

// Explanation:
// isLoggedIn → true
// isPremium → false
// hasCoupon → true
// (false || true) → true
// true && true → true (Discount Given)


// Practice Task

// Try changing values below and observe results

// Example:
// isLoggedIn = false
// Result will be false even if user is premium or has coupon
// Because login is mandatory
