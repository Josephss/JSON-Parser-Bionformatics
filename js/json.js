$(document).ready(function(){ 

 $(function() {


	$.getJSON("http://osmonds.usd.edu/BTL-REST/resources/tools/", function(data) {
   			 alert(data);
   		$.each(data, function(i, f) {
		 var tool_div_row = "<div id='two-columns parent' class='grid-container centered' style='display:block;'>" + "<ul class='col-md-3'>" + "<li style='list-style-type: none;' class = 'bor' >" + "<img id = 'pop' src='images/tools-icon.jpg' class='img-responsive center-block lefter'>" + "</img>" + "<h3>" + f.name + "</h3>" + "<p>" + f.version + "</p>"  +  "<p class = 'discriptionPad' >" + f.description + "</p>" + "<div class = 'smile'>" + "<a href='http://google.com'>" + "<img class = 'ver' src='img/play.png' />" + "</a>" + "<a href='http://google.com'>" + "<img class = 'ver' src='img/eye.png' align='center''/>" + "</a> " + "<a href='http://google.com'>" +"<img  class = 'ver' src='img/quality.png' align='center''/>" + "</a>" + "<a href='http://google.com'>" + "<img src='img/support.png' align='center''/>" + "</a>"  + "</div>" + "</li>" + "</ul>" + "</div>"
		 //+  "<a href='http://google.com'>" + "<img src='img/docker-whale.png' align='center''/>" + "</a>"  -- Docker icon!

        $(tool_div_row).appendTo("#three-columns");
        	});
	});

//Json Parser code!
   $.getJSON('tools_structured.json', function(data) {
  		// Displays the tools in a table
       $.each(data.tool, function(i, f) {
		 var tool_div_row = "<div id='two-columns parent' class='grid-container centered' style='display:block;'>" + "<ul class='col-md-3'>" + "<li style='list-style-type: none;' class = 'bor' >" + "<img id = 'pop' src='images/tools-icon.jpg' class='img-responsive center-block lefter'>" + "</img>" + "<h3>" + f.name + "</h3>" + "<p>" + f.version + "</p>"  +  "<p class = 'discriptionPad' >" + f.description + "</p>" + "<div class = 'smile'>" + "<a href='http://google.com'>" + "<img class = 'ver' src='img/play.png' />" + "</a>" + "<a href='http://google.com'>" + "<img class = 'ver' src='img/eye.png' align='center''/>" + "</a> " + "<a href='http://google.com'>" +"<img  class = 'ver' src='img/quality.png' align='center''/>" + "</a>" + "<a href='http://google.com'>" + "<img src='img/support.png' align='center''/>" + "</a>"  + "</div>" + "</li>" + "</ul>" + "</div>"
		 //+  "<a href='http://google.com'>" + "<img src='img/docker-whale.png' align='center''/>" + "</a>"  -- Docker icon!

        $(tool_div_row).appendTo("#two-columns");
     });

	});



});


 }) 