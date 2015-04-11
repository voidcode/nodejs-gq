var google = require('google')
var Q = String(process.argv[2]);
console.log('**********************************************************');
console.log('\n>> Q >> '+ Q +' . . .\n');
google.resultsPerPage = 10;
var couter =0;
google(Q, function (err, next, links){
	if (err) console.error(err)
	else {
	    couter =0;
	    links = links.reverse();
	    for (var i = 0; i < links.length; ++i) {
		  	if(links[i].link !== null){
			    console.log('['+links[i].title +'] > ' +links[i].link); // link.href is an alias for link.link 
	
			    console.log(links[i].description + "\n\n");
			    couter++;
			}
		}
		console.log('>> This google search return '+couter+' resluts!\n\n**********************************************************');
	}
});