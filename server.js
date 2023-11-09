const app = require("./app");
const mongoose = require("mongoose");

const { DB_URI, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT);

    console.info("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
