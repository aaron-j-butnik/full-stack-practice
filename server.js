const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
app.use(express.static("js/main.js"));

app.use(cors());

const rappers = {
  "21 savage": {
    age: "29",
    birthname: "Shéyaa Bin Abraham-Joseph",
    birthlocation: "London, England",
  },
  "chance the rapper": {
    age: "30",
    birthname: "Chancelor Johnathan Bennett",
    birthlocation: "Chicago, Illinois",
  },
  dylan: {
    age: "30",
    birthname: "Dylan",
    birthlocation: "Dylan",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  const rapperName = req.params.rapperName.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT} `);
});
