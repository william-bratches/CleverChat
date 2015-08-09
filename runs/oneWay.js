var Cleverbot = require('../lib/cleverbot');
var prompt = require('prompt');
var say = require('say');


var CBot = new Cleverbot
var You = new Cleverbot



var send = function send(resp){
    prompt.start();
    prompt.get(['message'], function(err, res) {
        var statement = res.message;
        CBot.write(statement, response);
        //console.log("You: ", statement);
    })
};
       

var response = function response(resp) {
    //CBot.write(resp['message'], send);
    //console.log("Roger: ", resp['message']);
    say.speak('voice_cmu_us_slt_arctic_hts', resp['message'])

    send({message: ''})
    
}





send({message: ''});





