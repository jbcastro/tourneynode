var Tournaments = require ("../models/tournament.js");


exports.getAll = () => {
  return Tournaments.find({}, (err, result) => {
    if (err) {
      return err;
    } 
        console.log(result);

    return result;
    
  });
  
  
};

exports.getOne = (butt1) => {
  return Tournaments.findOne({butt: butt1}, (err, result) => {
    if (err) {
      return err;
    } 
    console.log(result);
    return result;
    
  });
  
};

exports.addOne = ( butt1) => {
  return Tournaments.create({butt: butt1}, (err, result) => {
     if (err) {
         return err;
     }
    return result;
  });
  
};



exports.killOne = (butt1) => {
  
  return Tournaments.findOne({butt: butt1}, (err, result) =>{
    if (err) throw err;
    
    result.remove(function(err){
      if (err) throw err;
      //console.log(butt1);
    });
  });
};