const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const ads = require("./ads.model");


const companySchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      required: true,
    },
    companyId: [{
      type: ObjectId,
      ref: "ads"
    }],

    date: {
      type: Date,
      default: Date.now,
    },
  },

);

const company = mongoose.model("company", companySchema);

module.exports = company;
