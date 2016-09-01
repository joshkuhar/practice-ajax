'use strict';
$(document).ready(function(){


});



$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
	console.log(data);
	console.log(data.Search);
	console.log(data.Search[0].Year);
  });

$.ajax({
  dataType: 'json',
  url: 'http://www.omdbapi.com/?s=Star%20Wars&r=json',
  success: function(data, textStatus) {
    console.log('third', data.Search[1].Year);
    console.log(textStatus);
  }
})
.done(function(foo){
  console.log("I'm the done method");
  console.log('third', foo.Search[1].Year);
});