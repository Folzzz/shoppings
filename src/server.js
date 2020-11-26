// const path = require('path')
// const express = require('express')
// const bodyParser = require('body-parser')
// const postCharge = require('./stripe')
// require('dotenv').config()

// const app = express()
// const router = express.Router()
// const port = process.env.PORT || 7000

// router.post('/stripe/charge', postCharge)
// router.all('*', (_, res) =>
//   res.json({ message: 'please make a POST request to /stripe/charge' })
// )
// app.use((_, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })
// app.use(bodyParser.json())
// app.use('/api', router)
// app.use(express.static(path.join(__dirname, '../build')))

// app.get('*', (_, res) => {
//   res.sendFile(path.resolve(__dirname, '../build/index.html'))
// })

// app.listen(port, () => console.log(`server running on port ${port}`))


const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51HridRCI8tr1Dv2NyFl7N04FgzhlvbgCxDvdhmIADCo293KifqrJp4MfyPaGym6SMiZ1wS3eU43VccCIuQZze3Z500Ax8E5N7z");
const uuid = require("uuid/v4");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token, amount } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: amount,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(8080);
