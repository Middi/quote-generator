$("#get-quote").on("click", function() {
	
     $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
			 
  $(".quote-place").html("<h3>" + a[0].content + "</h3><h4><em>- "  + a[0].title + "</em></h4>");		 
			 
});
	
	
    });