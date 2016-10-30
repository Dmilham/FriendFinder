

// Get Request=================================================


modules.export = function (app){
app.get('/api/friends', function (req, res) {
	res.json(friends);
});
}
