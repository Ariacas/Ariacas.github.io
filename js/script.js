$(document).ready(function(){
	$("#nav").on("click","a", function (event) {
		var timeAnimate = 700; 
		var contacts = [".contact", ".contact-1", ".contact-2", ".contact-3"];
		var delays = [700, 900, 1100, 1300];

		event.preventDefault();

		var id  = $(this).attr('href'),

		top = $(id).offset().top;

		if (id = "#nav") {
			$('body, html').animate({scrollTop: top}, timeAnimate);
		}
		
		
		if (id == "#learning") {
			$('body, html').animate({scrollTop: top}, timeAnimate);
			setTimeout(function(){
				$(".skill-1, .skill-2, .skill-3, .skill-4, .skill-5, .skill-6").css({"visibility":"visible", "transition":"1.5s", "width":"220px"});
			}, timeAnimate );
		} 
		if (id == "#projects") {
			$('body, html').animate({scrollTop: top}, timeAnimate );
			setTimeout(function(){
				$(".projects").css({"transition":"1s","opacity":"1"});
			}, timeAnimate);
		}

		if (id == "#contacts") {
			$('body, html').animate({scrollTop: top}, timeAnimate );

			setTimeout(function(){
				$(contacts[0]).css({"transition":"1s","opacity":"1"});
			}, delays[0]);

			setTimeout(function(){
				$(contacts[1]).css({"transition":"1s","opacity":"1"});
			}, delays[1]);

			setTimeout(function(){
				$(contacts[2]).css({"transition":"1s","opacity":"1"});
			}, delays[2]);

			setTimeout(function(){
				$(contacts[3]).css({"transition":"1s","opacity":"1"});
			}, delays[3]);
		}
	});

	$(window).scroll(function(){

		var contacts = [".contact", ".contact-1", ".contact-2", ".contact-3"];
		var delays = [800, 1000, 1200, 1400];
		

		if ($(window).scrollTop() >= $("#learning").offset().top){
			$(".skill-1, .skill-2, .skill-3, .skill-4, .skill-5, .skill-6").css({"visibility":"visible", "transition":"1.5s", "width":"220px"});
		}

		if ($(window).scrollTop() >= $("#learning").offset().top + 500){
			$(".projects").css({"transition":"1s","opacity":"1"});
			
			setTimeout(function(){
				$(contacts[0]).css({"transition":"1s","opacity":"1"});
			}, delays[0]);

			setTimeout(function(){
				$(contacts[1]).css({"transition":"1s","opacity":"1"});
			}, delays[1]);

			setTimeout(function(){
				$(contacts[2]).css({"transition":"1s","opacity":"1"});
			}, delays[2]);

			setTimeout(function(){
				$(contacts[3]).css({"transition":"1s","opacity":"1"});
			}, delays[3]);
		
		}

    });
});