<h1>TiTaffyDb</h1>
==========

<h2>TaffyDb for Titanium</h2>

TiTaffyDb is a Titanium wrapper around [TaffyDb](http://www.taffydb.com) created by [Ian Smith](https://twitter.com/biastoact).

For examples, and full documentation please visit (taffydb.com)[http://www.taffydb.com] for details.


<h2>Example</h2>

Below is a sample app.js demonstrating how to use TiTaffyDb in your Titanium Mobile Project.  For a fully working demo project please see the example folder.

<pre><code>
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

</code></pre>

<h2>Licensing & Support</h2>

This project is licensed under the OSI approved Apache Public License (version 2). For details please see the license associated with each project.

Developed by [Ben Bahrenburg](http://bahrenburgs.com) available on twitter [@benCoding](http://twitter.com/benCoding)

<h2>Learn More</h2>

<h3>Twitter</h3>

Please consider following the [@benCoding Twitter](http://www.twitter.com/benCoding) for updates 
and more about Titanium.

<h3>Blog</h3>

For module updates, Titanium tutorials and more please check out my blog at [benCoding.Com](http://benCoding.com).
