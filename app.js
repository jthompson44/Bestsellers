$(document).ready(function(){
	
    //I acknowledge that this is a ridiculous workaround to this problem, but to get my drop down menu to work, I put all the js that populates my page into a massive function that runs when the page first loads as well as every time you change the category
    function pageLoad(){
   
        //Chooses which list to show
        var list = document.getElementById("listOptions").value;
 //initializes some basic variables   
    var NYTimes = "http://api.nytimes.com/svc/books/v2/lists/";
    var NYapi_key = "9b79a15c3ca38e0ceb09e3fcb5c8e857%3A13%3A70149467";
    var GRapi_key = "rDKPHWpl7gcLVcZXRMweAg";

//The title of the page       
        var e = document.getElementById("listOptions");
        var titleLine = e.options[e.selectedIndex].text; 
        $('#title').html("<h1>Popular "+titleLine+' Books</h1>');
        
//Call to NYTimes for book covers
    
$.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        console.log(response);
//      $('#results').html(JSON.stringify(response, null, 2));
        $('#book1').html('<img src="'+response.results[0].book_details[0].book_image+'"><h2>'+response.results[0].book_details[0].title+'</h2><h3> by '+response.results[0].book_details[0].author+'</h3><h4>'+response.results[0].book_details[0].description+'</h4>');
        //$('#book1').html('<h2>'+response.results[0].book_details[0].primary_isbn13+'</h2>');
        $('#book2').html('<img src="'+response.results[1].book_details[0].book_image+'">');
        $('#book3').html('<img src="'+response.results[2].book_details[0].book_image+'">');
        $('#book4').html('<img src="'+response.results[3].book_details[0].book_image+'">');
        $('#book5').html('<img src="'+response.results[4].book_details[0].book_image+'">');
        $('#book6').html('<img src="'+response.results[5].book_details[0].book_image+'">');
        $('#book7').html('<img src="'+response.results[6].book_details[0].book_image+'">');
        $('#book8').html('<img src="'+response.results[7].book_details[0].book_image+'">');
        $('#book9').html('<img src="'+response.results[8].book_details[0].book_image+'">');
        $('#book10').html('<img src="'+response.results[9].book_details[0].book_image+'">');
    }
});
       
		//	API calls to goodreads for book reviews
        //Fair warning - This is when things get REALLY messy
     $("#book1").click(function() { //This happens if you click book1
		
	   //insert lightbox HTML into page - sorry this bit is so messy
	    $('body').append(
            '<div class="lightbox" id="lightbox1">' + '<p>Goodreads Reviews</p>' + '<div id="content1">' +
            $.ajax({ //I couldn't figure out how assign a value to a global variable inside an ajax function, so I called the NY api again everytime I wanted something
                url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
                jsonp: 'callback',
                jsonpCallback: 'svc_search_v2_articlesearch',
                dataType: 'jsonp',
                success: function (response) {
                    $('#content1').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[0].book_details[0].primary_isbn13+'"></iframe>');
                }
            })    
            + '</div>' +	'</div>'
        );//end hellish append
        $('#lightbox1').on('click', function() {
            $('#lightbox1').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
//THE ABOVE CODE REPEATS NINE MORE TIMES UNTIL LINE 284        
        
     $("#book2").click(function() { //This happens if you click book2
		
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox2">' + '<p>Goodreads Reviews</p>' + '<div id="content2">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content2').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[1].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox2').on('click', function() {
            $('#lightbox2').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
    $("#book3").click(function() { //This happens if you click book3
		
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox3">' + '<p>Goodreads Reviews</p>' + '<div id="content3">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content3').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[2].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox3').on('click', function() {
            $('#lightbox3').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
    $("#book4").click(function() { //This happens if you click book4
        
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox4">' + '<p>Goodreads Reviews</p>' + '<div id="content4">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content4').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[3].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox4').on('click', function() {
            $('#lightbox4').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
     $("#book5").click(function() { //This happens if you click book5
        
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox5">' + '<p>Goodreads Reviews</p>' + '<div id="content5">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content5').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[4].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox5').on('click', function() {
            $('#lightbox5').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
    $("#book6").click(function() { //This happens if you click book6
        
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox6">' + '<p>Goodreads Reviews</p>' + '<div id="content6">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content6').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[5].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox6').on('click', function() {
            $('#lightbox6').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
     $("#book7").click(function() { //This happens if you click book7
        
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox7">' + '<p>Goodreads Reviews</p>' + '<div id="content7">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content7').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[6].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox7').on('click', function() {
            $('#lightbox7').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
     $("#book8").click(function() { //This happens if you click book8
        
		
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox8">' + '<p>Goodreads Reviews</p>' + '<div id="content8">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content8').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[7].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox8').on('click', function() {
            $('#lightbox8').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
    $("#book9").click(function() { //This happens if you click book9
		
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox9">' + '<p>Goodreads Reviews</p>' + '<div id="content9">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content9').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[8].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox9').on('click', function() {
            $('#lightbox9').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
    
     $("#book10").click(function() { //This happens if you click book10
		
	   //insert lightbox HTML into page
	    $('body').append(
        
        '<div class="lightbox" id="lightbox10">' + '<p>Goodreads Reviews</p>' + '<div id="content10">' +
            $.ajax({
    url: NYTimes+list+".jsonp?sort-by=rank&sort-order=ASC&api-key=" + NYapi_key,
    jsonp: 'callback',
    jsonpCallback: 'svc_search_v2_articlesearch',
    dataType: 'jsonp',
    success: function (response) {
        $('#content10').html('<iframe src="https://www.goodreads.com/api/reviews_widget_iframe?did=' + GRapi_key + '&amp;format=html&amp;isbn='+response.results[9].book_details[0].primary_isbn13+'"></iframe>');
    }
})    
            
            + '</div>' +	'</div>'
        
        );
        $('#lightbox10').on('click', function() {
            $('#lightbox10').hide();
        });//end hide lightbox function
    }); //end show lightbox on click function
        
    //THIS IS THE BIT THAT REACTS TO THE DROP DOWN    
    document.getElementById("listOptions").addEventListener("change", pageLoad);    
    }
    pageLoad();
});//end document ready
