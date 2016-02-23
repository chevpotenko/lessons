$(function () {
	var users = [
		{
			name: 'Oleg',
			experience: 1
		},
		{
			name: 'Ivan',
			experience: 2
		},
		{
			name: 'Egor',
			experience: 3
		},
		{
			name: 'Gleb',
			experience: 4
		},
		{
			name: 'Marat',
			experience: 5
		},
	];
	var html = $('#test_tmpl').html();
	var content = tmpl(html, { data: users });
	$('.box-tmpl').append(content);
	
	/*------------settings of Plugin----------------------*/
	$('.carousel--1').carousel(
		{
			marginFrame:0,
			slidePerFrame: 3,
			marginSlide: 5
		}
	)
	$('.carousel--2').carousel(
		{
			marginFrame:20,
			slidePerFrame: 2,
			marginSlide: 10
		}
	)
})