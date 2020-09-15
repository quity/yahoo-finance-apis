const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Yahoo's finance APIs");
});
var unirest = require("unirest");

app.get("/getAnalysis", (req, res) => {
  var req = unirest(
    "GET",
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis"
  );

  req.query({
    symbol: "AMRN",
  });

  req.headers({
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key": "8b6b637ee2msheb90cc31a41f8abp15e6e9jsn91be92501b8f",
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.body);
  });
});

app.get("/get-news", (req, res) => {
  var req = unirest(
    "GET",
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news"
  );

  req.query({
    region: "IN",
    category: "NBEV",
  });

  req.headers({
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key": "8b6b637ee2msheb90cc31a41f8abp15e6e9jsn91be92501b8f",
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
});
