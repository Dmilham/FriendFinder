 //    /\__\         /\__\         /\  \          ___          /\__\         /\  \    
 //    /:/ _/_       /:/ _/_       /::\  \        /\  \        /:/ _/_       /::\  \   
 //   /:/ /\  \     /:/ /\__\     /:/\:\__\       \:\  \      /:/ /\__\     /:/\:\__\  
 //  /:/ /::\  \   /:/ /:/ _/_   /:/ /:/  /        \:\  \    /:/ /:/ _/_   /:/ /:/  /  
 // /:/_/:/\:\__\ /:/_/:/ /\__\ /:/_/:/__/___  ___  \:\__\  /:/_/:/ /\__\ /:/_/:/__/___
 // \:\/:/ /:/  / \:\/:/ /:/  / \:\/:::::/  / /\  \ |:|  |  \:\/:/ /:/  / \:\/:::::/  /
 //  \::/ /:/  /   \::/_/:/  /   \::/~~/~~~~  \:\  \|:|  |   \::/_/:/  /   \::/~~/~~~~ 
 //   \/_/:/  /     \:\/:/  /     \:\~~\       \:\__|:|__|    \:\/:/  /     \:\~~\     
 //     /:/  /       \::/  /       \:\__\       \::::/__/      \::/  /       \:\__\    
 //     \/__/         \/__/         \/__/        ~~~~           \/__/         \/__/  


//=Dependencies===========================================================
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

//=BodyParser Middleware==================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//=ROUTER================================================================
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

//=LISTENER==============================================================
app.listen(PORT, function (){
	console.log('=====================================');
	console.log('=====-*-*-Friend Finder On-*-*-======');
	console.log('===-------------------------------===');
	console.log(' App is now listening on PORT ' + PORT);
	console.log('===-------------------------------===');
	console.log('=====================================');

});




