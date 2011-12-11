// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

 	
var TiTaffy = require('ti.taffydb').taffyDb;

//var foo = TiTaffy().loadDb('hello');
//var count0 = foo().count(); // returns 7
//Ti.API.info('count0=' + count0);

var newsfeed = TiTaffy([
    {"id":1,"user":"kmart77","stars":3,"text":"JavaScript is a meal best served cold"},
    {"id":2,"user":"lukeisyourfather","stars":5,"text":"Anyone want to meet tonight at Fado?"},
    {"id":3,"user":"bemine","stars":3,"text":"I reallylike the new prirotity inbox #gmail"},
    {"id":4,"user":"keepit","stars":3,"text":"Laughing at this weeks fails video."},
    {"id":5,"user":"piegirl22","stars":3,"text":"It is impossible to change your clothes in a public bathroom. Ick."},
    {"id":6,"user":"kmart77","stars":3,"text":"@kmart77: Have fun in New York!"},
    {"id":7,"user":"justinb","stars":5,"text":"Please set the noise level to earthquake"}
]);

var wack = newsfeed.count2();
//var f = newsfeed.store('hello');

//var count1 = newsfeed().count(); // returns 7
Ti.API.info('New feed count =' + count1);


//Save contents
TiTaffy.save('test1');
//Reset the db
TiTaffy.resetDb();

count1 = newsfeed().count(); // returns 7
Ti.API.info('New feed count =' + count1);