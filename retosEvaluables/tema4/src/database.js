const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@codenotch.dksifs1.mongodb.net/?retryWrites=true&w=majority&appName=codeNotch`)
.then((db) => {
  console.log("database connected on " + db.connection.host);
})
.catch((error) => {
  console.log("connection error: " + error)
});
