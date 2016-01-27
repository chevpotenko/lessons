/*LESSON 1 ---------------------------------------------------------*/
var operand = prompt('Enter operand', 2);
var degree = prompt('Enter degree of operand', 2);

function pow(operand, degree) {
  var result = 1;
  for (i = 0; degree > i; ++i) { result = result * operand; }
  return result;
}
var example = pow(operand, degree);
console.log(example);
