const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

dotenv.config({ path: ".env" });
require("./db/connection");

app.use(cors());

const jobRoute = require("./routes/jobRoute");

app.use(express.json());

const PORT = process.env.PORT;

app.use("/", jobRoute);

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});

