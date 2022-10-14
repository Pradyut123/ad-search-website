const mongoose = require("mongoose");

const Ads = new mongoose.Schema(
  {
    // _id: {
    //   type: Number,
    //   required: true,
    //   unique: true,
    // },
    companyId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    primaryText: {
      type: String,
    },

    headline: {
      type: String,
    },
    description: {
      type: String,
    },
    CTA: {
      type: String,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "ads-data" }
);

const model = mongoose.model("adsData", Ads);

module.exports = model;