(function () {

  var arr = ['Ivan', 'Oleg', 'Marat', 'Egor', 'Gleb'];  
  var listNames = [];

  function fillArray(newList, defaultList) {
    for (var i = 0; i < defaultList.length; ++i) {    
      newList.push(prompt('Fill up the array', defaultList[i]));
      console.log(newList[i]);
    };    
  };

  var checkName = function (list, userName) {  
    if (list.indexOf(userName) != '-1') { alert(list[list.indexOf(userName)] + ', you enter successfully') } else { alert('Error') };
  };

  fillArray(listNames, arr);
  var user = prompt('Enter name', 'Ivan');
  checkName(listNames, user);

})();