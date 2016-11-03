 //      ___                         ___                   
 //     /\  \                       /\  \                  
 //     \:\  \         ___         |::\  \                 
 //      \:\  \       /\__\        |:|:\  \                
 //  ___ /::\  \     /:/  /      __|:|\:\  \   ___     ___ 
 // /\  /:/\:\__\   /:/__/      /::::|_\:\__\ /\  \   /\__\
 // \:\/:/  \/__/  /::\  \      \:\~~\  \/__/ \:\  \ /:/  /
 //  \::/__/      /:/\:\  \      \:\  \        \:\  /:/  / 
 //   \:\  \      \/__\:\  \      \:\  \        \:\/:/  /  
 //    \:\__\          \:\__\      \:\__\        \::/  /   
 //     \/__/           \/__/       \/__/         \/__/    



// Dependancies============================================
var path = require ('path');

// Routes==================================================

module.exports = function(app){
	// A Url ending in / will get routed to home.html
app.use('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/home.html'));
});

	// A Url ending in /survey will get routed to survey.html
app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/survey.html'));
});	
}


// Oh me and my ideas======================================
// app.get('/register', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'register.html'));
// });

// New Sign-ups=============================================
// app.post('/api/register', function (req, res) {
// 	var newReg = req.body;
// 	newReg.pin = newReg.pin.replace(/\s+/g, '').toLowerCase();

// 	console.log(newReg);

// 	characters.push(newReg);

// 	res.json(newReg);
// });