const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./configs/db");
const { getAllReligiousPlace, addMockReligiousPlaces, getAllApprovedReligiousPlace, getAllReligiousPlaceByReligious } = require("./controllers/religiousplacecontroller");

dotenv.config();
db.connect();

const app = express();

app.use(express.json());

const corsOptions = {
    credentials: true,
};
app.use(cors(corsOptions));

// get All Religious Places
app.get("/",getAllReligiousPlace);
// get All Approved Religious Places
app.get("/approved",getAllApprovedReligiousPlace);
// get All Religious Places with religious type is the param
app.get("/:religioustype",getAllReligiousPlaceByReligious);
// insert the new document into the collection
app.post("/add",addMockReligiousPlaces);

app.listen(3000,() =>{
    console.log(`Server is running on port ${3000}`);
});