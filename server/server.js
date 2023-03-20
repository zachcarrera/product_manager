require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { productsRouter } = require("./routes/products.routes");

const port = process.env.API_PORT;

require("./config/mongoose.config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: routes go here
app.use("/api/products", productsRouter);

app.get("/api/test", (req, res) => {
    return res.json({ message: "this test worked" });
});

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
