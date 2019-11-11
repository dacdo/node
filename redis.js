var redis = require('redis');
var client = redis.createClient(); //creates a new client

client.on('connect', function() {
    console.log('connected');
});

client.set('framework', 'AngularJS');
client.set('frame', 'abc', function(err, reply) {
  console.log(reply);
});

client.hmset('frameworks', {
    'javascript': 'AngularJS',
    'css': 'Bootstrap',
    'node': 'Express'
});

client.get('framework', redis.print);

client.hkeys("frameworks", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});



