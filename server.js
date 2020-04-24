const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

// const User = require("./models/workout.js");
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// const apiRoutes = require("./routes/apiRoutes.js");
// app.use(apiRoutes);

// const htmlRoutes = require("./routes/htmlRoutes.js");
// app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
