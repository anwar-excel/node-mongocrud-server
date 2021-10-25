const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 7000;




//user:mydbuserwork1
//password:ZUnyxj7vQzbLqiZU



const uri = "mongodb+srv://mydbuserwork1:ZUnyxj7vQzbLqiZU@cluster0.njfp6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        // Specifying a Schema is optional, but it enables type hints on
        // finds and inserts
        const users = database.collection < users > ("users");
        const result = await users.insertOne({
            name: "special",
            email: "special@gmail.com",
        });
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
// client.connect(err => {
//     const collection = client.db("foodMaster").collection("users");
//     // perform actions on the collection object
//     const user = { name: 'Maho', email: 'maho@gmail.com', phome: '014246532462346' };
//     collection.insertOne(user)
//         .then(() => {
//             console.log('insert success');
//         })
//     // client.close();
// });


app.get('/', (req, res) => {
    res.send('Running my crud rafa');
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
