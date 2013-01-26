TaffyDb4Ti
==========

###WARNING

The original code can be found in the [**Release1**](https://github.com/benbahrenburg/TiTaffyDb/tree/Release1) branch. 

Please be **aware** that this version **HAS BREAKING** changes compared with the original. However the changes are not too big and they should be easy to be implemented.

This version aims to an easier update of the TaffyDb library in the future and a simplification of the APIs.


###TaffyDb for Titanium


**Full credit** goes to [Ben Bahrenburg](https://github.com/benbahrenburg/TiTaffyDb) for the initial implementation of TaffyDB for Titanium,
and to [Ian Smith](http://www.taffydb.com/) for the great TaffyDB library.


The version used in the [**Release1**](https://github.com/benbahrenburg/TiTaffyDb/tree/Release1) branch of TiTaffyDb has a bug (I think the bug is in the older version of TaffyDB used by this module) that doesn't allow multiple dbs in the same file. There are query caching optimizations that make the data to be overwriten for the same query on two different dbs.

How the TiTaffyDb implementation goes deep integrated into TaffyDb, a simple update to the latest version was too much for me (I'm too lazy) so I **stole** some code from Ben and created a simpler wrapper for TaffyDb.

The syntax is cleaner (in my opinion) and the update to a future version of Taffy should be painless.

####TODO
- Right now the only storage method is to a file. I will add, maybe :), storing to properties. 
- I tested it only on iOs, but the Ben's version was working just fine on Android so I see no reason why this version wouldn't. Anyway, I'll run some test and update this howto.


####How to

#####Create a database - plain simple
The constructor accepts as argument the name of the store where the data wil reside.

```
var taffy = require('/taffydb4ti').taffy;

var my_db = new taffy('my_db_store_name');

my_db.insert({my_value:'first'});
my_db.insert({my_value:'second'});

my_db.save();

```

#####Create a database - passing taffydb settings
More about [Taffy settings](http://www.taffydb.com/workingwithdata) (scroll to **db.settings()** )

```
var taffy = (require('/taffydb4ti').taffy;

var my_db = new taffy('my_db_store_name',{onInsert: function(){alert('We had an insert!')}});

my_db.insert({my_value:'first'});
my_db.insert({my_value:'second'});

my_db.save();

```
#####Create a database - autocommit
This setting will autosave each change you are doing to the database. While handy, if you have many operation on the the db I suggest not to use it and call **db.save()** yourself.
Of course **autocommit** can be used together with taffy settings.

```
var taffy = (require('/taffydb4ti').taffy;

var my_db = new taffy('my_db_store_name',{autocommit:true});

my_db.insert({my_value:'first'});
my_db.insert({my_value:'second'});

// no need for my_db.save() anymore;

```

####License
TaffyDB is licensed under the BSD licence type.

TiTaffyDb is under the OSI approved Apache Public License (version 2).


As long as you respect the above licenses I don't care what you do with the code.

Just have fun :)


####Changes by Daniel Tamas
[@dan_tamas](https://twitter.com/dan_tamas)

