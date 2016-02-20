function createTest(quiz){
	var templateHtml = $('#template').html();
	var content = tmpl(templateHtml, { data: quiz });
	$('.surveyList').append(content);
}

createTest(quiz);
var test = new App('box');




