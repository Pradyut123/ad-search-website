import React, { useState, useEffect } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import axios from "axios";

const Jobs = () => {
  const [open, setOpen] = useState(false);
  const [ads, setAds] = useState("");
  const [searchAds, setSearchAds] = useState("");

  useEffect(() => {
    const PageLoadHandler = async () => {
      try {
        const response = await axios.get("http://localhost:5001/getads", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(JSON.stringify(response?.data));
        const adsdata = response?.data;
        setAds(adsdata, () => {
          return 1;
        });
      } catch (error) {
        console.log(error);
      }
    };

    PageLoadHandler();
  }, []);

  if (ads) {
    return (
      <>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Search ads"
            onChange={(e) => {
              setSearchAds(e.target.value);
            }}
          />
        </div>
        {ads
          .filter((ad) => {
            if (searchAds == "") {
              return ad;
            } else if (
              ad.name.toLowerCase().includes(searchAds.toLowerCase()) ||
              ad.primaryText.toLowerCase().includes(searchAds.toLowerCase()) ||
              ad.headline.toLowerCase().includes(searchAds.toLowerCase()) || 
              ad.description.toLowerCase().includes(searchAds.toLowerCase())
            ) {
              return ad;
            }
          })
          .map((ad) => {
            return (
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title>Company Name- {ad.name}</Card.Title>
                      <Card.Title>Primary text-</Card.Title>
                      <Card.Text className="text-muted mb-2 mt-2">
                        {ad.primaryText}
                      </Card.Text>
                    </div>
                  </div>
                  <Card.Title>Headline -</Card.Title>
                  <Card.Text className="mt-2 text-muted">
                    {ad.headline}
                  </Card.Text>
                  <Card.Title>Description -</Card.Title>
                  <Card.Text>
                    <div className="mt-2">{ad.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </>
    );
  } else {
    <>
      <h1>Loading</h1>
    </>;
  }
};

export default Jobs;
