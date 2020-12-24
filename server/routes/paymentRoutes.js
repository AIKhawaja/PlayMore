const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET } = require("../config/keys")
const stripe = require("stripe")(STRIPE_SECRET)
const requireAuth = require("../middlewares/requireAuth")

module.exports = (app) => {
    /// Later Add a calculate amount function that uses items(i.e. songs ) to generate the amount 
    app.post("/api/create_payment_intent", requireAuth, async (req, res) => {
        const { items } = req.body
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 3500,
                
                currency: "usd"
            })
            res.send({ "clientSecret": paymentIntent.client_secret }).status(200)
        } catch (err) {
            res.send({ "Error": "Something went wrong" }).status(400)

        }
    }
    )
    app.post("/api/create_payment_session", requireAuth, async (req, res) => {
        const { name, quantity } = req.body
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: [
                    {                       
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name,
                                images: ["https://static.wikia.nocookie.net/arianagrande/images/1/1b/Positions_%E2%80%93_Limited_Edition_Cover_1.jpg/revision/latest?cb=20201030060501"]
                            },
                            unit_amount: 309,
                        },
                        quantity,
                    },
                ],
                mode: 'payment',
                success_url: "http://localhost:3000/license",
                cancel_url: "http://localhost:3000/dashboard",
            })
            res.send({ sessionId: session.id })
        }
        catch (err) {
            res.send({ err: "Something went wrong" }).status(400)
        }
    })
}



