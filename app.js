const express = require("express");
const graphqlserver = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlserver({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
