// Test code for gonode dev
Go = require('./lib/gonode.js').Go;

// Dev stuff below
go = new Go({path: 'dev.go', initAtOnce: true, maxCommandsRunning: 2}, function(err) {
	go.on('error', function(err) {
		console.log('error: ' + err.parser + ' ' + err.data);
	})		

	go.execute({test: 'a'}, response, {commandTimeoutSec: 2});
	go.execute({test: 'b'}, response);
	go.execute({test: 'c'}, response);
	go.execute({test: 'd'}, response);
	go.execute({test: 'e'}, response);
});

function response(timeout, r) {
	if(!timeout) {
		console.log(r);

		// Close on "last" response
		if(r.test === "a") {
			go.close();
		}	
	}
	else {
		console.log("timeout");
		go.close();
	}	
}