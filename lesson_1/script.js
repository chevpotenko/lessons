(function () {

  var operand;
  var degree;  
  var controlSet = [-3, -2, -1, 0, 1, 2, 3];


  function pow(operand, degree) {
    var result = 1;
    var absDegree = Math.abs(degree);
    for (var i = 0; absDegree > i; ++i) { result = result * operand };
    if (degree <= -1) result = 1 / result;
    
    /*Exceptions.*/
    if (operand == 0 && degree <= 0) result = 'overflow';
    if (operand == 0 && degree == 1) result = 0;
    if (((Math.abs(operand) == 1) && degree == 0) || operand == 1) result = 1;   

    return result;
  }


  function printTest(set) {
    for (var i = 0; i < set.length; ++i) {     
      console.log('*******************************************************************');
      for (var j = 0; j < set.length; ++j) {    
        console.log('operand=', set[i], '---degree=', set[j], '-----result=', pow(set[i], set[j]));
      }     
    }
  }

  
  console.log('Prompt');
  operand = prompt('Enter operand', 2);
  degree = prompt('Enter degree of operand', 2);
  console.log('operand=', operand, '---degree=', degree, '-----result=', pow(operand, degree));

  console.log('array of testing')
  printTest(controlSet); 

})();