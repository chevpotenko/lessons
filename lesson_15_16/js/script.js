$(function () {
  $('#googleQuery').googleQuery({
    boxForm: 'formQuery',
    boxMenu: 'menu',
    boxResult: 'result',
    boxTemplate: 'text_tmpl',
    classInput: 'activeInput',
    classReplace: 'formQuery--replace',
    classHide: 'hide',
    idAmountResults: 'amountResults',
    idTextQuery: 'textQuery',
  });

  /*-----------------------------------------------------------------------------------*/

  var human_data = {
    name: 'Ivan',
    age: '20',
    gender: 'female',
    height: '170',
    weight: '60'
  };

  var worker1_data = {
    job: 'manager',
    salary: '$2000$'
  };

  var student1_data = {
    placeOfStudy: 'Oxford',
    scholarship: '$1000'
  };

  var student2_data = {
    placeOfStudy: 'Cambridge',
    scholarship: '$500'
  };

  function Human(options) {
    this.name = options.name;
    this.age = options.age;
    this.gender = options.gender;
    this.height = options.height;
    this.weight = options.weight;
  };
  var human = new Human(human_data);
  console.log(human);


  function Worker(options) {
    this.job = options.job;
    this.salary = options.salary;
    this.work = function () { alert('working!') };
  };
  Worker.prototype = human;
  var worker1 = new Worker(worker1_data);
  console.log(worker1);


  function Student(options) {
    this.placeOfStudy = options.placeOfStudy;
    this.scholarship = options.scholarship;
    this.watchigSoapOperas = function () { alert('watching!') }
  }
  Student.prototype = human;
  var student1 = new Student(student1_data);
  console.log(student1);
  var student2 = new Student(student2_data);
  console.log(student2);

})