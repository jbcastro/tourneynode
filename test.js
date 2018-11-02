var Tournaments = require("./models/tournament");

// return all records
Tournaments.find({}, (err, tournament) => {
  if (err) throw err;
  console.log(tournament);
  // other code here
});

 //Episodes.find({epnum: '0'}, (err, result) => {
   // if (err) throw err;
    //console.log(result);
  //});
  
 Tournaments.find({butt: 'Tulalips'}, (err, result) => {
    if (err) {
      return err;
    } 
    console.log(result);
    
  });
 
Tournaments.find({}, function (err, butt){
  if (err) throw err;
  console.log(butt);
});
  
//  return Tournaments.find({butt: 'Tulalips'}, (err, reuslt) => {
//    if (err) throw err;
//    
//    Episodes.remove(function(err){
//      if (err) throw err;
//      
//      console.log(Episodes.episode);
//      
//    });
//    
//  });