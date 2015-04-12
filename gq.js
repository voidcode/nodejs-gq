#!/usr/bin/env node
'use strict';
var google = require('google');
var suggest = require('suggestion');
var Q = String(process.argv[2]);

console.log('----------------------------------------------------------------------------------------------------');
if(process.argv[3] != ''){
		google.resultsPerPage = parseInt(process.argv[3]);
		console.log('\n>> Q with limit-'+String(process.argv[3])+' >> '+ Q +' . . .\n');
} else {
	google.resultsPerPage = 10;
	console.log('\n>> Q >> '+ Q +' . . .\n');
} 
google(Q, function (err, next, links){
	if (err) console.error(err)
	else {
	    var couter =0;
	    var linksnumber = links.length;
	    links = links.reverse();
	    for (var i = 0; i < links.length; ++i) {
		  	if(links[i].link !== null){
		  		couter++;
			    linksnumber--;
			    console.log('['+linksnumber+']-> '+links[i].title +'\n'+links[i].link); // link.href is an alias for link.link 
			    console.log(links[i].description + "\n---\n");
			}
		}
		console.log('>> GoogleQuery return '+couter+' resluts!\n');
		suggest(Q, function (err, suggestions){
			if(err) console.log(err);
			else console.log('Did you mean: '+suggestions +'.?');
		});
	}
});