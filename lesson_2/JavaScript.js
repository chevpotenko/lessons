/*LESSON 2 ---------------------------------------------------------*/
var arr = new Array(5);
arr[0] = 'Ivan';
arr[1] = 'Oleg';
arr[2] = 'Marat';
arr[3] = 'Egor';
arr[4] = 'Gleb';

function fillMassiv(listNames) {
  for (var i = 0; i < 5; ++i) {
    var newName = prompt('Fill up the array', listNames[i]);
    listNames[i] = newName;
    console.log(listNames[i]);
  };
};

var checkName = function (listNames, findName) {
  for (i = 0; i < listNames.length; ++i) {
    if (findName == listNames[i]) {
      alert(listNames[i] + ', you enter successfully');
      return;
    };
  };
  alert('Error');
};

fillMassiv(arr);
var user = prompt('Enter name', 'Ivan');
checkName(arr, user);