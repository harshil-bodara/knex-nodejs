const express = require("express");
const app = express();
const port = 5000;
const userRouter = require("./routes/user");

app.use(express.json());

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});