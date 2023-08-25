const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        'username': username,
        'secret': username,
        'first_name': username
      },
      { headers: { 'Private-Key': "34540d98-14ac-4920-8bbe-d90a227c942e" } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(3001);
