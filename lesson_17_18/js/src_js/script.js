$(function () {
	$('.pages').tabControl('.tab', '.page', 'active');
	$('.tooltip').on('mouseover', function (e) { $(this).toggleClass('titleForm'); });
	$('.tooltip').on('mouseout', function (e) { $(this).removeClass('titleForm')});
});
