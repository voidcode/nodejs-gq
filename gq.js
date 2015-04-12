#!/usr/bin/env node
'use strict';
var google = require('google');
var suggest = require('suggestion');
var Q = String(process.argv[2]);

console.log('----------------------------------------------------------------------------------------------------');
if(process.argv[3] != undefined){
	if(process.argv[3].indexOf('--limit') < 0 ){
		var limit = parseInt(process.argv[3]);
		google.resultsPerPage = limit;
		console.log('\n>> Q + limit-'+limit+' >> '+ Q +' . . .\n');
	}
} else {
	google.resultsPerPage = 10;
	console.log('\n>> Q >> '+ Q +' . . .\n');
} 
google(Q, function (err, next, links){
	if (err) console.error(err)
	else {
	    var couter =0;
	    var linksnumber = links.length-1;
	    links = links.reverse();
	    for (var i = 0; i < links.length; ++i) {
		  	if(links[i].link !== null){
			    console.log('['+linksnumber+']-> '+links[i].title +'\n'+links[i].link); // link.href is an alias for link.link 
			    console.log(links[i].description + "\n---\n");
			    couter++;
			    linksnumber--;
			}
		}
		console.log('>> GoogleQuery return '+couter+' resluts!\n');
		suggest(Q, function (err, suggestions){
			if(err) console.log(err);
			else {
				console.log('Did you mean: '+suggestions +'.?');
			}
		});
	}
});