$(function(){
//-----nav bar
	$('li > a').click(function() {
	
	  var value = this.href.split("#")[1]; //remove hash using substr(1)
	  
	  if(value == "home"){
		setActive('home');
		loadPage("./pages/dashboard.html");
	  }
	  if(value == "search"){
		setActive('search');	
		loadPage("./pages/search.html");
	  }
	  return false; //stop default link behaviour
	});
});
	