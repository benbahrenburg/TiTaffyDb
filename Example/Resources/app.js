// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//Bring the commonJs module into our project
Ti.taffy = require('ti.taffydb').taffyDb;

//Create a new database with some records
var newsfeed = Ti.taffy ([
    {"id":1,"user":"kmart77","stars":3,"text":"JavaScript is a meal best served cold"},
    {"id":2,"user":"lukeisyourfather","stars":5,"text":"Anyone want to meet tonight at Fado?"},
    {"id":3,"user":"bemine","stars":3,"text":"I reallylike the new prirotity inbox #gmail"},
    {"id":4,"user":"keepit","stars":3,"text":"Laughing at this weeks fails video."},
    {"id":5,"user":"piegirl22","stars":3,"text":"It is impossible to change your clothes in a public bathroom. Ick."},
    {"id":6,"user":"kmart77","stars":3,"text":"@kmart77: Have fun in New York!"},
    {"id":7,"user":"justinb","stars":5,"text":"Please set the noise level to earthquake"}
]);

var newFeedCount = newsfeed().count(); // returns 7
Ti.API.info('Records in newfeed =' + newFeedCount);

Ti.API.info('sort records by username');
newsfeed.sort("user") 

Ti.API.info('filter for posts where user is equal to kmart77');
newsfeed({user:"kmart77"}).count() // returns 1

Ti.API.info('updates the star rating, returns a query object');
newsfeed({id:"1"}).update({stars:5});

Ti.API.info('inserts a new record');
newsfeed.insert({"id":8,"user":"justinb","stars":3,"text":"Have a great weekend everyone!"});

Ti.API.info('removes all records for user kmart77');
newsfeed({user:"kmart77"}).remove();

Ti.API.info('Save contents');
newsfeed.save('test1');

Ti.API.info('After reset this many rows are left ' + newsfeed().count());

Ti.API.info('Can this to see if a db is stored ')
Ti.API.info('Does db test1 exist ' + newsfeed.exists('test1'));
Ti.API.info('How about does db test2 exist ' + newsfeed.exists('test2'));

Ti.API.info('Reload our db contents');
newsfeed.open('test1');
Ti.API.info('After reloading the db how many rows do we have? ' + newsfeed().count());

Ti.API.info('Distroy the db');
newsfeed.destroy();

Ti.API.info('After destroying the db rows do we have? ' + newsfeed().count());
Ti.API.info('Does db test1 exist ' + newsfeed.exists('test1'));