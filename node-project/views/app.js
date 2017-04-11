$(document).on("ready", function() {

	console.log('JS linked');

	let pickNumber = 'localhost:3000/picknumber';

	$.ajax({
	    method: "GET",
	    url: pickNumber,
	    success: onSuccess,
	    error: onError		    	
	});
				
	
	function onSuccess(json) {
		console.log('success!');

	};	
	
	function onError(xhr, status, errorThrown) {
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	};		

});