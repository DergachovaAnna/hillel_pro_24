// 'number' + 3 + 3
// step 1: 'number' + 3 => 'number3' (concatenation)
// step 2: 'number3' + 3 => 'number33' (concatenation)
console.log('number' + 3 + 3); // 'number33' - result is string

// null + 3
// step 1: null is converted to 0, so 0 + 3 => 3
console.log(null + 3); // 3

// 5 && "qwerty" - logical AND
// step 1: 5 is true, so check "qwerty" (and its also true) =>  both sides are true so result is the right-hand side"qwerty"
console.log(5 && "qwerty"); // "qwerty"

// +'40' + +'2' + "hillel"
// step 1: +'40' => 40  --- unary '+' converts str to number
// step 2: +'2' => 2 same as in previous step1
// step 3: 40 + 2 => 42 --- result is a number
// step 4: 42 + "hillel" => "42hillel" --- concatenation ito a str
console.log(+'40' + +'2' + "hillel"); // "42hillel"

// '10' - 5 === 6;
// Step 1: '10' - 5 => 10 - 5 = 5 --- first operand's type str is converted to number due to '-'  is a numeric operator
// Step 2: 5 === 6 => false --- false because 5 is not equal to 6
console.log('10' - 5 === 6); // false

// true + false
// step 1: true -> 1, false -> 0 --- true is converted to 1 and false is converted to 0
// step 2: 1 + 0 => 1
console.log(true + false); // 1

// '4px' - 3
// step 1: '4px' cannot be converted to a number, so result is NaN
console.log('4px' - 3); // NaN

// '4' - 3
// step 1: '4' is converted to 4 due to '-'  is a numeric operator
// step 2: 4 - 3 => 1
console.log('4' - 3); // 1

// '6' + 3 ** 0
// step 1: 3 ** 0 => 1 --- power operation, any number raised to the power of 0 is 1
// step 2: '6' + 1 => '61' --- concatenation
console.log('6' + 3 ** 0); // '61'

// 12 / '6'
// step 1: str '6' is converted to 6 (number)
// step 2: 12 / 6 => 2
console.log(12 / '6'); // 2

// '10' + (5 === 6);
// step 1: 5 === 6 => false
// step 2: '10' + false => '10false' --- boolean false is converted to the string 'false', and the string '10' is concatenated with 'false'
console.log('10' + (5 === 6)); // '10false'

// null == ''
// step 1: null and empty str '' are not loosely equal,null is only equal to undefined
console.log(null == ''); // false

// 3 ** (9 / 3); -- regular match with numbers
// step 1: 9 / 3 => 3
// step 2: 3 ** 3 => 27
console.log(3 ** (9 / 3)); // 27

// !!'false' == !!'true' --- confusion here is that we are comparing str, not bool. string is always truthy if not empty
// step 1: !!'false' => true -- double negation converts the string 'false' to a truthy value, so the result is tru
// step 2: !!'true' => true (truthy string)  --- first negation (!) converts 'true' into false because it's a truthy value,
//                                               second negation (!) converts false back into true
// step 3: true == true => true
console.log(!!'false' == !!'true'); // true

// 0 || '0' && 1
// step 1: '0' && 1 => 1 (truthy '0') -- && (AND) has higher precedence than ||(OR). So, first evaluate '0' && 1
// step 2: 0 || 1 => 1 --- number 0 is falsy, so the result is 1
console.log(0 || '0' && 1); // 1

// (+null == false) < 1;
// step 1: +null => 0 -- +  converts null to 0
// step 2: 0 == false => true ---- true because 0 and false are loosely equal
// step 3: true < 1 => false --- boolean true is same as 1
console.log((+null == false) < 1); // false

// false && true || true
// step 1: false && true => false -- (AND) evaluates to false because both sides must be truthy
// step 2: false || true => true --- (OR) evaluates to true because one side is truthy
console.log(false && true || true); // true

// false && (false || true);
// step 1: false || true => true --- evaluates to true because one side is truthy
// step 2: false && true => false -- evaluates to false because && (AND) needs both sides to be truthy
console.log(false && (false || true)); // false

// (+null == false) < 1 ** 5;
// step 1: +null => 0 --- + converts null to 0
// step 2: 0 == false => true ---- true because 0 and false are loosely equal
// step 3: true is coerced to 1, so the expression becomes 1 < 1 ** 5
// step 4: 1 ** 5 → This evaluates to 1, so 1 < 1 is false
console.log((+null == false) < 1 ** 5); // false