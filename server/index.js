const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster.9zce0xe.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const usersCollection = client.db("repliq").collection("users"); //role
    const placeCollection = client.db("repliq").collection("products"); //place
    const cartCollection = client.db("repliq").collection("cart"); //bookmark
    const orderCollection = client.db("repliq").collection("order"); //review
    const insightsCollection = client.db("repliq").collection("insights"); //insights
    //comments

    const subscriberCollection = client.db("repliq").collection("subscriber");

    // get subscriber data
    app.get("/all-subscriber", async (req, res) => {
      const result = await subscriberCollection.find().toArray();
      res.send(result);
    });

    //store subscriber data
    app.post("/subscriber", async (req, res) => {
      const data = req.body;
      const update = {
        $set: {
          email: data.email,
        },
      };
      const options = { upsert: true };
      const result = await subscriberCollection.updateOne(
        data,
        update,
        options
      );
      res.send(result);
    });

    // get best product
    app.get("/best-products", async (req, res) => {
      const result = await placeCollection.find().limit(6).toArray();
      res.send(result);
    });

    // get all user
    app.get("/all-users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    //store user data
    app.post("/users", async (req, res) => {
      const data = req.body;
      const update = {
        $set: {
          phoneNumber: data.phoneNumber,
          role: "user",
        },
      };
      const options = { upsert: true };
      const result = await usersCollection.updateOne(data, update, options);
      res.send(result);
    });

    //get single user
    app.get("/user/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    // delete user
    app.delete("/user/:id", async (req, res) => {
      const data = req.params.id;
      const query = { _id: new ObjectId(data) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    // get all insights
    app.get("/all-insights", async (req, res) => {
      const result = await insightsCollection.find().toArray();
      res.send(result);
    });

    // get Single users insights
    app.get("/all-insights", async (req, res) => {
      const result = await insightsCollection.find().toArray();
      res.send(result);
    });

    //store insights
    app.post("/insights", async (req, res) => {
      const data = req.body;
      const result = await insightsCollection.insertOne(data);
      res.send(result);
    });

    //get single insights
    app.get("/insights/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await insightsCollection.findOne(query);
      res.send(result);
    });

    //update insights
    app.put("/insights/update/:id", async (req, res) => {
      const data = req.body;
      const id = req.params.id;

      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          placeName: data.placeName,
          insights: data.insights,
        },
      };
      const result = await insightsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // delete insights
    app.delete("/insights/:id", async (req, res) => {
      const data = req.params.id;
      const query = { _id: new ObjectId(data) };
      const result = await insightsCollection.deleteOne(query);
      res.send(result);
    });

    // get all place
    app.get("/all-place", async (req, res) => {
      const result = await placeCollection.find().toArray();
      res.send(result);
    });

    //store place
    app.post("/place", async (req, res) => {
      const data = req.body;
      const update = {
        $set: {
          placeName: data.placeName,
        },
      };
      const options = { upsert: true };
      const result = await placeCollection.updateOne(data, update, options);
      res.send(result);
    });

    //update place
    app.put("/place/update/:id", async (req, res) => {
      const data = req.body;
      const id = req.params.id;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          category: data.category,
          placeName: data.placeName,
          location: data.location,
          from: data.from,
          to: data.to,
          attraction: data.attraction,
          description: data.description,
          history: data.history,
          activities: data.activities,
          weather: data.weather,
          tips: data.tips,
          image: data.image,
          userPhone: data.userPhone,
        },
      };
      const result = await placeCollection.updateOne(filter, updateDoc);


      // const update = {
      //   $set: {
      //     name: data.placeName,
      //   },
      // };
      // const options = { upsert: true };
      // const result = await placeCollection.updateOne(data, update, options);
      res.send(result);
    });

    //get single place
    app.get("/place/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await placeCollection.findOne(query);
      res.send(result);
    });

    // delete place
    app.delete("/place/:id", async (req, res) => {
      const data = req.params.id;
      const query = { _id: new ObjectId(data) };
      const result = await placeCollection.deleteOne(query);
      res.send(result);
    });

    // get my favourite place
    app.get("/cart/:phone", async (req, res) => {
      const phone = req.params.phone;
      const query = { userPhone: phone };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    //add in favorite
    app.post("/favorite", async (req, res) => {
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
        },
      };
      const options = { upsert: true };
      const result = await cartCollection.updateOne(data, update, options);
      res.send(result);
    });

    // delete cart product
    app.delete("/cart/:id", async (req, res) => {
      const data = req.params.id;
      const query = { _id: new ObjectId(data) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // order from cart
    app.post("/order", async (req, res) => {
      const data = req.body;
      let setItem = [];
      let setIds = [];
      data.map((singleItem) => {
        setIds.push(singleItem._id);
        delete singleItem._id;
        setItem.push(singleItem);
      });
      const result = await orderCollection.insertMany(setItem);

      const objectIds = setIds.map((id) => new ObjectId(id));

      const filter = { _id: { $in: objectIds } };
      await cartCollection.deleteMany(filter);
      res.send(result);
    });

    // my product order
    app.get("/my-product-order/:phone", async (req, res) => {
      const phone = req.params.phone;
      const query = { sellerNumber: phone };
      const result = await orderCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/order/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await orderCollection.findOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(port, () => {
  console.log("server is ok");
});
