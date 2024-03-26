const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "./config.env") });

const app = require("./app");

const demo = require("./configs/db/demo.js");

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

demo
  .authenticate()
  .then(() => {
    console.log(
      `Connected to ${demo.options.host} ${demo.config.database}`
    );
  })
  .catch((err) => {
    console.log(`Can't connect to DB: ${err.message}`);
  });