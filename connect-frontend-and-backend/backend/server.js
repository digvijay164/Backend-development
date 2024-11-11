require("dotenv").config();
const express = require("express");
const app = express();


app.use(express.static('dist'))

app.get("/", (req, res) => {
  res.send("working");
});
app.get("/api/jokes", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "Knock-Knock Joke",
      content:
        "Knock knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!",
    },
    {
      id: 2,
      title: "Dad Joke",
      content:
        "Why don’t skeletons fight each other? They don’t have the guts.",
    },
    {
      id: 3,
      title: "Pun",
      content: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 4,
      title: "One-Liner",
      content:
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      id: 5,
      title: "Question",
      content: "Why was the math book sad? Because it had too many problems.",
    },
  ];

  res.send(joke);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running through .env file on port ${port}`);
});
