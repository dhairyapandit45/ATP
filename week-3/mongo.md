show dbs- shows databases

create collections :
db.createCollection("name")

db.collection.find()

find users whose age is 21,23,27: 
db.users.find({age:{$in:[21,22,27]}})

find users whose age is above 25 and city hyd
db.users.find({$and:[{age:{$gt:25}},{city:"hyd"}]})

update users-
db.users.updateOne({name:"pp"},{$set:{name:"pranay", age:21}})

delete-
db.users.deleteOne({name:"dd"})

db.users.updateOne({name:"pranay"},{$addToSet:{skills:"Angular"}})  -->if element alr exists, cancels the update
db.users.updateOne({name:"pranay"},{$push:{skills:"Angular"}})      -->doesnt care

db.users.updateOne({name:"pranay"},{$pop:{skills:-1}})    -->deletes from start
db.users.updateOne({name:"pranay"},{$pop:{skills:+1}})    -->deletes from end

db.users.updateOne({name:"pranay"},{$pull:{skills:"Angular"}})   -->dlt with name

db.users.find({skills:{$all:["js","vue"]}})   -->$all avoids the order  

db.users.findOne({},{name:1,_id:0})  --> disply only req detatails

