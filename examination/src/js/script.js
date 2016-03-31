$(function () {
	/*AJAX----------------------------------------------------------------------------------*/
	function queryIdea() {
		var form = $('.form');
		var input = $('.query');
		var ideasBg = $('.idea h3');
		var ideasTitle = ideasBg.find('a');

		function getXmlHttp() {
			var xmlhttp;
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					xmlhttp = false;
				}
			}
			if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
				xmlhttp = new XMLHttpRequest();
			}
			return xmlhttp;
		}

		function queryResult(data) {
			if(!data) {return;}
			var title = data.images[0].word;
			for (var i = 0; i < data.images.length; ++i){
				$(ideasTitle[i]).text(title);
				$(ideasBg[i]).css('background-image', 'url('+data.images[i].imageurl+')');
			}
		}

		function querySend(query){
			var url = 'http://api.pixplorer.co.uk/image?'+
				'word='+query+
				'&amount='+ideasBg.length+
				'&size=tb';
			var xmlhttp = getXmlHttp();
			xmlhttp.open('GET', url, true);
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4) {
					if(xmlhttp.status == 200) {
						var response = $.parseJSON(xmlhttp.responseText);
						queryResult(response);
					}
				}
			};
			xmlhttp.send(null);
		}

		form.bind('submit', function(e){
			e.preventDefault();
			querySend(input.val());
		});
	}

	queryIdea();

	/*Isotope-------------------------------------------------------------------------------*/
	function ideasIsotope (){

		var $layoutIdeas = $('.ideasGroup');
		var widthIdea = $layoutIdeas.width()/3;
		$layoutIdeas.isotope({
			itemSelector:'.idea',
			percentPosition: true,
			masonry: {
				columnWidth: widthIdea,
				gutter: 0
			}
		}).isotope('layout');

		function init(){
			var widthIdea = $layoutIdeas.width()/3;
			$layoutIdeas.isotope({
				masonry: {
					columnWidth: widthIdea,
					gutter: 0
				}
			}).isotope('layout');
		}

		$(window).bind('resize', function(){
			setTimeout(function(){ init();}, 500);
		});
	}

	ideasIsotope();

	/*Sliders-------------------------------------------------------------------------------*/

	function slider(options){
		var slider = $('.'+options.slider).bind('jcarousel:create jcarousel:reload', function() {
			var element = $(this);
			var width = element.innerWidth();
			element.jcarousel('items').css('width', width + 'px');
		}).jcarousel({});

		$('.' + options.slidePrev).jcarouselControl({
			target: '-=1',
			carousel: slider
		});

		$('.' + options.slideNext).jcarouselControl({
			target: '+=1',
			carousel: slider
		});
	}

	var sliders =[
		{
			slider: 'sliderFirst',
			slidePrev: 'sliderFirstPrev',
			slideNext: 'sliderFirstNext'
		},
		{
			slider: 'sliderSecond',
			slidePrev: 'sliderSecondPrev',
			slideNext: 'sliderSecondNext'
		},
		{
			slider: 'sliderThird',
			slidePrev: 'sliderThirdPrev',
			slideNext: 'sliderThirdNext'
		}
	];

	$.each(sliders, function(index, value){
		slider(value);
	});

	$(window).bind('resize', function(){
		setTimeout(function(){
			$('.sliderFirst').jcarousel('reload');
			$('.sliderSecond').jcarousel('reload');
			$('.sliderThird').jcarousel('reload');
		}, 500);
	});
});
