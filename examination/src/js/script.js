$(function () {

	/*AJAX----------------------------------------------------------------------------------*/

	function queryIdea() {
		var form = $('.form');
		var input = $('.query');
		var ideasBg = $('.idea');
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

	$('.ideasGroup').isotope({
		itemSelector:'.idea',
		percentPosition: true
	});

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
	slider({
		slider: 'sliderFirst',
		slidePrev: 'sliderFirstPrev',
		slideNext: 'sliderFirstNext'
	});
	slider({
		slider: 'sliderSecond',
		slidePrev: 'sliderSecondPrev',
		slideNext: 'sliderSecondNext'
	});
	slider({
		slider: 'sliderThird',
		slidePrev: 'sliderThirdPrev',
		slideNext: 'sliderThirdNext'
	});
});
