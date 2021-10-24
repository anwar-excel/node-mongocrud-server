const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;




//user:mydbuserwork1
//password:ZUnyxj7vQzbLqiZU



const uri = "mongodb+srv://mydbuserwork1:ZUnyxj7vQzbLqiZU@cluster0.njfp6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    const user = { name: 'akter', email: 'akter@gmail.com', phone: '0166666666666' };
    collection.insertOne(user);
    .then(() => {
        console.log('insert success');
    })
    client.close();
});


app.get('/', (req, res) => {
    res.send('Running my crud');
});

app.listen(port, () => {
    console.log('Running server on port', port);
})


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://mydbuserwork1:<password>@cluster0.njfp6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
