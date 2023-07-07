const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster.9zce0xe.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const customerCollection = client.db("repliq").collection("users");

        // get all user
        app.get('/all-customers', async (req, res) => {
            const result = await customerCollection.find().toArray();
            res.send(result);
        })

        //store user data
        app.post('/customers', async (req, res) => {
            const data = req.body;
            const update = {
                $set: {
                    name: data.name,
                    phone: data.phone,
                    password: data.password,
                }
            };
            const options = { upsert: true };
            const result = await customerCollection.updateOne(data, update, options);
            res.send(result);
        })

        //get single customer
        app.get('/customer/details/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await customerCollection.findOne(query);
            res.send(result);
        })

        // delete customers
        app.delete('/customers/:id', async (req, res) => {
            const data = req.params.id;
            const query = {_id: new ObjectId(data)};
            const result = await customerCollection.deleteOne(query);
            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('server is ready');
})

app.listen(port, () => {
    console.log('server is ok')
})