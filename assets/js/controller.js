$(function(){

	//--listens for window resizes
	$(window).resize(function () {
	  $('body > .container').height($(document).height() - $('.navbar-header').height() - 50);
	});
	
	
	//--set the height of container on load
	$('body > .container').height($(document).height() - $('.navbar-header').height() - 50);

	//--load index page
	loadPage("./pages/dashboard.html");

	
	
	//--debug
	// $('#body').on('click','.btn',function(){
		// showSpinner(this,"Adding Record");
	// });
	
	
	$('.navbar-brand').click(function(){
		$(".navbar-brand").effect( "bounce", 
          {times:3}, 300 );
	});
	$('#agent-pic').click(function(){
		$(this).effect( "bounce", 
          {times:3}, 300 );
	});
	
	
});	
	