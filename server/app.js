const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

app = express();

mongoose.connect(
  "mongodb://goldenone:test123@ds137661.mlab.com:37661/gqlbooks"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema
  })
);

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
