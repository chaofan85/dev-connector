import { log } from "util";

const express = require();

const app = express();

app.get("/", (req, res) => res.send("Helo"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
