const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonParser = bodyParser.json();
const userRoutes = require("./users/routes");
const eventRoutes = require("./events/routes");
const ticketRoutes = require("./tickets/routes");
const commentRoutes = require("./comments/routes");
const app = express();


app.use(cors());
app.use(jsonParser);
app.use(userRoutes);
app.use(eventRoutes);

app.use(ticketRoutes);
app.use(commentRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on ${port}`));
