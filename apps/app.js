$(document).ready(function(){
	$("#query").click(function(){
		/*alert("test");*/
		var searchTerm = $("#search-term").val();
		submitValuation(searchTerm);
	});
	$("#search-term").on("keydown", function(e) {
		if (e.which === 13) {
			//alert("testEnter");
			var searchTerm = $("#search-term").val();
			submitValuation(searchTerm);
		}
	});
	$("#search-term").focus(
    function(){
        $(this).val('');
    });
});

function submitValuation(searchTerm){ 

	var params = {
		part: 'snippet',
		key: 'apikey',
		q: searchTerm
	}

	var url = 'http://www.omdbapi.com/?s=' + searchTerm + '&r=json'
	$.getJSON(url, function(data){
		displayResults(data.Search);
	});
}


function displayResults(results){
	console.log(results);
	$("#search-results").html(" ");
	$("#search-term").blur();
	$.each(results, function(index,value){
		$("#search-results").append('<img src="' + value.Poster + '"></br>');
		$("#search-results").append(value.Title + ' ' + value.Year + '</br>' );
	});
}