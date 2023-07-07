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
        const productCollection = client.db("repliq").collection("products");
        const cartCollection = client.db("repliq").collection("cart");
        const orderCollection = client.db("repliq").collection("order");

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

        // get all products
        app.get('/all-products', async (req, res) => {
            const result = await productCollection.find().toArray();
            res.send(result);
        })

        //store product
        app.post('/products', async (req, res) => {
            const data = req.body;
            const update = {
                $set: {
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    brand: data.brand,
                    color: data.color,
                    weight: data.weight,
                    dimensions: data.dimensions,
                }
            };
            const options = { upsert: true };
            const result = await productCollection.updateOne(data, update, options);
            res.send(result);
        })

        //get single product
        app.get('/product/details/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await productCollection.findOne(query);
            res.send(result);
        })

        // delete product
        app.delete('/product/:id', async (req, res) => {
            const data = req.params.id;
            const query = {_id: new ObjectId(data)};
            const result = await productCollection.deleteOne(query);
            res.send(result);
        })

        // get my cart product
        app.get('/cart/:phone', async (req, res) => {
            const phone = req.params.phone;
            const query = {userPhone: phone};
            const result = await cartCollection.find(query).toArray();
            res.send(result);
        })

        //add in cart
        app.post('/cart', async (req, res) => {
            const data = req.body;
            const update = {
                $set: {
                    userName: data.userName,
                    userEmail: data.userEmail,
                    userPhone: data.userPhone,
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    brand: data.brand,
                    color: data.color,
                    weight: data.weight,
                    dimensions: data.dimensions,
                }
            };
            const options = { upsert: true };
            const result = await cartCollection.updateOne(data, update, options);
            res.send(result);
        })

        // delete cart product
        app.delete('/cart/:id', async (req, res) => {
            const data = req.params.id;
            const query = {_id: new ObjectId(data)};
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        })

        // order from cart
        app.post('/order', async (req, res) => {
            const data = req.body;
            let setItem = [];
            let setIds = [];
            data.map(singleItem => {
                setIds.push(singleItem._id);
                delete singleItem._id;
                setItem.push(singleItem);
            })
            const result = await orderCollection.insertMany(setItem);

            const objectIds = setIds.map((id) => new ObjectId(id));

            const filter = { _id: { $in: objectIds } };
            await cartCollection.deleteMany(filter);
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