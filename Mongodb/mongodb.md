by default port no 27017

cmd past it run the shell
"C:\Program Files\MongoDB\Server\4.4\bin/mongo.exe"

we set the environment variable

0️⃣ start mongo shell

> mongo

1️⃣ creating data
use <database name>
2️⃣ show dbs
3️⃣ creating collection or table(sql)
db.<name of collection>.insertOne({name:"vikky",type:"singh", hobbies:"cricket"})

eg.

> db.vikky.insertOne({name:"vikky",type:"singh", hobbies:"cricket"})

output
{
"acknowledged" : true,
"insertedId" : ObjectId("60c33342c58cf2ea66850b4f")
}
4️⃣ how to know current database

> db
> 5️⃣ how to know total collections
> show collections
> 6️⃣ how to see total documents or records in
> db.<collection name>.find()
> output:
> { "\_id" : ObjectId("60c33342c58cf2ea66850b4f"), "name" : "vikky", "type" : "singh", "hobbies" : "cricket"}
> db.<collection name> .find().pretty()

    {
        "_id" : ObjectId("60c33342c58cf2ea66850b4f"),
        "name" : "vikky",
        "type" : "singh",
        "hobbies" : "cricket"

}

7️⃣ how to insert more than one documents

> db.<collections name>.insertMany([{array},{of},{object}])

8️⃣ Read operation

> db.<collection name>.find(query,projection)
> eg.
> db.vikky.find({name:"alo"}).pretty()
> output:
> {

        "_id" : ObjectId("60c33892c58cf2ea66850b55"),
        "name" : "alo",
        "type" : "pagle"

}
if we want to show only name file so we can use projection

> db.vikky.find({name:"alo"},{name:1}).pretty()
> output:
> { "\_id" : ObjectId("60c33892c58cf2ea66850b55"), "name" : "alo" }

id will also come 🤔

> db.vikky.find({name:"alo"},{\_id:0,name:1}).pretty()
> output:
> { "name" : "alo" }

set the filter to active:true and get only first field with active:true value

without limit

> db.vikky.find({active:true}).pretty()
> {

        "_id" : ObjectId("60c33745c58cf2ea66850b53"),
        "name" : "arjun",
        "type" : "sinha",
        "hobbies" : "golf",
        "active" : true

}
{
"\_id" : ObjectId("60c33892c58cf2ea66850b56"),
"name" : "arjun",
"active" : true
}

with limit

> db.vikky.find({active:true}).pretty().limit(1)
> {

        "_id" : ObjectId("60c33745c58cf2ea66850b53"),
        "name" : "arjun",
        "type" : "sinha",
        "hobbies" : "golf",
        "active" : true

}

2nd way of doing it is
without a limit

> db.vikky.findOne({active:true})
> {

        "_id" : ObjectId("60c33745c58cf2ea66850b53"),
        "name" : "arjun",
        "type" : "sinha",
        "hobbies" : "golf",
        "active" : true

}
