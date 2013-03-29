// Example 1 - Simply echo the command sent to Go back to node

var Go = require('../../lib/gonode').Go;

var go = new Go({path: 'example1.go'});
go.init(initComplete) // We must always initialize gonode before executing any commands

// Called when gonode has been fully initialized and are accepting commands
function initComplete(err) {
	// Execute the command by sending some text as JSON to our example1.go
	go.execute({text: 'Hello world from gonode!'}, gotResponse);
}

// Called when Go sends us a response for the command above
function gotResponse(timeout, response) {
	// In our case we just echo the command, so we can get our text back	
	console.log('Go responded: ' + response.text);
	// Close gonode so we won't leave Go hanging while waiting for commands
	go.close();
}

// Shorthand version of the above
// Later examples will most likely use this pattern
/*
var go = new Go({path: 'example1.go', initAtOnce: true}, function(err) {
	go.execute({text: 'Hello world from gonode!'}, function(timeout, response) {
		console.log('Go responded: ' + response.text);
		go.close();
	});
});
*/