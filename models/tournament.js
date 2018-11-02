var mongoose = require('mongoose');


var connectionString = "mongodb://dbuser:dbuser1@ds223653.mlab.com:23653/tournaments";
mongoose.connect(connectionString,{ useNewUrlParser: true });

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

var mySchema = mongoose.Schema({
    butt: { type: String, required: true },
    casino: String,
    area: String,
    type: String,
    day: String,
    startingtime: String,
    buyin: String,
    startingstack: String,
    roundtime: String,
    eliminationlevel: String,
    timelasted: String
}); 

 
module.exports = mongoose.model('Tournament', mySchema);

