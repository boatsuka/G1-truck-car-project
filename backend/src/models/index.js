const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    id: { type: Number, required: true },
    carID: { type: Number, required: true },
    menberID: { type: Number, required: true },
    week: { type: Number, required: true },
    month: { type: Number, required: true },
    inbound: { type: String, required: true },
    outbound: { type: String, required: true },
  },
  {
    collection: "serve",
  }
);

const serve = mongoose.model("Serve", schema);

module.exports = serve;
