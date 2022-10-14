const express = require("express");
const router = express.Router();
const Ads = require("../models/ads.model");
const Companies = require("../models/companies.model");


router.get("/", (req, res) => {
  res.send(`hello user`);
});

// Create ads
router.post("/addjob", async (req, res) => {
  try {
    const { companyId, name, primaryText, headline, description, CTA } =
      req.body;
    const ads = new Ads({
      companyId,
      name,
      primaryText,
      headline,
      description,
      CTA,
    });
    const savedAds = await ads.save();

    res.json(savedAds);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Create companies
router.post("/addcompanies", async (req, res) => {
  try {
    const { name } = req.body;
    const companies = new Companies({
     name
    });
    const savedCompanies = await companies.save();

    res.json(savedCompanies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getads", async (req, res) => {
  try {
    const adsdata = await Ads.find();
    res.status(201).json(adsdata);
    console.log(adsdata);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;