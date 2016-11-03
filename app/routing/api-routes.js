 //      ___           ___               
 //     /\  \         /\  \              
 //    /::\  \       /::\  \     ___     
 //   /:/\:\  \     /:/\:\__\   /\__\    
 //  /:/ /::\  \   /:/ /:/  /  /:/__/    
 // /:/_/:/\:\__\ /:/_/:/  /  /::\  \    
 // \:\/:/  \/__/ \:\/:/  /   \/\:\  \__ 
 //  \::/__/       \::/__/     ~~\:\/\__\
 //   \:\  \        \:\  \        \::/  /
 //    \:\__\        \:\__\       /:/  / 
 //     \/__/         \/__/       \/__/  


// Dependancies================================================

//Linking routes to data resources
var friendsArray = require('../data/friends.js');

// Get Request=================================================
module.exports = function (app){

	app.get('/api/friends', function (req, res) {
		
		if(friendsArray == friendsArray){
			//friendsArray.push(req.body);
			res.json(friendsArray);
			console.log("=====================");
			console.log("Friends View Complete");
			console.log("=====================");
		} 
		else { 
			console.log("========================");
			console.log("---Something is wrong---");
			console.log("------------------------");
			console.log("---You are lonely now---");
			console.log("========================");
		
		}
	})
}

	
	






